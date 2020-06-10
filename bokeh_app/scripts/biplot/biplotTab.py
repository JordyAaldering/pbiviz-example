from bokeh.layouts import column, row
from bokeh.models import Panel

from .visual import Biplot


def biplot_tab(data):
    labels = data.columns.values[1:]
    categories = data.values[:, 0]
    values = data.values[:, 1:]

    biplot = Biplot(labels, values, categories)

    layout = column(row(biplot.select_X, biplot.select_Y), row(biplot.figure))

    tab = Panel(child=layout, title="Biplot")
    return tab
