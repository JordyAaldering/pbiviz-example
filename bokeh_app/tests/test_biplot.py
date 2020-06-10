from ..scripts.biplot.biplotTab import biplot_tab
from ..scripts.biplot.visual import Biplot

import numpy as np
import pandas as pd

from bokeh.plotting.figure import Figure
from bokeh.models import ColumnDataSource, Panel

data = {
    "Category": [1, 2, 3, 4],
    "A": [10, 20, 35, 25],
    "B": [90, 40, 75, 55],
    "C": [65, 15, 10, 90],
}
df = pd.DataFrame(data)
plot = Biplot(df.columns.values[1:], df.values[:, 1:], df.values[:, 0])


def test_correct_tab_type():
    tab = biplot_tab(df)
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


def test_categories_are_equal():
    assert plot.dataView.categories.tolist() == [1, 2, 3, 4]


def test_correct_loadings_type():
    assert type(plot.dataView.loadings) == np.ndarray


def test_correct_number_of_loadings():
    assert len(plot.dataView.loadings) == 3


def test_correct_source_type():
    assert type(plot.dataView.source) == ColumnDataSource


def test_correct_scatter_dict_length():
    assert len(plot.dataView.scatter_dict["features"]) == 4


def test_correct_scatter_source_type():
    assert type(plot.dataView.scatter_source) == ColumnDataSource


def test_correct_copy_source_type():
    assert type(plot.dataView.copy_source()) == ColumnDataSource


def test_correct_compute_range_type():
    assert type(plot.dataView.compute_range()) == np.ndarray


def test_correct_figure_type():
    assert type(plot.figure) == Figure
