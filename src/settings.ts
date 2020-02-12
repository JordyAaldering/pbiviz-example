"use strict";

import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
import DataViewObjectsParser = dataViewObjectsParser.DataViewObjectsParser;

export class VisualSettings extends DataViewObjectsParser {
  public chart: ChartSettings = new ChartSettings();
}

export class ChartSettings {
  public chartTitle: string = "";
  public chartXLabel: string = "";
}