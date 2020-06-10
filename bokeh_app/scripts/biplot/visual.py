from bokeh.models import ColumnDataSource

from ..loadingPlot.visual import LoadingPlot


class Biplot(LoadingPlot):
    def __init__(self, labels: [], data: [], categories=[], width=600, height=600):
        super().__init__(labels, data, categories, width, height)

    def add_layouts(self, source: ColumnDataSource):
        self.scatter = self.figure.scatter(
            source=self.dataView.scatter_source,
            legend_field="features",
            x="active_col_x",
            y="active_col_y",
            color="color",
            line_alpha=0.8,
            fill_alpha=0.4,
            size=6,
        )

        super().add_layouts(source)
