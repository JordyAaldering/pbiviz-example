"use strict";

import { DataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils/lib/dataViewObjectsParser";

export class VisualSettings extends DataViewObjectsParser {
  public chart: ChartSettings = new ChartSettings();
}

export class ChartSettings {
  public chartTitle: string = "";
}