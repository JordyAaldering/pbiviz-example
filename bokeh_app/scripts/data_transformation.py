import numpy as np
from numpy.linalg import inv
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler


def load_PCA(data):
    scaler = StandardScaler()
    scaled_data = scaler.fit_transform(data)
    PCA_object = PCA()
    PCA_data = PCA_object.fit_transform(scaled_data)
    return PCA_object, PCA_data


def compute_T2(PCA_obj, PCA_data):
    P = PCA_obj.components_.T
    eig = PCA_obj.explained_variance_

    T2 = np.array([ti.dot(inv(np.diag(eig))).dot(ti.T) for ti in PCA_data])
    return T2


def compute_Q(original_data, PCA_obj, PCA_data):
    P = PCA_obj.components_.T
    E = original_data - PCA_data.dot(P.T)

    Q = np.array([e.dot(e.T) for e in E])
    return Q


def compute_Q_contributions(original_data, PCA_obj, PCA_data):
    P = PCA_obj.components_.T
    E = original_data - PCA_data.dot(P.T)

    return E


def compute_T2_contributions(PCA_obj, PCA_data):
    P = PCA_obj.components_.T
    eig = PCA_obj.explained_variance_

    T2_contr = np.array(
        [ti.dot(np.sqrt(inv(np.diag(eig)))).dot(P.T) for ti in PCA_data]
    )
    return T2_contr
