import { describe } from 'riteway';
import { call, put, take } from 'redux-saga/effects';

import {
    rejectionReducer,
    rejectionSlice,
    hydrateQuestionsSucceeded
} from './reducer';
import { hydrateLocalState } from './saga';
import { loadState, saveState } from '../../../store/localStorage';

describe('rejection/saga | hydrateLocalState (w/no state in localStorage)', async assert => {
    const gen = hydrateLocalState();

    assert({
        given: 'first yield statement of`hydrateLocalState` saga` (w/ no state in localStorage)',
        should: 'the `loadState` function should be called first',
        actual: gen.next().value,
        expected: call(loadState)
    });

    assert({
        given: 'second yield statement `hydrateLocalState` saga`',
        should: 'put the`hydrateQuestionsSucceeded` function with undefined state (due to no state in localStorage)',
        actual: gen.next(undefined).value,
        expected: put(hydrateQuestionsSucceeded())
    });

    assert({
        given: 'no remaining yield statements  `hydrateLocalState` saga`',
        should: '`hydrateQuestionsSucceeded` function should be done (w/ no state in localStorage)',
        actual: gen.next(),
        expected: { done: true, value: undefined }
    });
});
