import { all, call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';

import { 
    hydrateQuestionsFromLocalState,hydrateQuestionsSucceeded,
    getQuestions,
    createQuestion,
    editQuestion
} from './reducer';
import { loadState, saveState } from '../../../store/localStorage';


export function* hydrateLocalState() {
    const state = yield call(loadState);
    yield put(hydrateQuestionsSucceeded(state));
}

export function* syncLocalState() {
    const state = yield select(getQuestions);
    yield call(saveState, state);
}

function* watchHydrateLocalState() {
    yield takeLatest(hydrateQuestionsFromLocalState().type, hydrateLocalState);
};

function* watchSyncLocalState() {
    yield takeEvery(createQuestion.type, syncLocalState);
    yield takeEvery(editQuestion.type, syncLocalState);
}

export default function* questionsSaga() {
    yield all([
        watchHydrateLocalState(),
        watchSyncLocalState()
    ]);
};
