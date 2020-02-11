import powerbi from "powerbi-visuals-api";

import { VisualBuilder } from "./VisualBuilder";

import {
    Visual as VisualClass
} from "../src/visual";

describe("BarChart", () => {
    let visualBuilder: VisualBuilder;
    let dataView: DataView;

    beforeEach(() => {
        visualBuilder = new VisualBuilder(500, 500);
    });

    it("root DOM element is created", () => {
        expect(visualBuilder.mainElement).toBeInDOM();
    });
});