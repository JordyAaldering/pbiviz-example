import powerbi from "powerbi-visuals-api";
import DataView = powerbi.DataView;

import {
    TestDataViewBuilder
} from "powerbi-visuals-utils-testutils/lib/dataViewBuilder/testDataViewBuilder";

import {
    ValueType
} from "powerbi-visuals-utils-typeutils/lib/valueType";

export class VisualDataBuilder extends TestDataViewBuilder {
    private valuesCategory: string[] = ["a", "b", "c", "d", "e", "f", "g"];
    private valuesMeasure: number[] = [1, 2, 3, 4, 5, 6, 7];

    public constructor() {
        super();
    }

    public getDataView(columnNames?: string[]): DataView {
        return this.createCategoricalDataViewBuilder(
            [
                {
                    source: {
                        displayName: "Category",
                        type: ValueType.fromDescriptor({ text: true }),
                        roles: {
                            Category: true
                        },
                    },
                    values: this.valuesCategory
                }
            ],
            [
                {
                    source: {
                        displayName: "Measure",
                        isMeasure: true,
                        type: ValueType.fromDescriptor({ numeric: true }),
                        roles: {
                            Measure: true
                        },
                    },
                    values: this.valuesMeasure
                },
            ], columnNames).build();
    }
}