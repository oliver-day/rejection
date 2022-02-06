import { all, call, put, takeLatest } from 'redux-saga/effects';

import {
    hydrateRandomQuote,
    hydrateRandomQuoteSucceeded } from './reducer';
import { fetchRandomQuote } from './api/index';

export function* hydrateRandomQuoteFromApi() {
    const randomQuote = yield call(fetchRandomQuote);
    yield put(hydrateRandomQuoteSucceeded(randomQuote));
}

function* watchHydrateRandomQuote() {
    yield takeLatest(
        hydrateRandomQuote().type,
        hydrateRandomQuoteFromApi
    );
}

export default function* quoteSaga() {
    yield all([
        watchHydrateRandomQuote()
    ]);
};
