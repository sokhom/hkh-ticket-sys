// @flow
import { combineReducers } from 'redux';
import { createAction, handleActions } from 'redux-actions';
import { formReducer, modelReducer } from 'react-redux-form';
export const initialState = {
        isPadding: false
};
export const modelPath: string = 'tasks.ticketItem';
export const ticketDone = createAction('TICKET_DONE');
//export const ticketDone1 = createAction('TICKET_DONE1');
export const createNewTicket = createAction('CREATE_NEW_TICKET');
export const updateTicket = createAction('UPDATE_TICKET');
export const viewTicket = createAction('VIEW_TICKET');


export default handleActions({
//        [ticketDone1]: (state,action) =>{
//            return {...state, type: action.payload.type};
//        },
        [updateTicket]: (state,action)=>{
//            console.log('TicketTtemModule:',state);
            return {...state,item: action.payload}
        }
    }, initialState);