// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from '@reduxjs/toolkit';
import summaryReducer from './summary_reducer';

const rootReducer = combineReducers({
  summary: summaryReducer,
});

export default rootReducer;
