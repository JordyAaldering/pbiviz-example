"use strict";

try {
    require("./../style/visual.less");
} catch {
    console.log("./../style/visual.less not found; Ignoring.")
}

import { VisualSettings } from "./settings";

import { BarChart } from "./charts/barChart";
import { LineChart } from "./charts/lineChart";

import powerbi from "powerbi-visuals-api";
import IVisual = powerbi.extensibility.visual.IVisual;
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import VisualObjectInstanceEnumeration = powerbi.VisualObjectInstanceEnumeration;
import EnumerateVisualObjectInstancesOptions = powerbi.EnumerateVisualObjectInstancesOptions;

export class Visual implements IVisual {
    private settings: VisualSettings;
    private chart: BarChart;

    constructor(options: VisualConstructorOptions) {
        this.chart = new BarChart;
        this.chart.construct(options.host, options);
    }

    public update(options: VisualUpdateOptions) {
        this.settings = VisualSettings.parse<VisualSettings>(options.dataViews[0]);
        this.chart.update(this.settings, options);
    }

    public enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstanceEnumeration {
        const settings: VisualSettings = this.settings || <VisualSettings>VisualSettings.getDefault();
        return VisualSettings.enumerateObjectInstances(settings, options);
    }
}