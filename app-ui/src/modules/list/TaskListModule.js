// @flow
import { createAction, handleActions } from 'redux-actions';


export const initialState = {
  data: [
    {id:1,title:'Racing car',desc:'Racing car sprays burning fuel into crowd.',type:'ticket'},
    {id:2,title:'Japanese princess',desc:'Japanese princess to wed commoner.',type:'ticket'},
    {id:3,title:'Australian walks',desc:'Australian walks 100km after outback crash.',type:'ticket'},
    {id:4,title:'Man charged',desc:'Man charged over missing wedding girl.',type:'ticket'},
    {id:5,title:'Los Angeles battles',desc:'Los Angeles battles huge wildfires.',type:'ticket1'}
  ]
};

export const openTask = createAction('OPEN_TASK');
export const updateTaskItem = createAction('UPDATE_TASK_ITEM');

export default handleActions({
  [openTask]: (state,action) =>
    state.tasks.data.map(task =>
        task.id == action.id ? {...task,title:'Edit ticket ' + action.id}: task
    ),
  [updateTaskItem]:(state,action)=> {
            return {data:state.data.map(task => task.id == action.payload.id ?  action.payload: task )};
  }
}, initialState);