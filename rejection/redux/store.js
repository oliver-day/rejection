import { createStore, applyMiddleware, compose } from 'redux';
import { createWrapper } from "next-redux-wrapper"
import { devToolsEnhancer } from 'redux-devtools-extension';

import rootReducer from './reducers';


const middleware = [devToolsEnhancer];

const makeStore = () => createStore(rootReducer, compose(applyMiddleware(...middleware)));

export const wrapper = createWrapper(makeStore);
