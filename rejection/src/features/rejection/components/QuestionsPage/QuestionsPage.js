import React from 'react';
import { connect } from 'react-redux';

import { createQuestion } from '../../reducer';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import QuestionForm from '../QuestionForm/QuestionForm';
import QuestionsList from '../QuestionsList/QuestionsList';

const QuestionsPage = (props) => {
    const {
        createQuestion,
        questions,
        scores } = props;
    const title = 'Rejection Portfolio Project';

    const onCreateQuestion = ({ question, askee, status }) => {
        createQuestion({ question, askee, status });
    };

    const renderQuestionsList = (questions = []) => {
        return Object.keys(questions).map(status => {
            const questionByStatus = questions[status];
            return (
                <QuestionsList
                    key={status}
                    status={status}
                    questions={questionByStatus}
                />
            );
        });
    };

    return (
        <div className='questions-page'>
            <div className='questions-page-title'>
                {title}
            </div>
            <ScoreBoard totalScore={scores.totalScore} />
            <br />
            <QuestionForm
                onCreateQuestion={onCreateQuestion}
            />
            <br />
            <div className='questions-lists-main'>
                {renderQuestionsList(questions)}
            </div>
        </div>
    )
};

const mapDispatchToProps = {
    createQuestion,
};

export default connect(null, mapDispatchToProps)(QuestionsPage);
