import { combineReducers } from 'redux';

import * as questions from "../src/features/rejection/reducer";
import * as quote from "../src/features/quote/reducer";

const { rejectionReducer, rejectionSlice } = questions;
const { quoteReducer, quoteSlice } = quote;

const rootReducer = combineReducers({
    [rejectionSlice]: rejectionReducer,
    [quoteSlice]: quoteReducer
});

export default rootReducer;
