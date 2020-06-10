from bokeh.models import LinearAxis, Range1d, Panel, ColumnDataSource, HoverTool
from bokeh.plotting import figure


def secondary_axis_tab(
    cds,
    index_col_name,
    y_1_col_name,
    y_2_col_name,
    y_2_data,
    x_label="Sample Number",
    y_1_label="Y1",
    y_2_label="Y2",
    height=500,
    width=500,
):

    # Create a figure with dimensions and primary axis names
    p = figure(
        width=width, height=height, x_axis_label=x_label, y_axis_label=y_1_label,
    )

    # FIRST AXIS
    line_1 = p.line(
        index_col_name,
        y_1_col_name,
        source=cds,
        legend_label=y_1_label,
        line_width=1,
        color="blue",
    )

    # SECOND AXIS
    # Create the axis
    y_column2_range = y_2_col_name + "_range"
    p.extra_y_ranges = {
        y_column2_range: Range1d(start=y_2_data.min(), end=y_2_data.max())
    }
    p.add_layout(
        LinearAxis(y_range_name=y_column2_range, axis_label=y_2_label), "right"
    )

    # Create the second line using the second axis
    line_2 = p.line(
        index_col_name,
        y_2_col_name,
        source=cds,
        legend_label=y_2_label,
        line_width=1,
        y_range_name=y_column2_range,
        color="green",
    )

    hover_1 = HoverTool(
        renderers=[line_1],
        tooltips=[
            (x_label, "@{}".format(index_col_name) + "{0.0000}"),
            (y_1_label, "@{}".format(y_1_col_name) + "{0.0000}"),
        ],
    )

    hover_2 = HoverTool(
        renderers=[line_2],
        tooltips=[
            (x_label, "@{}".format(index_col_name) + "{0.0000}"),
            (y_2_label, "@{}".format(y_2_col_name) + "{0.0000}"),
        ],
    )

    p.add_tools(hover_1, hover_2)

    # Note: We need to add the figure p to a panel, which is what we return.
    tab = Panel(child=p, title="Secondary axis plot")

    return tab
