import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import match from 'riteway/match';

import { rejectionReducer } from '../../reducer';
import QuestionsPage from './QuestionsPage';

describe('rejection/components/QuestionsPage', async assert => {
    const createQuestionsPage = (questionsByStatus, scores) => {
        const store = createStore(rejectionReducer);
        return render(
            <Provider store={store}>
              <QuestionsPage
                questions={questionsByStatus} 
                scores={scores}
              />
            </Provider>
          );
    }

    {
        const questionsByStatus =  { 
            Unanswered: [
                {
                    id: 'ckx44sevk00003e6a42ax5k3w',
                    status: 'Unanswered',
                    question: 'question1',
                    askee: 'askee1',
                    timestamp: 'Mon, 13 Dec 2021 03:43:27 GMT'
                },
                {
                    id: 'ckx44so6n00013e6awj1k9b75',
                    status: 'Unanswered',
                    question: 'question2',
                    askee: 'askee2',
                    timestamp: 'Mon, 13 Dec 2021 03:43:39 GMT'
                }
            ],
            Accepted: [
                {
                    id: 'ckx44svn200023e6a4df0w5uy',
                    status: 'Accepted',
                    question: 'question3',
                    askee: 'askee3',
                    timestamp: 'Mon, 13 Dec 2021 03:43:49 GMT'
                }
            ],
            Rejected: [
                {
                    id: 'ckx44t43500033e6axl9zxiyy',
                    status: 'Rejected',
                    question: 'question4',
                    askee: 'askee4',
                    timestamp: 'Mon, 13 Dec 2021 03:44:00 GMT'
                }
            ] 
        };

        const scores = {
            totalScore: 11
        };
        
        const $ = createQuestionsPage(questionsByStatus, scores);

        assert({
            given: 'expected props',
            should: 'render the "QuestionsPage" title',
            actual: $('.questions-page-title').length,
            expected: 1
        });

        assert({
            given: 'expected props',
            should: "render the 'ScoreBoard' component",
            actual: $('.scoreboard').length,
            expected: 1
        });

        assert({
            given: 'expected props',
            should: 'render the "QuestionForm" component',
            actual: $('.new-question-form').length,
            expected: 1
        });

        assert({
            given: 'expected props',
            should: 'render a "QuestionsList" for each available status',
            actual: $('.questions-list').length,
            expected: 3
        });
    }
});
