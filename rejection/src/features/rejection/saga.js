import { all, call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';

import { hydrateQuestions, getQuestions, createQuestion } from './reducer';
import { loadState, saveState } from '../../../store/localStorage';


export const onHydrateLocalState = () => ({
    type: 'rejection/saga/hydrateLocalState'
});

export function* hydrateLocalState() {
    const state = yield call(loadState);
    yield put(hydrateQuestions(state));
}

export function* syncLocalState() {
    const state = yield select(getQuestions);
    yield call(saveState, state);
}

function* watchHydrateLocalState() {
    yield takeLatest(onHydrateLocalState().type, hydrateLocalState);
};

function* watchSyncLocalState() {
    yield takeEvery(createQuestion.type, syncLocalState);
}

export default function* questionsSaga() {
    yield all([
        watchHydrateLocalState(),
        watchSyncLocalState()
    ]);
};
