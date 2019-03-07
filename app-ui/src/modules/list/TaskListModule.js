// @flow
import { createAction, handleActions } from 'redux-actions';


export const initialState = {
  data: [
    {id:1,title:'Racing car',desc:'Racing car sprays burning fuel into crowd.',type:'ticket'},
//    {id:2,title:'Japanese princess',desc:'Japanese princess to wed commoner.',type:'ticket'},
//    {id:3,title:'Australian walks',desc:'Australian walks 100km after outback crash.',type:'ticket'},
//    {id:4,title:'Man charged',desc:'Man charged over missing wedding girl.',type:'ticket'},
//    {id:5,title:'Los Angeles battles',desc:'Los Angeles battles huge wildfires.',type:'ticket1'}
  ],
  itemTabs: []
};

export const openTask = createAction('OPEN_TASK');
export const updateTaskItem = createAction('UPDATE_TASK_ITEM');
export const updateItemInTaskList = createAction('UPDATE_ITEM_IN_TASK_LIST');
export const addNewTaskItem = createAction('ADD_NEW_TASK_ITEM');

export default handleActions({
  [openTask]: (state,action) =>
    state.tasks.data.map(task =>
        task.id == action.id ? {...task,title:'Edit ticket ' + action.id}: task
    ),
  [updateItemInTaskList]:(state,action)=> {
            return {data:state.data.map(task => task.id == action.payload.id ?  action.payload: task )};
  },
  [addNewTaskItem]:(state,action)=> {
        const {data} = state    ;
        const index = data.length > 0 ?   data.length + 1 : 1   ;
        const {subject,description,type='ticket',dueDate} = action.payload

//        console.log('add new task:',index);

        const newTask= {id:index,title:subject,desc:description,type:'ticket'};
        return {data:[...state.data,newTask] }

  }
}, initialState);