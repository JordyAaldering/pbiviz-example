from bokeh.layouts import column, row
from bokeh.models import Panel

from .visual import LoadingPlot


def loading_plot_tab(data):
    labels = data.columns.values[1:]
    values = data.values[:, 1:]

    loadingPlot = LoadingPlot(labels, values)

    layout = column(
        row(loadingPlot.select_X, loadingPlot.select_Y), row(loadingPlot.figure)
    )

    tab = Panel(child=layout, title="Loading Plot")
    return tab
