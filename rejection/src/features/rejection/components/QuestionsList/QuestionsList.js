import React from 'react';
import { connect } from 'react-redux';

import { editQuestion, deleteQuestion } from '../../reducer';
import QuestionCard from '../QuestionCard/QuestionCard';

const QuestionsList = (props) => {
    const { 
        questions,
        status,
        editQuestion,
        deleteQuestion,
     } = props;

    return (
        <div className='questions-list'>
            <div        
            className='questions-list-title'>
                {status}
            </div>
            {questions.map(question => (
                <QuestionCard
                    key={question.id}
                    question={question}
                    editQuestion={editQuestion}
                    deleteQuestion={deleteQuestion}
                />
            ))}
        </div>
    );
};

const mapDispatchToProps = { editQuestion, deleteQuestion };

export default connect(null, mapDispatchToProps)(QuestionsList);
