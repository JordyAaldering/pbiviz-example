import powerbi from 'powerbi-visuals-api';

import { valueType } from 'powerbi-visuals-utils-typeutils';

import { testDataViewBuilder } from 'powerbi-visuals-utils-testutils';

import DataView = powerbi.DataView;
import ValueType = valueType.ValueType;
import TestDataViewBuilder = testDataViewBuilder.TestDataViewBuilder;

/**
 * A class for creating a DataView with static test data
 * that can be used for Unit Testing.
 */
export default class VisualDataBuilder extends TestDataViewBuilder {
  public valuesCategory: string[] = [
    'PC1', 'PC2', 'PC3', 'PC4', 'PC5', 'PC6', 'PC7', 'PC8', 'PC9',
  ];

  public valuesMeasureX: number[] = [
    -1, -0.8, -0.55, -0.4, -0.1, 0, 0.25, 0.4, 0.8,
  ];

  public valuesMeasureY: number[] = [
    -0.85, 1, 0.35, -0.4, -1, 0.6, 0.1, 0, -0.7,
  ];

  public constructor() {
    super();
  }

  public getDataView(columnNames?: string[]): DataView {
    const dataView: DataView = this.createCategoricalDataViewBuilder([
      {
        source: {
          displayName: 'Category',
          queryName: 'category',
          type: ValueType.fromDescriptor({ text: true }),
          roles: {
            Category: true,
          },
        },
        values: this.valuesCategory,
      },
    ],
    [
      {
        source: {
          displayName: 'Measure',
          isMeasure: true,
          queryName: 'measure',
          type: ValueType.fromDescriptor({ numeric: true }),
          roles: {
            Measure: true,
          },
        },
        values: this.valuesMeasureX,
      },
      {
        source: {
          displayName: 'Measure',
          isMeasure: true,
          queryName: 'measure',
          type: ValueType.fromDescriptor({ numeric: true }),
          roles: {
            Measure: true,
          },
        },
        values: this.valuesMeasureY,
      },
    ], columnNames).build();

    return dataView;
  }
}
