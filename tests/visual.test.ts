import { Visual } from '../src/visual';

import { VisualBuilder } from './VisualBuilder';
import { VisualDataBuilder } from "./visualDataBuilder";

test('root element is created', () => {
  let visualBuilder: VisualBuilder = new VisualBuilder(500, 500);
  let visualDataBuilder: VisualDataBuilder = new VisualDataBuilder();

  expect(visualBuilder.mainElement).toBeDefined;
});