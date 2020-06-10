/* eslint-disable max-classes-per-file */
import { DataViewObjectsParser } from 'powerbi-visuals-utils-dataviewutils/lib/dataViewObjectsParser';

export class Margins {
  public top = 20;

  public bottom = 20;

  public left = 30;

  public right = 20;

  public set(top: number, bottom: number, left: number, right: number): void {
    this.top = top;
    this.bottom = bottom;
    this.left = left;
    this.right = right;
  }
}

export class Normalize {
  public show = false;
}

export class Labels {
  public labelX = '';

  public labelY = '';

  public labelVectors = false;
}

export default class VisualSettings extends DataViewObjectsParser {
  public margins = new Margins();

  public normalize = new Normalize();

  public labels = new Labels();

  public validate(): void {
    if (this.margins.top < 0) this.margins.top = 0;
    if (this.margins.bottom < 0) this.margins.bottom = 0;
    if (this.margins.left < 0) this.margins.left = 0;
    if (this.margins.right < 0) this.margins.right = 0;
  }
}
