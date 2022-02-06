
const quoteSlice = 'quote';

const initialState = {
    randomQuote: '',
    isLoading: false
};

const hydrateRandomQuote = () => ({
    type: hydrateRandomQuote.type,
});
hydrateRandomQuote.type = 'quote/hydrateRandomQuote';

const hydrateRandomQuoteSucceeded = (state = []) => ({
    type: hydrateRandomQuoteSucceeded.type,
    payload: state
});
hydrateRandomQuoteSucceeded.type = 'quote/hydrateRandomQuoteSucceeded';

const getRandomQuote = state => state[quoteSlice].randomQuote;

const getIsLoading = state => state[quoteSlice].isLoading;

const quoteReducer = (state = initialState, { type, payload } = {}) => {
    switch(type) {
        case hydrateRandomQuote.type:
            return {
                ...state,
                isLoading: true,
            };
        case hydrateRandomQuoteSucceeded.type: {
            return {
                ...state,
                randomQuote: payload,
                isLoading: false
            }
        }
        default: {
            return state;
        }
    }
};

export {
    quoteReducer,
    quoteSlice,
    hydrateRandomQuote,
    hydrateRandomQuoteSucceeded,
    getRandomQuote,
    getIsLoading
}
