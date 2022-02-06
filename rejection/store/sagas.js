import { all } from 'redux-saga/effects';

import questionsSaga from '../src/features/rejection/saga';
import quoteSaga from '../src/features/quote/saga';

export default function* rootSaga() {
    yield all([
        questionsSaga(),
        quoteSaga()
    ]);
};
