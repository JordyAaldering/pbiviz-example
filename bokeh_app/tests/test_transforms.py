import os, sys, inspect

currentdir = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))
parentdir = os.path.dirname(currentdir)
sys.path.insert(0, parentdir)

from scripts.data_transformation import (
    load_PCA,
    compute_T2,
    compute_Q,
    compute_T2_contributions,
    compute_Q_contributions,
)
from sklearn import datasets
from sklearn.decomposition import PCA


def load_PCA_iris():
    iris = datasets.load_iris()
    data = iris.data
    PCA_obj, PCA_data = load_PCA(data)
    return data, PCA_obj, PCA_data


class TestTransforms:
    def test_lengths_in_out_Q(self):
        data, PCA_obj, PCA_data = load_PCA_iris()
        Q = compute_Q(data, PCA_obj, PCA_data)
        assert len(Q) == len(PCA_data[:, 0])

    def test_lengths_in_out_T2(self):
        data, PCA_obj, PCA_data = load_PCA_iris()
        T2 = compute_T2(PCA_obj, PCA_data)
        assert len(T2) == len(PCA_data[:, 0])

    def test_dimensionality_Q(self):
        data, PCA_obj, PCA_data = load_PCA_iris()
        Q = compute_Q(data, PCA_obj, PCA_data)
        assert len(Q.shape) == 1

    def test_dimensionality_T2(self):
        data, PCA_obj, PCA_data = load_PCA_iris()
        T2 = compute_T2(PCA_obj, PCA_data)
        assert len(T2.shape) == 1

    def test_lengths_in_out_Q_c(self):
        data, PCA_obj, PCA_data = load_PCA_iris()
        Q_c = compute_Q_contributions(data, PCA_obj, PCA_data)
        assert Q_c.shape == PCA_data.shape

    def test_lengths_in_out_T2(self):
        data, PCA_obj, PCA_data = load_PCA_iris()
        T2_c = compute_T2_contributions(PCA_obj, PCA_data)
        assert T2_c.shape == PCA_data.shape

    def test_dimensionality_Q(self):
        data, PCA_obj, PCA_data = load_PCA_iris()
        Q_c = compute_Q_contributions(data, PCA_obj, PCA_data)
        assert len(Q_c.shape) == 2

    def test_dimensionality_T2(self):
        data, PCA_obj, PCA_data = load_PCA_iris()
        T2_c = compute_T2_contributions(PCA_obj, PCA_data)
        assert len(T2_c.shape) == 2

    def test_instance_PCA(self):
        data, PCA_obj, PCA_data = load_PCA_iris()
        assert isinstance(PCA_obj, PCA)
