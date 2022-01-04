import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from "next-redux-wrapper"

import rootReducer from './reducers';
import rootSaga from './sagas';

const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const makeStore = () => {
    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(...middleware))
    );
    sagaMiddleware.run(rootSaga);
    return store;
};

export const wrapper = createWrapper(makeStore);
