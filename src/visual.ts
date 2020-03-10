'use strict';

import './../style/visual.less';

import powerbi from 'powerbi-visuals-api';

import IVisual = powerbi.extensibility.visual.IVisual;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;

import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import ISelectionManager = powerbi.extensibility.ISelectionManager;
import ISelectionId = powerbi.extensibility.ISelectionId;

import VisualObjectInstanceEnumeration = powerbi.VisualObjectInstanceEnumeration;
import EnumerateVisualObjectInstancesOptions = powerbi.EnumerateVisualObjectInstancesOptions;

import * as d3 from 'd3';
import { VisualSettings } from './settings';

type Selection<T extends d3.BaseType> = d3.Selection<T, any, any, any>;

export interface DataPoint {
    category: string;
    value: number;
    identity: ISelectionId;
};

export interface ViewModel {
    dataPoints: DataPoint[];
    maxValue: number;
};

export class Visual implements IVisual {
    private host: IVisualHost;
    private selection: ISelectionManager;
    private settings: VisualSettings;

    private svg: Selection<SVGElement>;
    private barContainer: Selection<SVGElement>;
    private xAxisContainer: Selection<SVGElement>;
    private yAxisContainer: Selection<SVGElement>;

    private xScale: d3.ScaleLinear<number, number>;
    private yScale: d3.ScaleBand<string>;
    private xAxis: d3.Axis<number | { valueOf(): number; }>;

    private width: number;
    private height: number;
    private innerWidth: number;
    private innerHeight: number;

    private margin = { top: 15, right: 15, bottom: 15, left: 100 };

    constructor(options: VisualConstructorOptions) {
        this.host = options.host;
        this.selection = this.host.createSelectionManager();

        this.createContainers(options.element);
    }

    private createContainers(sourceElement: HTMLElement) {
        this.svg = d3.select(sourceElement)
            .append('svg')
            .classed('svg', true);

        this.barContainer = this.svg
            .append('g')
            .classed('container', true);

        this.xAxisContainer = this.barContainer
            .append('g')
            .classed('container', true);

        this.yAxisContainer = this.barContainer
            .append('g')
            .classed('container', true);
    }

    public update(options: VisualUpdateOptions) {
        this.settings = VisualSettings.parse<VisualSettings>(options.dataViews[0]);

        this.calculateSizes(options.viewport);
        this.resizeContainers();

        const viewModel: ViewModel = this.getViewModel(options.dataViews);
        this.createAxes(viewModel);
        this.createBars(viewModel);
    }

    private calculateSizes(viewport: powerbi.IViewport) {
        this.width = viewport.width;
        this.height = viewport.height;
        this.innerWidth = this.width - this.margin.left - this.margin.right;
        this.innerHeight = this.height - this.margin.top - this.margin.bottom;
    }

    private resizeContainers() {
        this.svg
            .attr('width', this.width)
            .attr('height', this.height);

        this.barContainer
            .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

        this.xAxisContainer
            .attr('transform', `translate(0, ${this.innerHeight})`);
    }

    private createAxes(viewModel: ViewModel) {
        this.xScale = d3.scaleLinear()
            .domain([0, viewModel.maxValue])
            .range([0, this.innerWidth]);

        this.xAxis = d3.axisBottom(this.xScale)
            .tickFormat(d3.format('.1s'))
            .tickSize(-this.innerHeight);

        this.xAxisContainer
            .call(this.xAxis)
            .selectAll('.domain')
            .remove();

        this.yScale = d3.scaleBand()
            .domain(viewModel.dataPoints.map(d => d.category))
            .range([0, this.innerHeight])
            .padding(0.1);

        this.yAxisContainer
            .call(d3.axisLeft(this.yScale))
            .selectAll('.domain, .tick line')
            .remove();
    }

    private createBars(viewModel: ViewModel) {
        const barSelection = this.barContainer
            .selectAll('.bar')
            .data(viewModel.dataPoints)
            .enter();

        const bars = barSelection
            .append('rect')
            .attr('width', d => this.xScale(d.value))
            .attr('height', this.yScale.bandwidth())
            .attr('y', d => this.yScale(d.category))
            .classed('bar', true);

        bars.on('click', d => {
            this.selection.select(d.identity, true)
                .then(ids => {
                    bars.style('fill-opacity', d =>
                        ids.length > 0
                            ? ids.indexOf(d.identity) >= 0 ? 1.0 : 0.5
                            : 1.0
                    );
                });
        });

        bars.exit()
            .remove();
    }

    private getViewModel(dataViews: powerbi.DataView[]): ViewModel {
        let viewModel: ViewModel = {
            dataPoints: [],
            maxValue: 0
        };

        if (!this.hasData(dataViews)) {
            return viewModel;
        }

        const categories = dataViews[0].categorical.categories[0];
        const values = dataViews[0].categorical.values[0];

        for (let i = 0; i < Math.max(categories.values.length, values.values.length); i++) {
            viewModel.dataPoints.push({
                category: categories.values[i].toString(),
                value: +values.values[i],
                identity: this.host.createSelectionIdBuilder()
                    .withCategory(categories, i)
                    .createSelectionId()
            });

            if (values.values[i] > viewModel.maxValue) {
                viewModel.maxValue = +values.values[i];
            }
        }

        return viewModel;
    }

    private hasData(dataViews: powerbi.DataView[]): boolean {
        return dataViews
            && dataViews[0]
            && dataViews[0].categorical
            && dataViews[0].categorical.categories
            && dataViews[0].categorical.values != null;
    }

    public enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstanceEnumeration {
        const settings: VisualSettings = this.settings || <VisualSettings>VisualSettings.getDefault();
        return VisualSettings.enumerateObjectInstances(settings, options);
    }
}