import powerbi from 'powerbi-visuals-api';

import { VisualBuilderBase } from 'powerbi-visuals-utils-testutils';
import { Visual } from '../src/visual';

import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;

/**
 * A class for creating an instance of the visual
 * that can be used for Unit Testing.
 */
export default class VisualBuilder extends VisualBuilderBase<Visual> {
  /**
     * Returns a new instance of the visual.
     */
  // eslint-disable-next-line class-methods-use-this
  protected build(options: VisualConstructorOptions): Visual {
    return new Visual(options);
  }

  public get mainElement(): unknown {
    return this.element.children('svg');
  }
}
