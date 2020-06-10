import powerbi from 'powerbi-visuals-api';

import * as d3 from 'd3';

// import { Visual } from '../src/visual';
import ViewModel from '../src/viewModel';
import Settings from '../src/settings';

import VisualBuilder from './visualBuilder';
import VisualDataBuilder from './visualDataBuilder';


describe('Loading Plot', () => {
  let visualBuilder: VisualBuilder;

  beforeEach(() => {
    visualBuilder = new VisualBuilder(500, 500);
  });

  it('root DOM element is created', () => {
    expect(visualBuilder.mainElement).toBeInDOM();
  });
});

describe('View Model', () => {
  let visualDataBuilder: VisualDataBuilder;
  let dataView: powerbi.DataView;

  beforeEach(() => {
    visualDataBuilder = new VisualDataBuilder();
    dataView = visualDataBuilder.getDataView();
  });

  it('loads correct amount of data', () => {
    const viewModel = new ViewModel(dataView);

    expect(viewModel.vectors).toHaveLength(visualDataBuilder.valuesMeasureX.length);
  });

  it('extents are correctly set', () => {
    const viewModel = new ViewModel(dataView);

    expect(viewModel.xExtent[0]).toEqual(d3.min(visualDataBuilder.valuesMeasureX));
    expect(viewModel.xExtent[1]).toEqual(d3.max(visualDataBuilder.valuesMeasureX));
    expect(viewModel.yExtent[0]).toEqual(d3.min(visualDataBuilder.valuesMeasureY));
    expect(viewModel.yExtent[1]).toEqual(d3.max(visualDataBuilder.valuesMeasureY));
  });
});

describe('Settings', () => {
  let settings: Settings;

  beforeEach(() => {
    settings = new Settings();
  });

  it('correct margins are not changed on validate', () => {
    settings.margins.set(10, 20, 80, 45);
    settings.validate();

    expect(settings.margins.top).toEqual(10);
    expect(settings.margins.bottom).toEqual(20);
    expect(settings.margins.left).toEqual(80);
    expect(settings.margins.right).toEqual(45);
  });

  it('incorrect margins are changed on validate', () => {
    settings.margins.set(99, 20, -123, 25);
    settings.validate();

    expect(settings.margins.top).toEqual(99);
    expect(settings.margins.bottom).toEqual(20);
    expect(settings.margins.left).toEqual(0);
    expect(settings.margins.right).toEqual(25);
  });

  it('Normalize is not reset on validate', () => {
    settings.normalize.show = true;
    settings.validate();

    expect(settings.normalize.show).toBeTrue();
  });
});
