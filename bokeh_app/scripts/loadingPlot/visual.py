from bokeh.plotting import figure as Figure
from bokeh.models import (
    Arrow,
    VeeHead,
    ColumnDataSource,
    HoverTool,
    LabelSet,
    Range1d,
    Select,
)

from .pcaDataView import PcaDataView


class LoadingPlot:
    def __init__(self, labels: [], data: [], categories=[], width=600, height=600):
        self.dataView = PcaDataView(labels, data, categories)

        tools = "box_zoom, pan, tap, wheel_zoom, reset, zoom_in, zoom_out"
        self.figure = Figure(plot_width=width, plot_height=height, tools=tools)

        self.figure.xaxis.fixed_location = 0
        self.figure.yaxis.fixed_location = 0

        range_max = self.dataView.compute_range()
        self.set_axes(range_max, 0, 1)

        self.add_tools()
        self.add_layouts(self.dataView.source)
        self.add_selections()

    def set_axes(self, range_max: [float], x_index: int, y_index: int):
        offset = 0.1
        self.figure.x_range = Range1d(
            -range_max[x_index] - offset, range_max[x_index] + offset
        )
        self.figure.y_range = Range1d(
            -range_max[y_index] - offset, range_max[y_index] + offset
        )

    def update_x_axis(self, value):
        self.dataView.update_x_axis(value)
        self.arrows.source = self.dataView.copy_source()

    def update_y_axis(self, value: None):
        self.dataView.update_y_axis(value)
        self.arrows.source = self.dataView.copy_source()

    def add_tools(self):
        hover = HoverTool(
            tooltips=[
                ("", "@features"),
                ("X", "@active_col_x{0.0000}"),
                ("Y", "@active_col_y{0.0000}"),
            ]
        )

        self.figure.toolbar_location = "above"
        self.figure.add_tools(hover)

    def add_layouts(self, source: ColumnDataSource):
        self.circles = self.figure.circle(
            source=source,
            x="active_col_x",
            y="active_col_y",
            line_alpha=0,
            fill_alpha=0,
            size=18,
        )

        self.arrows = Arrow(
            source=source,
            x_start=0,
            y_start=0,
            x_end="active_col_x",
            y_end="active_col_y",
            end=VeeHead(size=10),
        )

        self.labels = LabelSet(
            source=source,
            x="active_col_x",
            y="active_col_y",
            text="features",
            text_font_size="10px",
            x_offset=-40,
            y_offset=-22,
        )

        self.figure.add_layout(self.arrows)
        self.figure.add_layout(self.labels)

    def add_selections(self):
        num_features = len(self.dataView.features)
        labels = ["PC{}".format(i + 1) for i in range(num_features)]

        self.select_X = Select(title="PC on x-axis", value="PC1", options=labels)
        self.select_Y = Select(title="PC on y-axis", value="PC2", options=labels)

        self.select_X.on_change(
            "value", lambda attr, old, new: self.update_x_axis(self.select_X.value)
        )
        self.select_Y.on_change(
            "value", lambda attr, old, new: self.update_y_axis(self.select_Y.value)
        )

    def update_plot_no(self):
        self.dataView.load_pca()
        self.dataView.update_x_axis(self.select_X.value)
        self.dataView.update_y_axis(self.select_Y.value)

        range_max = self.dataView.compute_range()
        self.set_axes(
            range_max,
            int(self.select_X.value[2:]) - 1,
            int(self.select_Y.value[2:]) - 1,
        )

    def update_no(self, attr, old, new):
        num_features = len(self.dataView.features)
        labels = ["PC{}".format(i + 1) for i in range(num_features)]

        self.select_X.options = labels
        self.select_Y.options = labels

        if int(self.select_X.value[2:]) > num_features:
            self.select_X.value = "PC1"
            self.update_x_axis("PC1")
        if int(self.select_Y.value[2:]) > num_features:
            self.select_Y.value = "PC2"
            self.update_y_axis("PC2")

        self.update_plot_no()
