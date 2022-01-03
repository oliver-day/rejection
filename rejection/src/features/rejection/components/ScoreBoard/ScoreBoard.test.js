import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';

import ScoreBoard from './ScoreBoard';

describe('rejection/components/ScoreBoard', async assert => {
    const createScoreBoard = (totalScore) => render(<ScoreBoard totalScore={totalScore} />);

    {
        const totalScore = 11;

        const $ = createScoreBoard(totalScore);

        assert({
            given: 'expected props',
            should: 'render the "totalScore" element',
            actual: $('.total-score').length,
            expected: 1
        });

        assert({
            given: '"totalScore" as a prop',
            should: 'render the "totalScore" prop value',
            actual: $('.total-score').html().trim(),
            expected: `Total Score: ${totalScore}`
        });
    }
});
