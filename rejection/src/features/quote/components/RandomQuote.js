import React from 'react';
import { withFeatures } from '@paralleldrive/react-feature-toggles';

const RandomQuote = ({ randomQuote, features }) => {

    return features.includes('random-quote')
        ? (<div className='questions-page-quote'>{randomQuote}</div>)
        : null;
};

export default withFeatures(RandomQuote);
