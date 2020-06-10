import os, sys, inspect, bokeh

currentdir = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))
parentdir = os.path.dirname(currentdir)
sys.path.insert(0, parentdir)

from main import build_data
from scripts.master_cds import CDS_master

import scripts.secondary_axis as SAP

data, categories = build_data()[:2]
cds_manager = CDS_master(data, categories)


class Test_SAP:
    def test_correct_type(self):
        cds = cds_manager.cds

        sapTab = SAP.secondary_axis_tab(
            cds,
            "index",
            "PC1",
            "PC2",
            cds_manager.pca_dict["PC2"],
            y_1_label="Petal Length",
            y_2_label="Petal Width",
        )
        assert isinstance(sapTab, bokeh.models.layouts.Panel)
