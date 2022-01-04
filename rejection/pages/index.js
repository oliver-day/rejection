import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import App from '../src/App';
import { rejectionReducer, rejectionSlice } from '../src/features/rejection/reducer';

export default function Index() {
  return (
    <App />
  )
}
