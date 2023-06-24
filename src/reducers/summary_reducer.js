/* eslint-disable no-param-reassign */
import { produce } from 'immer';
import { ActionTypes } from '../actions';

const initialState = {
  all: {},
  // current: {},
};

const summaryReducer = produce((draftState, action = {}) => {
  switch (action.type) {
    case ActionTypes.FETCH_SUMMARY:
      draftState.all = action.payload;
      break;
    default:
      break;
  }
}, initialState);

export default summaryReducer;
