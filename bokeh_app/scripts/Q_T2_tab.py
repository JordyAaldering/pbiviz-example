import os, sys, inspect

currentdir = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))
parentdir = os.path.dirname(currentdir)
sys.path.insert(0, parentdir)


from bokeh.models import Panel
from bokeh.layouts import gridplot
from scripts.scatterplot import scatterplot_fig_categorical
from scripts.Q_T2_lineplot import q_lineplot_fig, t2_lineplot_fig


def q_t2_tab(
    cds,
    categories,
    Q_col_name,
    T2_col_name,
    cat_col_name,
    index_col_name,
    Q_low_col_name,
    Q_up_col_name,
    T2_low_col_name,
    T2_up_col_name,
    **kwargs
):

    x_axis_label = "T² statistic"
    y_axis_label = "Q scores"

    scatter = scatterplot_fig_categorical(
        cds,
        categories,
        x_col_name=T2_col_name,
        y_col_name=Q_col_name,
        leg_col_name=cat_col_name,
        x_label=x_axis_label,
        y_label=y_axis_label,
        **kwargs
    )

    q_line = q_lineplot_fig(
        cds, Q_col_name, Q_low_col_name, Q_up_col_name, index_col_name, **kwargs
    )

    t2_line = t2_lineplot_fig(
        cds, T2_col_name, T2_low_col_name, T2_up_col_name, index_col_name, **kwargs
    )

    p = gridplot([[t2_line, q_line], [scatter, None]])

    # Note: We need to add the figure p to a panel, which is what we return.
    tab = Panel(child=p, title="Q-T2 Tab")

    return tab
