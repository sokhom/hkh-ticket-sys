import React, { PureComponent } from 'react';
import { List,Menu, Dropdown, Button, Icon, message } from 'antd';
import loadable from 'loadable-components';
import {getItem} from './ItemTaskCompo';
import { injectReducer } from 'store/reducers';
import { injectSaga } from 'store/sagas';
//import reducer  from 'modules/list/TicketItemModule'

class Task extends React.PureComponent{

    constructor(props){
        super(props);
    }

    openItemDetail = (itemDetailComp) => {
        return  this.props.onNewTabItem(this.props.item,itemDetailComp);
    }

    render(){
        // injectReducer(this.props.store, { key: 'ticketItem', reducer });
        const item = this.props.item;
        const {type} = item;
        const  Item = loadable(() => import('containers/list/TicketItemContainer'));
        return(
         <div style={{width: '100%'}}>
            <h4> {this.props.item.title} </h4>
            <Item item={item} openItemDetail={this.openItemDetail}/>
         </div>
        );
    }
}

export default(store,item,onNewTabItem) => {
    return <Task store={store} item={item} onNewTabItem={onNewTabItem} />
}