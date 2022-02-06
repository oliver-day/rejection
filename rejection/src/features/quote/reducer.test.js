import { describe } from 'riteway';

import { 
    quoteReducer,
 } from './reducer';

 const createState = () => ({
     randomQuote: '',
     isLoading: false
 });

 describe('quote/reducer', async assert => {
    assert({
        given: "no arguments",
        should: 'return valid initial state',
        actual: quoteReducer(),
        expected: createState(),
    });
 });
