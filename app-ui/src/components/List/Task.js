import React, { PureComponent } from 'react';
import { List,Menu, Dropdown, Button, Icon, message } from 'antd';
import TicketItem from './TicketItem';


export default class Task extends React.PureComponent{

    render(){
        const item = this.props.item;
        const {type} = item;
        switch(type){
            case "ticket": return <TicketItem item={item} />
            default: return <div><h1>hello </h1></div>
        }



    }
}