import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import rootSaga from './sagas';

const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
);
sagaMiddleware.run(rootSaga);


export const withRedux = Component => {
    return function withRedux (props) {
        return (
            <Provider store={store}>
                <Component {...props}/>
            </Provider>
        );
    }
};
