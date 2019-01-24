// @flow
import { createAction, handleActions } from 'redux-actions';

export const initialState = {
  data: [
    {title:'Racing car',desc:'Racing car sprays burning fuel into crowd.',type:'ticket'},
    {title:'Japanese princess',desc:'Japanese princess to wed commoner.',type:'ticket'},
    {title:'Australian walks',desc:'Australian walks 100km after outback crash.',type:'ticket'},
    {title:'Man charged',desc:'Man charged over missing wedding girl.',type:'ticket'},
    {title:'Los Angeles battles',desc:'Los Angeles battles huge wildfires.',type:'ticket1'}
  ]
};

export const openTask = createAction('OPEN_TASK');


export default handleActions({
  [openTask]: (state,action) => ({ ...state,  title:'Racing car',desc:'Racing car sprays burning fuel into crowd.',type:'ticket' })
}, initialState);