import React, { PureComponent } from 'react';
import { List,Menu, Dropdown, Button, Icon, message } from 'antd';
import loadable from 'loadable-components';
import {getItem} from './ItemTaskCompo';



export default class Task extends React.PureComponent{

    constructor(props){
        super(props);
    }

    render(){
        const item = this.props.item;
        const {type} = item;
//        var Item = getItem(''+type) ;
           console.log(this.props);
        const  Item = loadable(() => import('containers/list/TicketItemContainer').then(Item=> Item));
        return(
         <div>
            <h1> {this.props.item.title} </h1>
            <Item item={item}/>
         </div>
        );
    }
}