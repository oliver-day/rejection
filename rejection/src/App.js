import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { 
    hydrateQuestionsFromLocalState,
    getIsLoading,
    getQuestionsGroupedByStatus,
    getTotalScore
} from './features/rejection/reducer';
import QuestionsPage from "./features/rejection/components/QuestionsPage/QuestionsPage";

function App(props) {

    const { 
        hydrateQuestionsFromLocalState,
        isLoading,
        questions,
        totalScore } = props;

    const scores = {
        totalScore
    };

    useEffect(() => {
        hydrateQuestionsFromLocalState();
    }, []);

    return (
        <div className="app">
            {isLoading ?
                <div>Loading...</div>
                :
                <QuestionsPage
                    questions={questions}
                    scores={scores}
                />
            }
        </div>
    );
}

const mapStateToProps = (state) => ({
    isLoading: getIsLoading(state),
    questions: getQuestionsGroupedByStatus(state),
    totalScore: getTotalScore(state)
});

const mapDispatchToProps = { hydrateQuestionsFromLocalState };

export default connect(mapStateToProps, mapDispatchToProps)(App);
