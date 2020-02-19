"use strict";

import "../style/visual.less";
import * as d3 from "d3";

import { VisualSettings } from "./settings";
import { ViewModel, Model } from "./model";

import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
import ISelectionManager = powerbi.extensibility.ISelectionManager;

type Selection<T extends d3.BaseType> = d3.Selection<T, any, any, any>;

export class BarChart {
    private host: IVisualHost;
    private selection: ISelectionManager;
    private settings: VisualSettings;

    private svg: Selection<SVGElement>;
    private chartContainer: Selection<SVGElement>;
    private xAxisContainer: Selection<SVGElement>;
    private yAxisContainer: Selection<SVGElement>;

    private margin = { top: 15, right: 15, bottom: 15, left: 100 };
    private titleText: Selection<SVGElement>;

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

        // Add text labels.
        this.titleText = this.svg
            .append("text")
                .attr("y", 40)
                .classed("title", true);
    }

    public update(settings: VisualSettings, options: VisualUpdateOptions) {
        // Load data and settings.
        this.settings = settings;
        const viewModel: ViewModel = Model.getViewModel(this.host, options.dataViews);

        // Calculate dimensions.
        const width: number = options.viewport.width;
        const height: number = options.viewport.height;
        const innerWidth = width - this.margin.left - this.margin.right;
        const innerHeight = height - this.margin.top - this.margin.bottom;

        if (this.settings.chart.chartTitle.length > 0) {
            // Set text labels.
            this.margin.top = 50;
            this.titleText
                .attr("x", width * 0.5)
                .text(this.settings.chart.chartTitle);
        }
        else {
            this.margin.top = 15;
            this.titleText
                .text("");
        }
        
        // Set container dimensions.
        this.svg
            .attr("width", width)
            .attr("height", height);

        this.chartContainer
            .attr("transform", `translate(${this.margin.left}, ${this.margin.top})`);
        
        this.xAxisContainer
            .attr("transform", `translate(0, ${innerHeight})`);

        // Calculate axes.
        const xScale = d3.scaleLinear()
            .domain([0, viewModel.maxValue])
            .range([0, innerWidth]);

        const yScale = d3.scaleBand()
            .domain(viewModel.dataPoints.map(d => d.category))
            .range([0, innerHeight])
            .padding(0.1);
        
        // Set axes.
        const xAxis = d3.axisBottom(xScale)
            .tickFormat(d3.format(".1s"))
            .tickSize(-innerHeight);
    
        this.xAxisContainer
            .call(xAxis)
            .selectAll(".domain")
                .remove();
        
        this.yAxisContainer
            .call(d3.axisLeft(yScale))
            .selectAll(".domain, .tick line")
                .remove();
        
        // Set bars.
        let bars = this.chartContainer.selectAll(".bar")
            .data(viewModel.dataPoints).enter()
            .append("rect")
                .attr("width", d => xScale(d.value))
                .attr("height", yScale.bandwidth())
                .attr("y", d => yScale(d.category))
                .classed("bar", true);
        
        // Set bar selection.
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