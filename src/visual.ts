"use strict";

import "core-js/stable";

import powerbi from "powerbi-visuals-api";
import IVisual = powerbi.extensibility.visual.IVisual;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;

import DataView = powerbi.DataView;
import VisualObjectInstance = powerbi.VisualObjectInstance;
import VisualObjectInstanceEnumerationObject = powerbi.VisualObjectInstanceEnumerationObject;

import * as d3 from "d3";

import { VisualSettings } from "./settings";
import VisualObjectInstanceEnumeration = powerbi.VisualObjectInstanceEnumeration;
import EnumerateVisualObjectInstancesOptions = powerbi.EnumerateVisualObjectInstancesOptions;

type Selection<T extends d3.BaseType> = d3.Selection<T, any, any, any>;

export interface DataPoint {
    category: string;
    value: number;
};

export interface ViewModel {
    dataPoints: DataPoint[];
    maxValue: number;
};

export class Visual implements IVisual {
    private host: IVisualHost;
    private settings: VisualSettings;
    private visualSettings: VisualSettings;

    private svg: Selection<SVGElement>;
    private container: Selection<SVGElement>;
    private xAxisContainer: Selection<SVGElement>;
    private yAxisContainer: Selection<SVGElement>;

    constructor(options: VisualConstructorOptions) {
        this.svg = d3.select(options.element)
            .append("svg")
            .classed("svg", true);

        this.container = this.svg
            .append("g")
            .classed("container", true);

        this.xAxisContainer = this.container
            .append("g")
            .classed("container", true);
        
        this.yAxisContainer = this.container
            .append("g")
            .classed("container", true);
    }

    public update(options: VisualUpdateOptions) {
        let viewModel = this.getViewModel(options);
        this.visualSettings = VisualSettings.parse<VisualSettings>(options.dataViews[0]);

        let width: number = options.viewport.width;
        let height: number = options.viewport.height;

        const margin = { top: 40, right: 15, bottom: 40, left: 185 };
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        this.svg
            .attr("width", width)
            .attr("height", height);

        this.container
            .attr("transform", `translate(${margin.left}, ${margin.top})`)
            .append("text")
                .attr("x", innerWidth * 0.5)
                .attr("y", -5)
                .text("title")
                .classed("title", true);
                
        this.xAxisContainer
            .attr("transform", `translate(0, ${innerHeight})`);

        const xScale = d3.scaleLinear()
            .domain([0, viewModel.maxValue])
            .range([0, innerWidth]);

        const yScale = d3.scaleBand()
            .domain(viewModel.dataPoints.map(d => d.category))
            .range([0, innerHeight])
            .padding(0.1);
        
        const xAxis = d3.axisBottom(xScale)
            .tickFormat(d3.format(".1s"))
            .tickSize(-innerHeight);
        const yAxis = d3.axisLeft(yScale);
    
        this.xAxisContainer.call(xAxis);
        this.yAxisContainer.call(yAxis);

        this.xAxisContainer.selectAll(".domain").remove();
        this.yAxisContainer.selectAll(".domain, .tick line").remove();

        this.xAxisContainer.append("text")
            .attr("x", innerWidth * 0.5)
            .attr("y", 30)
            .attr("fill", "black")
            .text("x label")
            .classed("axis-label", true);
        
        this.container.selectAll("rect")
            .data(viewModel.dataPoints).enter()
            .append("rect")
                .attr("width", d => xScale(d.value))
                .attr("height", yScale.bandwidth())
                .attr("y", d => yScale(d.category))
                .classed("rect", true);
    }

    private getViewModel(options: VisualUpdateOptions): ViewModel {
        let dv = options.dataViews;
        let viewModel: ViewModel = {
            dataPoints: [],
            maxValue: 0
        };

        if (!dv || !dv[0] || !dv[0].categorical || !dv[0].categorical.categories || !dv[0].categorical.values) {
            return viewModel;
        }

        let view = dv[0].categorical;
        let categories = view.categories[0];
        let values = view.values[0];

        for (let i = 0; i < Math.max(categories.values.length, values.values.length); i++) {
            viewModel.dataPoints.push({
                category: <string>categories.values[i],
                value: <number>values.values[i]
            });
        }

        viewModel.maxValue = d3.max(viewModel.dataPoints, d => d.value);
        return viewModel;
    }

    public enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstanceEnumeration {
        const settings: VisualSettings = this.visualSettings || <VisualSettings>VisualSettings.getDefault();
        return VisualSettings.enumerateObjectInstances(settings, options);
    }
}