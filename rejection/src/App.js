import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';

import { getQuestionsGroupedByStatus, getTotalScore } from './features/rejection/reducer';
import { onHydrateLocalState } from './features/rejection/saga';
import QuestionsPage from "./features/rejection/components/QuestionsPage/QuestionsPage";

function App() {

    const dispatch = useDispatch();

    const questions = useSelector(getQuestionsGroupedByStatus);
    const totalScore = useSelector(getTotalScore);

    const scores = {
        totalScore
    };

    useEffect(() => {
        dispatch(onHydrateLocalState());
    }, []);

    return (
        <div className="app">
        <QuestionsPage
            questions={questions}
            scores={scores}
        />
        </div>
    );
}

export default connect(null, { onHydrateLocalState })(App);
