import React, { PureComponent } from 'react';
import { List } from 'antd';
import Task from './Task';

export default(store) => {
    return class TaskList extends React.PureComponent {
        render(){
            return(
                <div>
                    <List
                        header={<div>Header</div>}
                        footer={<div>Footer</div>}
                        bordered
                        dataSource={this.props.data}
                        renderItem={item => (<List.Item> {Task(store,item,this.props.onNewTabItem)} </List.Item>)}
                    />
                </div>
            );
        }
    }
}