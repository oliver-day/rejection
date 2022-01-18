import React from 'react';
import { connect } from 'react-redux';

import { editQuestion, deleteQuestion, QUESTION_STATUSES } from '../../reducer';

export const QuestionCard = (props) => {
    const { editQuestion, deleteQuestion } = props;
    const {
        id,
        question,
        askee,
        status,
        timestamp } = props.question;

    const onQuestionStatusChange = (e) => {
        const editQuestionParams = Object.assign({}, props.question, { status: e.target.value });
        editQuestion(id, editQuestionParams);
    }

    const onDeleteButtonClick = (e) => {
        deleteQuestion(id);
    }

    return (
        <div className='question-card'>
            <div className='question-card-header'>
                <div
                    className='question-card-id'
                >ID: {id}</div>
                <div className='question-card-status'>
                    <label htmlFor="status">STATUS:</label>
                    <select
                        id="status"
                        name="status"
                        value={status}
                        onChange={onQuestionStatusChange}
                    >
                        {QUESTION_STATUSES.map(status => (
                            <option
                                key={status}
                                value={status}
                            >
                                {status}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <br />
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
                <div>
                    <button
                        id="delete-button"
                        className="button"
                        onClick={onDeleteButtonClick}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = { editQuestion, deleteQuestion };

export default connect(null, mapDispatchToProps)(QuestionCard);
