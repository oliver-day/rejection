import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import match from 'riteway/match';

import QuestionsList from './QuestionsList';

describe('rejection/components/QuestionsList', async assert => {
    const createQuestionsList = (questions, status) => render(<QuestionsList
        questions={questions}
        status={status}
    />);

    {
        const questions = [
            {
                id: '1',
                question: 'May I take on ticket ENG-1980?',
                askee: 'boss',
                status: 'Unanswered',
                timestamp: 'Mon, 11 Dec 2021 01:04:32 GMT'
            },
            {
                id: '2',
                question: 'May I take PTO next week?',
                askee: 'boss',
                status: 'Unanswered',
                timestamp: 'Mon, 12 Dec 2021 03:04:32 GMT'
            },
            {
                id: '3',
                question: 'May I buy you lunch?',
                askee: 'friend',
                status: 'Unanswered',
                timestamp: 'Mon, 13 Dec 2021 01:04:32 GMT'
            }
        ];
        const status = 'Unanswered';

        const $ = createQuestionsList(questions, status);

        assert({
            given: 'status',
            should: 'render a title describing the status of questions in list',
            actual: $('.questions-list-title').html().trim(),
            expected: status
        });

        assert({
            given: 'questions',
            should: 'render a "QuestionCard" for each question',
            actual: $('.question-card').length,
            expected: 3
        });
    }
});
