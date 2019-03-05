import { call, put, take,all } from 'redux-saga/effects';
import UserAPI from 'apis/UserAPI';
import { combineSagas, handleError } from 'util/Saga';
import {updateTaskItem,updateItemInTaskList,addNewTaskItem} from 'modules/list/TaskListModule';
import {ticketDone,createNewTicket,viewTicket,updateTicket} from 'modules/list/TicketItemModule';

export function* taskList(api: UserAPI): Generator<*, *, *> {
     while(true){
         const {payload} = yield take(ticketDone().type);
         try{
             yield put(updateItemInTaskList(payload));
         }catch(e){
             console.log('saga update item  in task list:',e);
         }
     }
 }

export function* newTask(api: UserAPI): Generator<*, *, *> {
    while(true){
        const {payload} = yield take(createNewTicket().type);
        try{
            yield put(addNewTaskItem(payload));
        }catch(e){
            console.log('saga create new task by each item',e);
        }
    }
}


export function* viewTicket1(api: UserAPI): Generator<*, *, *> {
    while(true){
        const {payload} = yield take(viewTicket().type);
        try{
//            console.log('viewTicket1',payload);
//            yield put(updateTicket(payload));
            yield put(updateTicket(payload));
        }catch(e){
            console.log('saga create new task by each item',e);
        }
    }
}


export function* taskSaga(api: UserAPI): Generator<*, *, *> {
    yield all(combineSagas([
        [taskList,api],
        [newTask,api],
        [viewTicket1,api]
    ]));
}

const api = new UserAPI();
export default [taskSaga, api];