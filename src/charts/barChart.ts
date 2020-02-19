"use strict";

import * as d3 from "d3";
import { VisualSettings } from "../settings";

import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
import ISelectionManager = powerbi.extensibility.ISelectionManager;
import ISelectionId = powerbi.extensibility.ISelectionId;

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

export class BarChart {
    private host: IVisualHost;
    private selection: ISelectionManager;
    private settings: VisualSettings;

    private svg: Selection<SVGElement>;
    private chartContainer: Selection<SVGElement>;
    private xAxisContainer: Selection<SVGElement>;
    private yAxisContainer: Selection<SVGElement>;

    private titleText: Selection<SVGElement>;

    private xScale: d3.ScaleLinear<number, number>;
    private yScale: d3.ScaleBand<string>;
    private xAxis: d3.Axis<number | { valueOf(): number; }>;

    private margin = { top: 15, right: 15, bottom: 15, left: 100 };
    private width: number;
    private height: number;
    private innerWidth: number;
    private innerHeight: number;

    public construct(host: IVisualHost, options: VisualConstructorOptions) {
        this.host = host;
        this.selection = this.host.createSelectionManager();

        this.createContainers(options.element);
        this.createLabels();
    }

    private createContainers(sourceElement: HTMLElement) {
        this.svg = d3.select(sourceElement)
            .append("svg")
                .classed("svg", true);

        this.chartContainer = this.svg
            .append("g")
                .classed("container", true);
        
        this.xAxisContainer = this.chartContainer
            .append("g")
                .classed("container", true);
        
        this.yAxisContainer = this.chartContainer
            .append("g")
                .classed("container", true);
    }

    private createLabels() {
        this.titleText = this.svg
            .append("text")
                .attr("y", 40)
                .classed("title", true);
    }

    public update(settings: VisualSettings, options: VisualUpdateOptions) {
        this.settings = settings;
        this.calculateSizes(options);
        
        this.resizeContainers();
        this.setTitle();
        
        const viewModel: ViewModel = this.getViewModel(options.dataViews);
        this.createAxes(viewModel);
        this.createBars(viewModel);
    }

    private calculateSizes(options: VisualUpdateOptions) {
        this.width = options.viewport.width;
        this.height = options.viewport.height;
        this.innerWidth = this.width - this.margin.left - this.margin.right;
        this.innerHeight = this.height - this.margin.top - this.margin.bottom;
    }

    private resizeContainers() {
        this.svg
            .attr("width", this.width)
            .attr("height", this.height);

        this.chartContainer
            .attr("transform", `translate(${this.margin.left}, ${this.margin.top})`);
        
        this.xAxisContainer
            .attr("transform", `translate(0, ${this.innerHeight})`);
    }

    private setTitle() {
        if (this.settings.chart.chartTitle.length > 0) {
            this.margin.top = 50;
            this.titleText
                .attr("x", this.width * 0.5)
                .text(this.settings.chart.chartTitle);
        }
        else {
            this.margin.top = 15;
            this.titleText
                .text("");
        }
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

    private createAxes(viewModel: ViewModel) {
        this.xScale = d3.scaleLinear()
            .domain([0, viewModel.maxValue])
            .range([0, this.innerWidth]);

        this.yScale = d3.scaleBand()
            .domain(viewModel.dataPoints.map(d => d.category))
            .range([0, this.innerHeight])
            .padding(0.1);
        
        this.xAxis = d3.axisBottom(this.xScale)
            .tickFormat(d3.format(".1s"))
            .tickSize(-this.innerHeight);
    
        this.xAxisContainer
            .call(this.xAxis)
            .selectAll(".domain")
                .remove();
        
        this.yAxisContainer
            .call(d3.axisLeft(this.yScale))
            .selectAll(".domain, .tick line")
                .remove();
    }

    private createBars(viewModel: ViewModel) {
        const bars = this.chartContainer.selectAll(".bar")
            .data(viewModel.dataPoints).enter()
            .append("rect")
                .attr("width", d => this.xScale(d.value))
                .attr("height", this.yScale.bandwidth())
                .attr("y", d => this.yScale(d.category))
                .classed("bar", true);
        
        bars.on("click", d => {
            this.selection.select(d.identity, true)
                .then(ids => {
                    bars.style("fill-opacity", d =>
                        ids.length > 0 
                            ? ids.indexOf(d.identity) >= 0 ? 1.0 : 0.5
                            : 1.0
                    );
                });
        });

        bars.exit()
            .remove();
    }
}