from ..scripts.loadingPlot.loadingPlotTab import loading_plot_tab
from ..scripts.loadingPlot.visual import LoadingPlot

import numpy as np
import pandas as pd

from bokeh.plotting.figure import Figure
from bokeh.models import ColumnDataSource, Panel

data = {
    "A": [10, 20, 35, 25],
    "B": [90, 40, 75, 55],
    "C": [65, 15, 10, 90],
}
df = pd.DataFrame(data)
plot = LoadingPlot(df.columns.values, df.values)


def test_correct_tab_type():
    tab = loading_plot_tab(df)
    assert type(tab) == Panel


def test_features_are_equal():
    assert plot.dataView.features.tolist() == ["A", "B", "C"]


def test_data_is_equal():
    assert plot.dataView.data.tolist() == [
        [10, 90, 65],
        [20, 40, 15],
        [35, 75, 10],
        [25, 55, 90],
    ]


def test_correct_loadings_type():
    assert type(plot.dataView.loadings) == np.ndarray


def test_correct_number_of_loadings():
    assert len(plot.dataView.loadings) == 3


def test_correct_source_type():
    assert type(plot.dataView.source) == ColumnDataSource


def test_correct_copy_source_type():
    assert type(plot.dataView.copy_source()) == ColumnDataSource


def test_correct_compute_range_type():
    assert type(plot.dataView.compute_range()) == np.ndarray


def test_correct_figure_type():
    assert type(plot.figure) == Figure
