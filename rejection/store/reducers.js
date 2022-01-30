import { combineReducers } from 'redux';

import * as questions from "../src/features/rejection/reducer";

const { rejectionReducer, rejectionSlice } = questions;

const rootReducer = combineReducers({
    [rejectionSlice]: rejectionReducer
});

export default rootReducer;
