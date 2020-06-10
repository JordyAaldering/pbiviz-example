import '../style/visual.less';

import powerbi from 'powerbi-visuals-api';

import * as d3 from 'd3';
import ViewModel from './viewModel';
import VisualSettings from './settings';

import IVisual = powerbi.extensibility.visual.IVisual;
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;

import EnumerateVisualInstancesOptions = powerbi.EnumerateVisualObjectInstancesOptions;
import VisualObjectInstanceEnumeration = powerbi.VisualObjectInstanceEnumeration;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Selection<T extends d3.BaseType> = d3.Selection<T, any, any, any>;
type ScaleLinear = d3.ScaleLinear<number, number>;

// eslint-disable-next-line import/prefer-default-export
export class Visual implements IVisual {
  private settings: VisualSettings;

  private svg: Selection<SVGElement>;

  private mainGraphicsContext: Selection<SVGElement>;

  private mainDataContext: Selection<SVGElement>;

  private xAxisContext: Selection<SVGElement>;

  private yAxisContext: Selection<SVGElement>;

  private xLabel: Selection<SVGElement>;

  private yLabel: Selection<SVGElement>;

  private viewModel: ViewModel;

  private xScale: ScaleLinear;

  private yScale: ScaleLinear;

  private width: number;

  private height: number;

  private innerWidth: number;

  private innerHeight: number;

  constructor(options: VisualConstructorOptions) {
    this.createContainers(options.element);
    this.initializeTextures();
  }

  private createContainers(root: HTMLElement): void {
    this.svg = d3.select(root)
      .append('svg')
      .classed('svg', true);

    this.mainGraphicsContext = this.svg
      .append('g')
      .classed('container', true);

    this.mainDataContext = this.mainGraphicsContext
      .append('g')
      .classed('container', true);

    this.xAxisContext = this.mainGraphicsContext
      .append('g')
      .classed('axis', true);

    this.yAxisContext = this.mainGraphicsContext
      .append('g')
      .classed('axis', true);
  }

  private initializeTextures(): void {
    const defs = this.mainGraphicsContext
      .append('defs');

    defs.append('marker')
      .attr('id', 'arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 5)
      .attr('refY', 0)
      .attr('markerWidth', 8)
      .attr('markerHeight', 8)
      .attr('orient', 'auto')
      .append('path')
      .attr('d', 'M0,-5L10,0L0,5')
      .attr('class', 'arrowHead');
  }

  public update(options: VisualUpdateOptions): void {
    this.settings = VisualSettings.parse<VisualSettings>(options.dataViews[0]);
    this.settings.validate();

    this.viewModel = new ViewModel(options.dataViews[0]);
    if (this.settings.normalize.show) {
      this.viewModel.normalize();
    }

    this.calculateDimensions(options.viewport);

    this.createScales();
    this.createAxes();
    this.createLabels();

    this.resizeContainers();
    this.plotDataArrows();
  }

  private calculateDimensions(viewport: powerbi.IViewport): void {
    this.width = viewport.width;
    this.height = viewport.height;
    this.innerWidth = this.width - this.settings.margins.left - this.settings.margins.right;
    this.innerHeight = this.height - this.settings.margins.top - this.settings.margins.bottom;
  }

  private createAxes(): void {
    const xAxis = d3.axisBottom(this.xScale);
    const yAxis = d3.axisLeft(this.yScale);

    this.xAxisContext.call(xAxis);
    this.yAxisContext.call(yAxis);
  }

  private resizeContainers(): void {
    this.svg
      .attr('width', this.width)
      .attr('height', this.height);

    this.mainGraphicsContext
      .attr('transform', `translate(${this.settings.margins.left}, ${this.settings.margins.top})`);

    this.xAxisContext
      .attr('transform', `translate(0, ${this.yScale(0)})`);

    this.yAxisContext
      .attr('transform', `translate(${this.xScale(0)}, 0)`);
  }

  private createScales(): void {
    const { xExtent, yExtent } = this.viewModel;

    this.xScale = d3.scaleLinear()
      .domain(xExtent)
      .range([0, this.innerWidth])
      .nice();

    this.yScale = d3.scaleLinear()
      .domain(yExtent)
      .range([this.innerHeight, 0])
      .nice();
  }

  private createLabels(): void {
    if (this.xLabel != null) this.xLabel.remove();
    if (this.yLabel != null) this.yLabel.remove();

    this.xLabel = this.mainGraphicsContext.append('text')
      .attr('transform', `translate(${this.width * 0.95}, ${this.yScale(0) - 2})`)
      .style('text-anchor', 'end')
      .text(this.settings.labels.labelX)
      .classed('label', true);

    this.yLabel = this.mainGraphicsContext.append('text')
      .attr('transform', 'rotate(90)')
      .attr('x', this.height * 0.02)
      .attr('y', -this.xScale(0) - 4)
      .style('text-anchor', 'start')
      .text(this.settings.labels.labelY)
      .classed('label', true);
  }

  private plotDataArrows(): void {
    // Get all current arrows.
    const arrows = this.mainDataContext
      .selectAll('.arrow')
      .data(this.viewModel.vectors);

    // Update positions of existing arrows.
    arrows.attr('x1', this.xScale(0))
      .attr('y1', this.yScale(0))
      .attr('x2', (d) => this.xScale(d[0]))
      .attr('y2', (d) => this.yScale(d[1]));

    // Create parent groups for new vectors.
    const nodes = arrows
      .enter()
      .append('g')
      .classed('vector', true);

    // Create lines for data that did not yet exits.
    nodes.append('line')
      .attr('x1', this.xScale(0))
      .attr('y1', this.yScale(0))
      .attr('x2', (d) => this.xScale(d[0]))
      .attr('y2', (d) => this.yScale(d[1]))
      .attr('marker-end', 'url(#arrow)')
      .classed('arrow', true);

    this.plotLabels(nodes);

    arrows.exit()
      .remove();
  }

  private plotLabels(nodes: Selection<SVGGElement>): void {
    const labels = this.mainDataContext
      .selectAll('.label');

    if (this.settings.labels.labelVectors) {
      // Update positions of existing labels.
      labels.attr('x', (d) => this.xScale(d[0]))
        .attr('y', (d) => this.yScale(d[1]));

      let vectors = nodes;
      if (labels.empty()) {
        vectors = this.mainDataContext.selectAll('.vector');
      }

      // Create labels for data that did not yet exits.
      vectors.append('text')
        .attr('x', (d) => this.xScale(d[0]))
        .attr('y', (d) => this.yScale(d[1]))
        .text((_, i) => this.viewModel.labels[i])
        .classed('label', true);
    } else {
      labels.remove();
    }
  }

  public enumerateObjectInstances(options: EnumerateVisualInstancesOptions):
  VisualObjectInstanceEnumeration {
    const settings: VisualSettings = this.settings || VisualSettings.getDefault() as VisualSettings;
    return VisualSettings.enumerateObjectInstances(settings, options);
  }
}
