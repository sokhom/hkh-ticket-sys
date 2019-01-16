import React, { PureComponent } from 'react';
import { List,Menu, Dropdown, Button, Icon, message } from 'antd';
import {getItem} from './ItemTaskCompo';


export default class Task extends React.PureComponent{

    constructor(props){
        super(props);
    }

    render(){
        const item = this.props.item;
        const {type} = item;
        var Item = getItem(''+type) ;
        return(
         <div>
            <h1> {this.props.item.type} </h1>
            <Item item={item} />
         </div>
        );
    }
}