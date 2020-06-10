import powerbi from 'powerbi-visuals-api';

import DataView = powerbi.DataView;

type Vector2 = [number, number];

export default class ViewModel {
  public labels: string[] = [];

  public vectors: Vector2[] = [];

  public xExtent = [0, 0];

  public yExtent = [0, 0];

  constructor(dataView: DataView) {
    if (ViewModel.dataViewIsValid(dataView)) {
      this.loadData(dataView);
    }
  }

  private static dataViewIsValid(dataView: DataView): boolean {
    return dataView.categorical != null
            && dataView.categorical.values != null
            && dataView.categorical.values.length >= 2
            && dataView.categorical.values[0].values.length >= 1
            && dataView.categorical.values[1].values.length >= 1;
  }

  private loadData(dataView: DataView): void {
    const categories = dataView.categorical.categories[0].values;
    const measures = dataView.categorical.values;

    for (let i = 0; i < categories.length; i += 1) {
      this.labels.push(categories[i] as string);

      const x = +measures[0].values[i];
      const y = +measures[1].values[i];

      this.updateExtents(x, y);
      this.vectors.push([x, y]);
    }
  }

  public normalize(): void {
    const maxX = Math.max(Math.abs(this.xExtent[0]), Math.abs(this.xExtent[1]));
    const maxY = Math.max(Math.abs(this.yExtent[0]), Math.abs(this.yExtent[1]));
    const magnitude = Math.sqrt(maxX * maxX + maxY * maxY);

    if (magnitude < 0.01) {
      return;
    }

    this.vectors.map((v) => [v[0] / magnitude, v[1] / magnitude]);
  }

  private updateExtents(x: number, y: number): void {
    if (x < this.xExtent[0]) {
      this.xExtent[0] = x;
    } else if (x > this.xExtent[1]) {
      this.xExtent[1] = x;
    }

    if (y < this.yExtent[0]) {
      this.yExtent[0] = y;
    } else if (y > this.yExtent[1]) {
      this.yExtent[1] = y;
    }
  }
}
