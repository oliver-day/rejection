import { describe } from 'riteway';
import cuid from 'cuid';

import { 
    rejectionReducer,
    rejectionSlice,
    createQuestion,
    getQuestions,
    getTotalScore
 } from './reducer.js';
import { createStore } from 'redux';

const createState = () => ({
    questions: [],
    isLoading: false
});
const withSlice = state => ({ [rejectionSlice]: state });

describe('rejection/reducer', async assert => {
    assert({
        given: "no arguments",
        should: "return valid initial state",
        actual: rejectionReducer(),
        expected: createState(),
    });
});

describe('rejection/createQuestion', async assert => {
    // Arrange
    const id = cuid();
    const timestamp = (new Date()).toUTCString();

    const question = {
        question: "May I have time off?",
        askee: "Boss",
        status: "Unanswered",
        id,
        timestamp
    };
    //Act
    const state = withSlice(rejectionReducer(rejectionReducer(), createQuestion(question)));

    assert({
        given: "question, askee, status",
        should: "add question to state",
        actual: getQuestions(state),
        expected: [question]
    });
});

describe('rejection/getTotalScore', async assert => {

    const question1 = {
        question: "May I have a raise?",
        askee: "Boss",
        status: "Unanswered",
    };

    const question2 = {
        question: "Can you pay for my lunch today?",
        askee: "Co-worker",
        status: "Rejected"
    };

    const question3 = {
        question: "Can you pay for my lunch today?",
        askee: "Boss",
        status: "Accepted"
    };
    
    const actions = [
        createQuestion(question1),
        createQuestion(question2),
        createQuestion(question3)
    ];

    const state = withSlice(actions.reduce(rejectionReducer, createState()));
    
    assert({
        given: "one or more questions",
        should: "calculate and return the correct score",
        actual: getTotalScore(state),
        expected: 11
    });
});
