import numpy as np
import pandas as pd
from bokeh.palettes import viridis
from bokeh.plotting import figure
from bokeh.models import ColumnDataSource, HoverTool
from bokeh.transform import factor_cmap, factor_mark

TOOLS = "box_zoom, box_select, pan, tap, wheel_zoom, reset, zoom_in, zoom_out"


def scatterplot_fig_categorical(
    cds,
    categories,
    x_col_name,
    y_col_name,
    leg_col_name,
    x_label="X",
    y_label="Y",
    width=600,
    height=400,
    **kwargs
):

    p = figure(plot_width=width, plot_height=height, tools=TOOLS)

    hover = HoverTool(
        tooltips=[
            (x_label, "@{}".format(x_col_name) + "{0.0000}"),
            (y_label, "@{}".format(y_col_name) + "{0.0000}"),
            ("Category", "@{}".format(leg_col_name)),
        ]
    )

    p.add_tools(hover)

    p.scatter(
        x_col_name,
        y_col_name,
        source=cds,
        legend_field=leg_col_name,
        fill_alpha=0.4,
        size=12,
        marker="hex",
        color=factor_cmap(
            "categories", viridis(len(np.unique(categories))), np.unique(categories)
        ),
        nonselection_fill_alpha=0.1,
        nonselection_line_alpha=0.9,
        selection_fill_alpha=0.8,
        selection_line_alpha=1,
    )

    if x_label != "X":
        p.xaxis.axis_label = x_label
    if y_label != "Y":
        p.yaxis.axis_label = y_label

    return p


def scatterplot_fig(
    cds,
    x_col_name,
    y_col_name,
    x_label="X",
    y_label="Y",
    width=800,
    height=600,
    **kwargs
):

    p = figure(plot_width=width, plot_height=height, tools=TOOLS)

    hover = HoverTool(
        tooltips=[
            (x_label, "@{}".format(x_col_name) + "{0.0000}"),
            (y_label, "@{}".format(y_col_name) + "{0.0000}"),
        ]
    )

    p.add_tools(hover)

    p.scatter(
        x_col_name,
        y_col_name,
        source=cds,
        fill_alpha=0.4,
        size=12,
        marker="hex",
        color="navy",
        nonselection_fill_alpha=0.1,
        nonselection_line_alpha=0.9,
        selection_fill_alpha=0.8,
        selection_line_alpha=1,
    )

    if x_label != "X":
        p.xaxis.axis_label = x_label
    if y_label != "Y":
        p.yaxis.axis_label = y_label

    return p
