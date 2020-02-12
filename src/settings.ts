"use strict";

import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
import DataViewObjectsParser = dataViewObjectsParser.DataViewObjectsParser;

export class VisualSettings extends DataViewObjectsParser {
  public circle: CircleSettings = new CircleSettings();
}

export class CircleSettings {
  public circleColor: string = "white";
  public circleThickness: number = 2;
}