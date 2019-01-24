import React, { PureComponent } from 'react';
import { List } from 'antd';
import Task from './Task';
//import reducer  from 'modules/list/TicketItemModule'
//import { injectReducer } from 'store/reducers';
export default(store) => {
    return class TaskList extends React.PureComponent {
        render(){
//         injectReducer(store, { key: 'ticketItem', reducer });
            return(
                <div>
                    <List
                        header={<div>Header</div>}
                        footer={<div>Footer</div>}
                        bordered
                        dataSource={this.props.data}
                        renderItem={item => (<List.Item> {Task(store,item)} </List.Item>)}
                    />
                </div>
            );
        }
    }
}