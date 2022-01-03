import React from 'react';

const ScoreBoard = (props) => {
    const { totalScore = 0 } = props;

    return (
        <div className='scoreboard'>
            <div className='total-score'>Total Score: {totalScore}</div>
        </div>
    );
};

export default ScoreBoard;
