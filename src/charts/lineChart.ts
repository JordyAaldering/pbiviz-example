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

export class LineChart {
    private host: IVisualHost;
    private selection: ISelectionManager;
    private settings: VisualSettings;

    private svg: Selection<SVGElement>;
    private chartContainer: Selection<SVGElement>;
    private xAxisContainer: Selection<SVGElement>;
    private yAxisContainer: Selection<SVGElement>;

    public construct(host: IVisualHost, selection: ISelectionManager, options: VisualConstructorOptions) {
        this.host = host;
        this.selection = selection;

        // Add root svg element.
        this.svg = d3.select(options.element)
            .append("svg")
                .classed("svg", true);
    }

    public update(settings: VisualSettings, options: VisualUpdateOptions) {
        // Load data and settings.
        this.settings = settings;
        const viewModel: ViewModel = this.getViewModel(options.dataViews);

        // Calculate dimensions.
        const width: number = options.viewport.width;
        const height: number = options.viewport.height;
    }

    private getViewModel(dataViews: powerbi.DataView[]): ViewModel {
        let viewModel: ViewModel = {
            dataPoints: [],
            maxValue: 0
        };

        if (!dataViews || !dataViews[0] || !dataViews[0].categorical || 
            !dataViews[0].categorical.categories || !dataViews[0].categorical.values) {
            return viewModel;
        }

        // todo

        viewModel.maxValue = d3.max(viewModel.dataPoints, d => d.value);
        return viewModel;
    }
}