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
        const item = this.props.item;
        const {type} = item;
        const  Item = loadable(() => import('containers/list/TicketItemContainer'));
       // const  reducer = loadable(() => import('modules/list/TicketItemModule').then(f=>f.default()));
//        console.log('ticketItem, reducer',reducer);
        injectReducer(this.props.store, { key: 'ticketItem', reducer });
        return(
         <div>
            <h1> {this.props.item.title} </h1>
            <Item item={item}/>
         </div>
        );
    }
}

export default(store,item) => {
    return <Task store={store} item={item} />
}