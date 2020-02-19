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
    date: number;
    value: number;
    identity: ISelectionId;
};

export interface Line {
    points: DataPoint[];
    maxValue: number;
}

export interface ViewModel {
    lines: Line[];
    count: number;
    maxValue: number;
};

export class LineChart {
    private host: IVisualHost;
    private selection: ISelectionManager;
    private settings: VisualSettings;

    private svg: Selection<SVGElement>;
    private chartContainer: Selection<SVGElement>;
    private xAxisContainer: Selection<SVGElement>;
    private yAxisContainer: Selection<SVGElement>;

    private margin = { top: 25, right: 25, bottom: 25, left: 25 };

    public construct(host: IVisualHost, selection: ISelectionManager, options: VisualConstructorOptions) {
        this.host = host;
        this.selection = selection;

        // Add root svg element.
        this.svg = d3.select(options.element)
            .append("svg")
                .classed("svg", true);
        
        // Add chart and axes containers.
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

    public update(settings: VisualSettings, options: VisualUpdateOptions) {
        // Load data and settings.
        this.settings = settings;
        const viewModel: ViewModel = this.getViewModel(options.dataViews);
        const data = viewModel.lines[0].points;
        
        // Calculate dimensions.
        const width: number = options.viewport.width;
        const height: number = options.viewport.height;
        const innerWidth = width - this.margin.left - this.margin.right;
        const innerHeight = height - this.margin.top - this.margin.bottom;

        this.svg
            .attr("width", width)
            .attr("height", height);

        this.chartContainer
            .attr("transform", `translate(${this.margin.left}, ${this.margin.top})`)

        const xScale = d3.scaleTime()
            .domain(d3.extent(data, d => d.date))
            .range([0, innerWidth]);
        
        const yScale = d3.scaleLinear()
            .domain(d3.extent(data, d => d.value))
            .range([innerHeight, 0])
            .nice();

        const xAxis = d3.axisBottom(xScale)
            .tickSize(-innerHeight)
            .tickPadding(5);

        const yAxis = d3.axisLeft(yScale)
            .tickSize(-innerWidth)
            .tickPadding(5);

        this.xAxisContainer
            .call(xAxis)
            .attr("transform", `translate(0, ${innerHeight})`)
            .selectAll(".domain")
                .remove();
                
        this.yAxisContainer
            .call(yAxis)
            .selectAll(".domain")
                .remove();

        const lineGen = d3.line()
            .x(d => xScale(d[0]))
            .y(d => yScale(d[1]))
            .curve(d3.curveBasis);
        
        this.chartContainer.append("path")
            .attr("d", lineGen(data.map(d => [d.date, d.value])))
            .classed("line-path", true);
    }

    private getViewModel(dataViews: powerbi.DataView[]): ViewModel {
        let viewModel: ViewModel = {
            lines: [],
            count: dataViews[0].categorical.values.length,
            maxValue: 0
        };

        if (!dataViews || !dataViews[0] || !dataViews[0].categorical || 
            !dataViews[0].categorical.categories || !dataViews[0].categorical.values) {
            return viewModel;
        }
        
        let view = dataViews[0].categorical;
        let categories = view.categories[0];
        
        for (let i = 0; i < viewModel.count; i++) {
            let values = view.values[i];
            viewModel.lines.push({
                points: [],
                maxValue: 0
            });

            for (let j = 0; j < values.values.length; j++) {
                viewModel.lines[i].points.push({
                    date: <number>(categories.values[j] || 0),
                    value: <number>values.values[j],
                    identity: this.host.createSelectionIdBuilder()
                        .withCategory(categories, j)
                        .createSelectionId()
                });
            }

            viewModel.lines[i].maxValue = d3.max(
                viewModel.lines[i].points,
                d => d.value
            );
        }
        
        viewModel.maxValue = d3.max(
            viewModel.lines,
            d => d.maxValue
        );

        return viewModel;
    }
}