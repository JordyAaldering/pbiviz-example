import powerbi from "powerbi-visuals-api";
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
import ISelectionId = powerbi.extensibility.ISelectionId;

import { max } from "d3";

export interface DataPoint {
    category: string;
    value: number;
    identity: ISelectionId;
};

export interface ViewModel {
    dataPoints: DataPoint[];
    maxValue: number;
};

export class Model {
    public static getViewModel(host: IVisualHost, dataViews: powerbi.DataView[]): ViewModel {
        let viewModel: ViewModel = {
            dataPoints: [],
            maxValue: 0
        };

        if (!dataViews || !dataViews[0] || !dataViews[0].categorical || 
            !dataViews[0].categorical.categories || !dataViews[0].categorical.values) {
            return viewModel;
        }

        let view = dataViews[0].categorical;
        let categories = view.categories[0];
        let values = view.values[0];

        for (let i = 0; i < Math.max(categories.values.length, values.values.length); i++) {
            viewModel.dataPoints.push({
                category: <string>categories.values[i],
                value: <number>values.values[i],
                identity: host.createSelectionIdBuilder()
                    .withCategory(categories, i)
                    .createSelectionId()
            });
        }

        viewModel.maxValue = max(viewModel.dataPoints, d => d.value);
        return viewModel;
    }
}