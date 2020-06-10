from bokeh.plotting import figure


def q_lineplot_fig(
    cds,
    Q_col_name,
    Q_low_col_name,
    Q_up_col_name,
    index_col_name,
    score_label="Q scores",
    Q_low_label="Q lower limit 95",
    Q_up_label="Q upper limit 99",
    **kwargs
):

    p = figure(
        width=600,
        height=400,
        x_axis_label="Sample Number",
        y_axis_label=Q_low_label + ", " + score_label + ", " + Q_up_label,
    )

    p.line(
        index_col_name,
        Q_col_name,
        source=cds,
        legend_label=score_label,
        color="blue",
        line_width=1,
    )
    p.line(
        index_col_name,
        Q_low_col_name,
        source=cds,
        legend_label=Q_low_label,
        color="green",
        line_width=1,
    )
    p.line(
        index_col_name,
        Q_up_col_name,
        source=cds,
        legend_label=Q_up_label,
        color="orange",
        line_width=1,
    )

    return p


def t2_lineplot_fig(
    cds,
    T2_col_name,
    T2_low_col_name,
    T2_up_col_name,
    index_col_name,
    score_label="T2 scores",
    T2_low_label="T2 lower limit 95",
    T2_up_label="T2 upper limit 99",
    **kwargs
):

    p = figure(
        width=600,
        height=400,
        x_axis_label="Sample Number",
        y_axis_label=T2_low_label + ", " + score_label + ", " + T2_up_label,
    )

    p.line(
        index_col_name,
        T2_col_name,
        source=cds,
        legend_label=score_label,
        color="blue",
        line_width=1,
    )
    p.line(
        index_col_name,
        T2_low_col_name,
        source=cds,
        legend_label=T2_low_label,
        color="green",
        line_width=1,
    )
    p.line(
        index_col_name,
        T2_up_col_name,
        source=cds,
        legend_label=T2_up_label,
        color="orange",
        line_width=1,
    )

    return p
