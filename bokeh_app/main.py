# Pandas for data management
import pandas as pd

# os methods for manipulating paths
from os.path import dirname, join

# Bokeh basics
from bokeh.io import curdoc
from bokeh.models.widgets import Tabs

# iris dataset import
from sklearn import datasets

# Read data into dataframes


def load_iris():
    iris = datasets.load_iris()
    iris_df = pd.DataFrame(iris.data, columns=iris.feature_names)
    iris_df["variety"] = [iris.target_names[target] for target in iris.target]
    return iris_df


def build_data():
    dataframe = pd.read_csv(
        join(dirname(__file__), "data", "Corbion_test_data_numerical_only.csv")
    )
    categories = dataframe["Lot number"].to_numpy().astype(str)
    data = dataframe.drop(columns=["Lot number"]).to_numpy()
    return data, categories, dataframe


iris = load_iris()


# Each tab is drawn by one script
from scripts.loadingPlot.loadingPlotTab import loading_plot_tab
from scripts.biplot.biplotTab import biplot_tab
from scripts.master_cds import CDS_master

data, categories, dataframe = build_data()

# Create each of the tabs
# We'll probably want to pass the same dataframes to each of the tabs.

cds_manager = CDS_master(data, categories)

control_tab = cds_manager.create_control_tab()
tabqt2 = cds_manager.create_Q_T2_tab()
tab_SAP = cds_manager.create_secondary_axis_tab(
    index_col_name="categories", y_1_label="PC1", y_2_label="PC2", width=800, height=600
)
tabLoadingPlot = loading_plot_tab(dataframe)
tabBiplot = biplot_tab(dataframe)

# Put all the tabs into one application
tabs = Tabs(tabs=[control_tab, tabLoadingPlot, tabBiplot, tabqt2, tab_SAP])

# Put the tabs in the current document for display
curdoc().add_root(tabs)
