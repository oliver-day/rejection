import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';

import { hydrateQuestionsFromLocalState, getQuestionsGroupedByStatus, getTotalScore } from './features/rejection/reducer';
import QuestionsPage from "./features/rejection/components/QuestionsPage/QuestionsPage";

function App() {

    const dispatch = useDispatch();

    const questions = useSelector(getQuestionsGroupedByStatus);
    const totalScore = useSelector(getTotalScore);

    const scores = {
        totalScore
    };

    // useEffect(() => {
    //     dispatch(hydrateQuestionsFromLocalState());
    // }, []);

    return (
        <div className="app">
        <QuestionsPage
            questions={questions}
            scores={scores}
        />
        </div>
    );
}

export default connect(null, { hydrateQuestionsFromLocalState })(App);
