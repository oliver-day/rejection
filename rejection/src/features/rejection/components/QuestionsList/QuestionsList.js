import React from 'react';

import QuestionCard from '../QuestionCard/QuestionCard';

const QuestionsList = (props) => {
    const { questions, status } = props;

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
                />
            ))}
        </div>
    );
};

export default QuestionsList;
