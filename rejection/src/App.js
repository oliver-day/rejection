import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';

import { 
    hydrateQuestionsFromLocalState,
    getIsLoading,
    getQuestionsGroupedByStatus,
    getTotalScore
} from './features/rejection/reducer';
import QuestionsPage from "./features/rejection/components/QuestionsPage/QuestionsPage";

function App() {

    const dispatch = useDispatch();

    const isLoading = useSelector(getIsLoading);
    const questions = useSelector(getQuestionsGroupedByStatus);
    const totalScore = useSelector(getTotalScore);

    const scores = {
        totalScore
    };

    useEffect(() => {
        dispatch(hydrateQuestionsFromLocalState());
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

export default connect(null, { hydrateQuestionsFromLocalState })(App);
