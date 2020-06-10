import numpy as np
from bokeh.models import (
    ColumnDataSource,
    Select,
    Panel,
    Button,
    TextInput,
    CheckboxGroup,
)
from bokeh.layouts import gridplot
from scripts.data_transformation import load_PCA, compute_Q, compute_T2
from scripts.Q_T2_tab import q_t2_tab
from scripts.secondary_axis import secondary_axis_tab


class CDS_master(object):
    def __init__(self, data, categories=None, **kwargs):
        self.original_data = data
        self.original_categories = categories
        if categories is not None:
            self.mutable_categories = self.original_categories.copy()
        else:
            self.mutable_categories = self.original_categories
        self.mutable_data = self.original_data.copy()

        self.pca_dict = self.build_pca_dict(
            self.mutable_data, self.mutable_categories, **kwargs
        )
        self.cds = ColumnDataSource(data=self.pca_dict)

        self.cds.selected.on_change("indices", self.tap_remove())

        self.tap_behaviour = Select(
            title="Tap Behaviour", value="Select", options=["Select", "Remove"]
        )
        self.tap_behaviour.on_change("value", self.remove_selection())

    def build_pca_dict(
        self,
        data,
        categories,
        T2_name="T2",
        Q_name="Q",
        index_name="index",
        Q_low_name="Q_95",
        Q_up_name="Q_99",
        T2_low_name="T2_95",
        T2_up_name="T2_99",
        cats_name="categories",
        Q_quantiles=[0.95, 0.99],
        T2_quantiles=[0.95, 0.99],
    ):
        pca_obj, pca_data = load_PCA(data)
        new_dict = {
            "PC{}".format(i + 1): pca_data[:, i] for i in range(pca_data.shape[1])
        }
        new_dict[T2_name] = compute_T2(pca_obj, pca_data)
        new_dict[Q_name] = compute_Q(data, pca_obj, pca_data)
        new_dict[index_name] = np.array([i for i in range(pca_data.shape[0])])
        new_dict[T2_low_name] = np.array(
            [
                np.quantile(new_dict[T2_name], T2_quantiles[0])
                for i in range(pca_data.shape[0])
            ]
        )
        new_dict[T2_up_name] = np.array(
            [
                np.quantile(new_dict[T2_name], T2_quantiles[1])
                for i in range(pca_data.shape[0])
            ]
        )
        new_dict[Q_low_name] = np.array(
            [
                np.quantile(new_dict[Q_name], Q_quantiles[0])
                for i in range(pca_data.shape[0])
            ]
        )
        new_dict[Q_up_name] = np.array(
            [
                np.quantile(new_dict[Q_name], Q_quantiles[1])
                for i in range(pca_data.shape[0])
            ]
        )
        if categories is not None:
            new_dict[cats_name] = categories

        return new_dict

    def create_control_tab(self):

        self.reset_button = Button(label="Reset to original data")
        self.reset_button.on_click(self.reset_all())

        self.p = gridplot([[self.tap_behaviour], [self.reset_button]])

        tab = Panel(child=self.p, title="Control Panel")

        return tab

    def create_Q_T2_tab(
        self,
        T2_col_name="T2",
        Q_col_name="Q",
        cat_col_name="categories",
        index_col_name="index",
        Q_low_col_name="Q_95",
        Q_up_col_name="Q_99",
        T2_low_col_name="T2_95",
        T2_up_col_name="T2_99",
        **kwargs
    ):
        tab = q_t2_tab(
            self.cds,
            self.mutable_categories,
            Q_col_name,
            T2_col_name,
            cat_col_name,
            index_col_name,
            Q_low_col_name,
            Q_up_col_name,
            T2_low_col_name,
            T2_up_col_name,
            **kwargs
        )
        return tab

    def create_secondary_axis_tab(
        self,
        index_col_name="index",
        y_1_col_name="PC1",
        y_2_col_name="PC2",
        y_2_data=None,
        **kwargs
    ):
        if y_2_data is None:
            y_2_data = self.pca_dict[y_2_col_name]

        tab = secondary_axis_tab(
            self.cds, index_col_name, y_1_col_name, y_2_col_name, y_2_data, **kwargs
        )

        return tab

    def tap_remove(self):
        def callback(attr, old, new):
            if self.tap_behaviour.value == "Remove":
                self.mutable_data = np.delete(self.mutable_data, new, 0)
                self.mutable_categories = np.delete(self.mutable_categories, new, 0)
                self.pca_dict = self.build_pca_dict(
                    self.mutable_data, self.mutable_categories
                )
                self.cds.data = self.pca_dict
                self.cds.selected.indices = []

        return callback

    def reset_all(self):
        def callback():
            self.cds.selected.indices = []

            self.mutable_data = self.original_data.copy()
            self.mutable_categories = self.original_categories.copy()

            self.pca_dict = self.build_pca_dict(
                self.mutable_data, self.mutable_categories
            )
            self.cds.data = self.pca_dict

        return callback

    def remove_selection(self):
        def callback(attr, old, new):
            self.cds.selected.indices = []

        return callback
