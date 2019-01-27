// @flow
import { combineReducers } from 'redux';
import { createAction, handleActions } from 'redux-actions';
import { formReducer, modelReducer } from 'react-redux-form';
export const initialState = {
  type: ''
};
export const modelPath: string = 'tasks.ticketItem';
export const ticketDone = createAction('TICKET_DONE');
export const ticketDone1 = createAction('TICKET_DONE1');


export default handleActions({
        [ticketDone1]: (state,action) =>{
//            console.log('ticketDone',state);
            return {...state, type: action.payload.type};
        }

    }, initialState);