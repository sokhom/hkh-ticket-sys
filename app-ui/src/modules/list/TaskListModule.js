// @flow
import { createAction, handleActions } from 'redux-actions';


export const initialState = {
  data: [
    {id:1,title:'Printer- Paper Jam',desc:'Fixing a Paper Jam - HP Deskjet 2050 All-in-One Printer | HP.',type:'ticket',actions:[{name:'Acknowledge',key:'acknowledge_ticket'},{name:'Done',key:'done_ticket'},{name:'Open Ticket Detail',key:'open_ticket'}]},
    {id:2,title:'Internet slow',desc:'Why Is My Internet So Slow? What Can I Do to Fix It?.',type:'ticket',actions:[{name:'Done',key:'done_ticket'},{name:'Open Ticket Detail',key:'open_ticket'}]},
//    {id:3,title:'Australian walks',desc:'Australian walks 100km after outback crash.',type:'ticket'},
//    {id:4,title:'Man charged',desc:'Man charged over missing wedding girl.',type:'ticket'},
//    {id:5,title:'Los Angeles battles',desc:'Los Angeles battles huge wildfires.',type:'ticket1'}
  ]
};

export const openTask = createAction('OPEN_TASK');
export const updateTaskItem = createAction('UPDATE_TASK_ITEM');
export const updateItemInTaskList = createAction('UPDATE_ITEM_IN_TASK_LIST');
export const addNewTaskItem = createAction('ADD_NEW_TASK_ITEM');

//Ticket Item
export const createTicketItem = createAction('CREATE_TICKET_ITEM');
export const viewTicketItem = createAction('VIEW_TICKET_ITEM');

export default handleActions({
    [openTask]: (state,action) =>
    state.tasks.data.map(task =>
       task.id == action.id ? {...task,title:'Edit ticket ' + action.id}: task
    ),
    [updateItemInTaskList]:(state,action)=> {
         const {item} = action.payload;
       return {data:state.data.map(task => task.id == item.id ?  item: task )};
    },
    [addNewTaskItem]:(state,action)=> {
        const {data} = state ;
        const index = data.length > 0 ?   data.length + 1 : 1   ;
        const {subject,description,type='ticket',dueDate,actions} = action.payload
    //        console.log('add new task:',index);
        const newTask= {id:index,title:subject,desc:description,type:'ticket',actions:actions};
        return {data:[...state.data,newTask] }
    },
    [createTicketItem]:(state,action)=> {
        const {data} = state ;
        const index = data.length > 0 ?   data.length + 1 : 1   ;
        const {subject,description,type='ticket',dueDate,actions} = action.payload
//                console.log('add new task:',action.payload);
        const newTask= {id:index,title:subject,desc:description,type:'ticket',actions:actions};
        return {data:[...state.data,newTask] }
    },
    [viewTicketItem]:(state,action)=> {
        return {...state}
    }
}, initialState);