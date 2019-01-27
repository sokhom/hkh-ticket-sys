import { call, put, take } from 'redux-saga/effects';
import UserAPI from 'apis/UserAPI';
//import { APIError } from '../../../util/API';
import {updateTaskItem,updateItemInTaskList} from 'modules/list/TaskListModule';
import {ticketDone} from 'modules/list/TicketItemModule';

export function* taskSaga(api: UserAPI): Generator<*, *, *> {
    while(true){
        const {payload} = yield take(ticketDone().type);
        try{

            yield put(updateItemInTaskList(payload));

        }catch(e){
            console.log('saga update item  in task list:',e);
        }

    }

}

const api = new UserAPI();
export default [taskSaga, api];