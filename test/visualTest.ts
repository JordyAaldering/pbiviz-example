import powerbi from "powerbi-visuals-api";
import { VisualBuilder } from "./VisualBuilder";

import {
    Visual as VisualClass
} from "../src/visual";

describe("Visual", () => {
    let builder: VisualBuilder;
    let dataView: DataView;

    beforeEach(() => {
        builder = new VisualBuilder(500, 500);
    });

    it("root DOM element is created", () => {
        expect(builder.mainElement).toBeDefined();
    });
});