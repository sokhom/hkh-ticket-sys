// @flow
import { combineReducers } from 'redux';
import { createAction, handleActions } from 'redux-actions';
import { formReducer, modelReducer } from 'react-redux-form';
export const initialState = {
  type: ''
};
export const modelPath: string = 'tasks.ticketItem';
export const ticketDone = createAction('TICKET_DONE');


export default combineReducers({
    request:handleActions({
        [ticketDone]: (state,action) =>{
//            console.log('ticketDone',state);
            return {...state, type: action.payload.type};
        }

    }, initialState),
    data: modelReducer(modelPath,initialState)
});