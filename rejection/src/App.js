import React from 'react';
import { useSelector } from 'react-redux';
import { getQuestionsGroupedByStatus, getTotalScore } from './features/rejection/reducer';

import QuestionsPage from "./features/rejection/components/QuestionsPage/QuestionsPage";

function App() {

  const questions = useSelector(getQuestionsGroupedByStatus);
  const totalScore = useSelector(getTotalScore);

  const scores = {
    totalScore
  };

  return (
    <div className="app">
      <QuestionsPage
        questions={questions}
        scores={scores}
      />
    </div>
  );
}

export default App;
