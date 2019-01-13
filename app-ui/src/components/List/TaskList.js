

import React, { PureComponent } from 'react';
import { List } from 'antd';
import Task from './Task';


export default class TaskList extends PureComponent {

    componentDidMount() {}

    render() {

        const data = [
              {title:'Racing car sprays burning fuel into crowd.',type:'ticket'},
              {title:'Japanese princess to wed commoner.',type:'ticket'},
              {title:'Australian walks 100km after outback crash.',type:'ticket'},
              {title:'Man charged over missing wedding girl.',type:'ticket'},
              {title:'Los Angeles battles huge wildfires.',type:'ticket'}
            ];

        return(
            <div>
                <List
                    header={<div>Header</div>}
                     footer={<div>Footer</div>}
                     bordered
                     dataSource={data}
                     renderItem={item => (<List.Item> <Task item={item}/> </List.Item>)}
                />
            </div>
        );
    }

}