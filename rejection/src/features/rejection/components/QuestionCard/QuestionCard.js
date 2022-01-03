import React from 'react';

const QuestionCard = (props) => {
    const {
        id,
        question,
        askee,
        status,
        timestamp } = props.question;

    return (
        <div className='question-card'>
            <div className='question-card-header'>
                <div
                    className='question-card-id'
                >ID: {id}</div>
                <div
                    className='question-card-status'
                >
                    STATUS: {status}
                </div>
            </div>
            <div className='question-card-body'>
                <div 
                    className='question-card-question'
                >
                    QUESTION: {question}
                </div>
                <div
                    className='question-card-askee'
                >
                    ASKEE: {askee}
                </div>
                <div
                    className='question-card-timestamp'
                >
                    TIMESTAMP: {timestamp}
                </div>
            </div>
        </div>
    );
}

export default QuestionCard;
