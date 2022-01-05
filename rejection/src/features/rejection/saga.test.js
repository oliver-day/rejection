import { describe } from 'riteway';
import { call, put, select } from 'redux-saga/effects';

import {
    rejectionReducer,
    rejectionSlice,
    hydrateQuestionsSucceeded,
    createQuestion,
    getQuestions
} from './reducer';
import {
    hydrateLocalState,
    syncLocalState
} from './saga';
import { loadState, saveState } from '../../../store/localStorage';


const withSlice = state => ({ [rejectionSlice]: state });

describe('rejection/saga | hydrateLocalState (wo/ state)', async assert => {
    const gen = hydrateLocalState();

    assert({
        given: 'first yield statement of`hydrateLocalState` saga` (wo/ state)',
        should: 'the `loadState` function should be called first',
        actual: gen.next().value,
        expected: call(loadState)
    });

    assert({
        given: 'second yield statement `hydrateLocalState` saga` (wo/ state)',
        should: 'put the`hydrateQuestionsSucceeded` function with undefined state',
        actual: gen.next(undefined).value,
        expected: put(hydrateQuestionsSucceeded())
    });

    assert({
        given: 'no remaining yield statements  `hydrateLocalState` saga` (wo/ state',
        should: 'now be done',
        actual: gen.next(),
        expected: { done: true, value: undefined }
    });
});

describe('rejection/saga | hydrateLocalState (w/ state)', async assert => {
    
    const question = {
        question: "May I have time off?",
        askee: "Boss",
        status: "Unanswered",
    };
    const state = withSlice(rejectionReducer(rejectionReducer(), createQuestion(question)));
    
    const gen = hydrateLocalState();

    assert({
        given: 'first yield statement of`hydrateLocalState` saga` (w/ state)',
        should: 'the `loadState` function should be called first',
        actual: gen.next().value,
        expected: call(loadState)
    });

    assert({
        given: 'second yield statement `hydrateLocalState` saga` (w/ state)',
        should: 'put the`hydrateQuestionsSucceeded` function with loaded state',
        actual: gen.next(state).value,
        expected: put(hydrateQuestionsSucceeded(state))
    });
    
    assert({
        given: 'no remaining yield statements  `hydrateLocalState` saga` (w/ state)',
        should: 'should now be done (w/ state loaded)',
        actual: gen.next(),
        expected: { done: true, value: undefined }
    });
});


describe('rejection/saga | syncLocalState (save state to localStorage)', async assert => {
    
    const question = {
        question: "May I have time off?",
        askee: "Boss",
        status: "Unanswered",
    };
    const state = withSlice(rejectionReducer(rejectionReducer(), createQuestion(question)));
    
    const gen = syncLocalState();

    assert({
        given: 'first yield statement of`syncLocalState` saga',
        should: 'select state w/ `getQuestions` function',
        actual: gen.next().value,
        expected: select(getQuestions)
    });

    assert({
        given: 'second yield statement `syncLocalState` saga`',
        should: 'call the`saveState` function with the selected state',
        actual: gen.next(state).value,
        expected: call(saveState, state)
    });

    assert({
        given: 'no remaining yield statements  `syncLocalState` saga`',
        should: 'should now be done',
        actual: gen.next(),
        expected: { done: true, value: undefined }
    });
});
