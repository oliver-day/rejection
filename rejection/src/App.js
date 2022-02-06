import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { 
    hydrateQuestionsFromLocalState,
    getIsLoading,
    getQuestionsGroupedByStatus,
    getTotalScore
} from './features/rejection/reducer';
import { hydrateRandomQuote, getRandomQuote } from './features/quote/reducer';
import QuestionsPage from "./features/rejection/components/QuestionsPage/QuestionsPage";

function App(props) {

    const { 
        hydrateQuestionsFromLocalState,
        isLoading,
        questions,
        totalScore,
        hydrateRandomQuote,
        randomQuote,
     } = props;

    const scores = {
        totalScore
    };

    useEffect(() => {
        hydrateQuestionsFromLocalState();
    }, []);

    useEffect(() => {
        hydrateRandomQuote();
    }, []);

    return (
        <div className="app">
            {isLoading ?
                <div>Loading...</div>
                :
                <QuestionsPage
                    questions={questions}
                    scores={scores}
                    randomQuote={randomQuote}
                />
            }
        </div>
    );
}

const mapStateToProps = (state) => ({
    isLoading: getIsLoading(state),
    questions: getQuestionsGroupedByStatus(state),
    totalScore: getTotalScore(state),
    randomQuote: getRandomQuote(state),
});

const mapDispatchToProps = {
    hydrateQuestionsFromLocalState,
    hydrateRandomQuote,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
