import { all } from 'redux-saga/effects';

import questionsSaga from '../src/features/rejection/saga';

export default function* rootSaga() {
    yield all([
        questionsSaga(),
    ]);
};
