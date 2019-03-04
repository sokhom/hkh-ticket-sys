import React, { PureComponent } from 'react';
import { List,Menu, Dropdown, Button, Icon, message } from 'antd';
import loadable from 'loadable-components';
import {getItem} from './ItemTaskCompo';
import { injectReducer } from 'store/reducers';
import { injectSaga } from 'store/sagas';
import reducer  from 'modules/list/TicketItemModule'

class Task extends React.PureComponent{

    constructor(props){
        super(props);
    }

    render(){
         injectReducer(this.props.store, { key: 'ticketItem', reducer });

        const item = this.props.item;
        const {type} = item;
        const  Item = loadable(() => import('containers/list/TicketItemContainer'));

        return(
         <div>
            <h4> {this.props.item.title} </h4>
            <Item item={item} onNewTabItem={this.props.onNewTabItem}/>
         </div>
        );
    }
}

export default(store,item,onNewTabItem) => {
    return <Task store={store} item={item} onNewTabItem={onNewTabItem} />
}