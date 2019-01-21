// @flow
import { createAction, handleActions } from 'redux-actions';

export const initialState = {
  status: false
};

export const ticketDone = createAction('TICKET_DONE');


export default handleActions({
  [ticketDone]: (state,action) => ({ ...state, status: action.payload })
}, initialState);