

import React, { PureComponent } from 'react';
import { List } from 'antd';
import Task from './Task';



export default(store) => {
    return class TaskList extends React.PureComponent {

        render(){
            const data = [
                  {title:'Racing car',desc:'Racing car sprays burning fuel into crowd.',type:'ticket'},
                  {title:'Japanese princess',desc:'Japanese princess to wed commoner.',type:'ticket'},
                  {title:'Australian walks',desc:'Australian walks 100km after outback crash.',type:'ticket'},
                  {title:'Man charged',desc:'Man charged over missing wedding girl.',type:'ticket'},
                  {title:'Los Angeles battles',desc:'Los Angeles battles huge wildfires.',type:'ticket1'}
                ];

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
        }st
    }
}