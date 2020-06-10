import os, sys, inspect, bokeh

currentdir = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))
parentdir = os.path.dirname(currentdir)
sys.path.insert(0, parentdir)

from main import build_data
from scripts.master_cds import CDS_master
from bokeh.models import ColumnDataSource, Panel

data, categories = build_data()[:2]
cds_manager = CDS_master(data, categories)


class Test_CDS_master:
    def test_correct_length_pca(self):
        assert cds_manager.pca_dict["index"].shape[0] == data.shape[0]

    def test_correct_length_cats(self):
        assert (
            cds_manager.mutable_categories.shape[0]
            == cds_manager.pca_dict["index"].shape[0]
        )

    def test_correct_cds_format(self):
        assert isinstance(cds_manager.cds, ColumnDataSource)

    def test_control_tab_format(self):
        assert isinstance(cds_manager.create_control_tab(), Panel)

    def test_Q_T2_output(self):
        assert isinstance(cds_manager.create_Q_T2_tab(), Panel)
