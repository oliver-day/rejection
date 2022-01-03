import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import match from 'riteway/match';

import QuestionForm from './QuestionForm';

describe('rejection/components/QuestionForm', async assert => {
    const createQuestionForm = () => render(<QuestionForm />);

    {
        const $ = createQuestionForm();

        assert({
            given: 'expected props',
            should: 'render the QuestionForm form',
            actual: $('.new-question-form').length,
            expected: 1
        });
    }

    {
        const $ = createQuestionForm();

        assert({
            given: 'expected props',
            should: 'render the QuestionForm text inputs',
            actual: $('.new-question-input').length,
            expected: 2
        });
    }

    {
        const $ = createQuestionForm();

        assert({
            given: 'expected props',
            should: 'render the QuestionForm "Unanswered" button',
            actual: $('#unanswered-button').length,
            expected: 1
        });
    }

    {
        const $ = createQuestionForm();

        assert({
            given: 'expected props',
            should: 'render the QuestionForm "Accepted" button',
            actual: $('#accepted-button').length,
            expected: 1
        });
    }

    {
        const $ = createQuestionForm();

        assert({
            given: 'expected props',
            should: 'render the QuestionForm "Rejected" button',
            actual: $('#rejected-button').length,
            expected: 1
        });
    }

});
