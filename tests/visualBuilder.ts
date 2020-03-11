import powerbi from 'powerbi-visuals-api';
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;

import {
    Visual
} from '../src/visual';

import {
    VisualBuilderBase
} from 'powerbi-visuals-utils-testutils';

export class VisualBuilder extends VisualBuilderBase<Visual> {
    constructor(width: number, height: number) {
        super(width, height);
    }

    protected build(options: VisualConstructorOptions) {
        return new Visual(options);
    }

    public get mainElement() {
        return this.element.children('svg');
    }
}