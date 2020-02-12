"use strict";

import "core-js/stable";
import "../style/visual.less";

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
    private settings: VisualSettings;

    private svg: Selection<SVGElement>;
    private chartContainer: Selection<SVGElement>;
    private xAxisContainer: Selection<SVGElement>;
    private yAxisContainer: Selection<SVGElement>;

    private titleText: Selection<SVGElement>;
    private labelText: Selection<SVGElement>;

    constructor(options: VisualConstructorOptions) {
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

        // Add text labels.
        this.titleText = this.svg
            .append("text")
                .attr("y", 40)
                .classed("title", true);
        
        this.labelText = this.xAxisContainer
            .append("text")
                .attr("y", 35)
                .classed("label", true);
    }

    public update(options: VisualUpdateOptions) {
        const viewModel = this.getViewModel(options);
        this.settings = VisualSettings.parse<VisualSettings>(options.dataViews[0]);

        const margin = { 
            top: 45,
            right: 15,
            bottom: 45,
            left: 100
        };
        
        const width: number = options.viewport.width;
        const height: number = options.viewport.height;
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        this.svg.attr("width", width).attr("height", height);
        this.chartContainer.attr("transform", `translate(${margin.left}, ${margin.top})`);
        this.xAxisContainer.attr("transform", `translate(0, ${innerHeight})`);

        this.titleText
            .attr("x", innerWidth * 0.5)
            .text(this.settings.chart.chartTitle);
                
        this.labelText
            .attr("x", innerWidth * 0.5)
            .text(this.settings.chart.chartXLabel);

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
        
        this.chartContainer.selectAll("rect")
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
        const settings: VisualSettings = this.settings || <VisualSettings>VisualSettings.getDefault();
        return VisualSettings.enumerateObjectInstances(settings, options);
    }
}