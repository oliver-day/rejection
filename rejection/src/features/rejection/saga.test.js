import { describe } from 'riteway';
import { call, put, take } from 'redux-saga/effects';

import {
    rejectionReducer,
    rejectionSlice,
    hydrateQuestionsSucceeded,
    createQuestion
} from './reducer';
import { hydrateLocalState } from './saga';
import { loadState } from '../../../store/localStorage';


const withSlice = state => ({ [rejectionSlice]: state });

describe('rejection/saga | hydrateLocalState (w/no state in localStorage)', async assert => {
    const gen = hydrateLocalState();

    assert({
        given: 'first yield statement of`hydrateLocalState` saga` (wo/ state in localStorage)',
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
        should: '`hydrateQuestionsSucceeded` function should be done (wo/ state in localStorage)',
        actual: gen.next(),
        expected: { done: true, value: undefined }
    });
});

describe('rejection/saga | hydrateLocalState (w/ state in localStorage)', async assert => {
    
    const question = {
        question: "May I have time off?",
        askee: "Boss",
        status: "Unanswered",
    };
    const state = withSlice(rejectionReducer(rejectionReducer(), createQuestion(question)));
    
    const gen = hydrateLocalState();

    assert({
        given: 'first yield statement of`hydrateLocalState` saga` (w/ state in localStorage)',
        should: 'the `loadState` function should be called first',
        actual: gen.next().value,
        expected: call(loadState)
    });

    assert({
        given: 'second yield statement `hydrateLocalState` saga`',
        should: 'put the`hydrateQuestionsSucceeded` function with loaded state',
        actual: gen.next(state).value,
        expected: put(hydrateQuestionsSucceeded(state))
    });
    
    assert({
        given: 'no remaining yield statements  `hydrateLocalState` saga`',
        should: '`hydrateQuestionsSucceeded` function should be done (w/ state in loaded)',
        actual: gen.next(),
        expected: { done: true, value: undefined }
    });
});
