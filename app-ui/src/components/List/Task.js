import React, { PureComponent } from 'react';
import { List,Menu, Dropdown, Button, Icon, message } from 'antd';
import TicketItem from './TicketItem';


export default class Task extends React.PureComponent{

    render(){

        return(
            <div>
                <TicketItem item={this.props.item} />
            </div>
        );
    }
}