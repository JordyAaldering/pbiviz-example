import numpy as np

from sklearn.preprocessing import normalize
from bokeh.models import ColumnDataSource
from bokeh.palettes import viridis

from ..data_transformation import load_PCA


class PcaDataView:
    def __init__(self, features: [], data: [], categories=[]):
        self.features = features
        self.data = data

        self.categories = categories
        if len(categories) != len(data):
            self.categories = list(range(len(data)))

        self.pca_object, self.pca_data = load_PCA(data)
        self.loadings = self.pca_object.components_

        self.load_source()

    def load_source(self):
        self.loadings_dict = {
            "features": self.features,
            "active_col_x": self.loadings[0],
            "active_col_y": self.loadings[1],
        }
        self.source = ColumnDataSource(data=self.loadings_dict)

        unique = list(set(self.categories))
        mapper = viridis(len(unique))

        self.scatter_dict = {
            "features": self.categories,
            "active_col_x": self.pca_object.transform(normalize(self.pca_data))[:, 0],
            "active_col_y": self.pca_object.transform(normalize(self.pca_data))[:, 1],
            "color": [mapper[unique.index(i)] for i in self.categories],
        }
        self.scatter_source = ColumnDataSource(data=self.scatter_dict)

    def copy_source(self):
        return ColumnDataSource(data=self.loadings_dict)

    def update_x_axis(self, value):
        index = int(value[2:]) - 1
        self.loadings_dict["active_col_x"] = self.loadings[index]
        self.scatter_dict["active_col_x"] = self.pca_object.transform(
            normalize(self.pca_data)
        )[:, index]
        self.source.data = self.loadings_dict
        self.scatter_source.data = self.scatter_dict

    def update_y_axis(self, value):
        index = int(value[2:]) - 1
        self.loadings_dict["active_col_y"] = self.loadings[index]
        self.scatter_dict["active_col_y"] = self.pca_object.transform(
            normalize(self.pca_data)
        )[:, index]
        self.source.data = self.loadings_dict
        self.scatter_source.data = self.scatter_dict

    def compute_range(self, scale=1.2):
        range_max = np.max(np.abs(self.loadings), axis=1)
        range_max *= scale
        return range_max
