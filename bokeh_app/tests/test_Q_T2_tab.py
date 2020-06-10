import os, sys, inspect, bokeh

currentdir = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))
parentdir = os.path.dirname(currentdir)
sys.path.insert(0, parentdir)

from main import build_data
from scripts.master_cds import CDS_master
import scripts.Q_T2_tab as qt2

data, categories = build_data()[:2]
cds_manager = CDS_master(data, categories)


class TestQT2Tab:
    def test_correct_type(self):
        cds = cds_manager.cds

        qt2tab = qt2.q_t2_tab(
            cds,
            categories,
            "Q",
            "T2",
            "categories",
            "index",
            "Q_95",
            "Q_99",
            "T2_95",
            "T2_99",
        )
        assert isinstance(qt2tab, bokeh.models.layouts.Panel)
