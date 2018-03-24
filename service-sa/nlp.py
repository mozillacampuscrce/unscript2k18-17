# -*- coding: utf-8 -*-
"""
Created on Sat Mar 24 16:11:21 2018

@author: Ayussh Manghirmalani
"""

import pandas as pd
import matplotlib as plt
import numpy as np

import re
dataset = pd.read_csv('sad1-1.txt', delimiter='\t', quoting=3, error_bad_lines=False, encoding='latin1')
dataset = dataset.dropna(axis=0, how="any")
import nltk
nltk.download('stopwords')

from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer

corpus = []
for i in range(0,4289):
    review = re.sub('[^a-zA-Z0-9]', ' ', str(dataset['SentimentText'][i]))
    review = review.lower()
    review = review.split()
    ps = PorterStemmer()
    review = [ps.stem(word) for word in review if not word in set(stopwords.words('english'))]
    review = ' '.join(review)
    corpus.append(review)


np.any(np.isnan(corpus))
np.all(np.isfinite(corpus))
 
from sklearn.feature_extraction.text import CountVectorizer
cv = CountVectorizer(max_features=2000)

X = cv.fit_transform(corpus).toarray()
y = dataset.iloc[:4289,2].values

"""y.reshape(299,1)"""
from sklearn.cross_validation import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.20)

"""np.any(np.isnan(y_test))
np.all(np.isfinite(X_train))
"""
from sklearn.naive_bayes import GaussianNB
classifier = GaussianNB()
classifier.fit(X_train, y_train)

y_pred = classifier.predict(X_test)

from sklearn.metrics import confusion_matrix
cm = confusion_matrix(y_test, y_pred)