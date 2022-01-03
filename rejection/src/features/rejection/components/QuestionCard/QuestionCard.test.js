import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import match from 'riteway/match';

import QuestionCard from './QuestionCard';

describe('rejection/components/QuestionCard', async assert => {
    const createQuestionCard = (question) => render(<QuestionCard question={question} />);

    {
        const question = {
            id: '1',
            question: 'May I take on ticket ENG-1980?',
            askee: 'boss',
            status: 'Accepted',
            timestamp: 'Mon, 13 Dec 2021 01:04:32 GMT'
        }
        const $ = createQuestionCard(question);

        assert({
            given: '"question" prop',
            should: 'render the "id" prop',
            actual: $('.question-card-id').html().trim(),
            expected: `ID: ${question.id}`
        });

        assert({
            given: '"question" prop',
            should: 'render the "status" prop',
            actual: $('.question-card-status').html().trim(),
            expected: `STATUS: ${question.status}`
        });

        assert({
            given: '"question" prop',
            should: 'render the "question" prop',
            actual: $('.question-card-question').html().trim(),
            expected: `QUESTION: ${question.question}`
        });

        assert({
            given: '"question" prop',
            should: 'render the "askee" prop',
            actual: $('.question-card-askee').html().trim(),
            expected: `ASKEE: ${question.askee}`
        });

        assert({
            given: '"question" prop',
            should: 'render the "timestamp" prop',
            actual: $('.question-card-timestamp').html().trim(),
            expected: `TIMESTAMP: ${question.timestamp}`
        });
    }
});
