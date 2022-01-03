import React, { useState } from 'react';


const QuestionForm = (props) => {

    const [question, setQuestion] = useState('');
    const [askee, setAskee] = useState('');

    const { onCreateQuestion } = props;

    const onQuestionChange = e => {
        setQuestion(e.target.value );
      };
    
    const onAskeeChange = e => {
        setAskee(e.target.value);
    };
    
    const resetForm = () => {
        setQuestion('');
        setAskee('');
    };

    const onCreateQuestionHandler = e => {
        e.preventDefault();
        const {textContent: status } = e.nativeEvent.submitter;
        onCreateQuestion({
            question,
            askee,
            status
        });
        resetForm();
    };

    return (
        <div>
            <div className="new-question-form-title">
                New Question Form
            </div>
            <form
                className="new-question-form"
                onSubmit={onCreateQuestionHandler}
            >
                <label htmlFor="question">QUESTION: </label>
                <input
                    id="question"
                    className="new-question-input"
                    type="text"
                    value={question}
                    onChange={onQuestionChange}
                    placeholder="Question asked to askee"
                />
                <label htmlFor="askee">ASKEE: </label>
                <input
                    id="askee"
                    className="new-question-input"
                    type="text"
                    value={askee}
                    onChange={onAskeeChange}
                    placeholder='Askee'
                />
                <label>STATUS:</label>
                <div>
                    <button
                        id="unanswered-button"
                        className="button"
                        type="submit"
                    >
                        Unanswered
                    </button>
                    <button
                        id="accepted-button"
                        className="button"
                        type="submit"
                    >
                        Accepted
                    </button>
                    <button
                        id="rejected-button"
                        className="button"
                        type="submit"
                    >
                        Rejected
                    </button>
                </div>
            </form>
        </div>
    );
}

export default QuestionForm;
