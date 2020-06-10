import os, sys, inspect, bokeh

currentdir = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))
parentdir = os.path.dirname(currentdir)
sys.path.insert(0, parentdir)

from main import build_data
from scripts.master_cds import CDS_master
import scripts.Q_T2_lineplot as qt2

data, categories = build_data()[:2]
cds_manager = CDS_master(data, categories)


class TestQ_and_T2_lineplots:
    def test_correct_type_q(self):
        cds = cds_manager.cds

        sapFig = qt2.q_lineplot_fig(cds, "Q", "Q_95", "Q_99", "index")
        assert type(sapFig) is bokeh.plotting.Figure

    def test_correct_type_t2(self):
        cds = cds_manager.cds

        sapFig = qt2.q_lineplot_fig(cds, "T2", "T2_95", "T2_99", "index")
        assert type(sapFig) is bokeh.plotting.Figure
