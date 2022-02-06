import { describe } from "riteway";
import { call, put } from 'redux-saga/effects';

import { hydrateRandomQuoteSucceeded } from "./reducer";
import { hydrateRandomQuoteFromApi } from "./saga";
import { fetchRandomQuote } from './api/index';
describe(
    'quote/saga | hydrateRandomQuoteFromApi',
    async assert => {
        const randomQuote = '"If you want to improve, be content to be thought foolish and stupid." — Epictetus';
        const gen = hydrateRandomQuoteFromApi();

        assert({
            given: 'first yield statement of `hydrateRandomQuoteFromApi` saga',
            should: 'the `fetchRandomQuote` function should be called first',
            actual: gen.next().value,
            expected: call(fetchRandomQuote)
        });

        assert({
            given: 'second yield statement `hydrateRandomQuoteFromApi` saga',
            should: 'put the `hydrateRandomQuoteSucceeded` function',
            actual: gen.next(randomQuote).value,
            expected: put(hydrateRandomQuoteSucceeded(randomQuote))
        });

        assert({
            given: 'no remaining yield statements `hydrateRandomQuoteFromApi` saga',
            should: 'should now be done',
            actual: gen.next(),
            expected: { done: true, value: undefined }
        });
})
