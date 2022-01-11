import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import rootSaga from './sagas';

const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
);
sagaMiddleware.run(rootSaga);


const withRedux = Component => {
    return (
        <Provider store={store}>
            <Component />
        </Provider>
    );
}

export default withRedux;
