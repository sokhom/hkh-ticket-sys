import Item from './Item';
import { List,Menu, Dropdown, Button, Icon, message } from 'antd';


export default class TicketItem extends Item{

    handleMenuClick (e):void {
          console.log('click', this.props);
          this.props.ticketDone(true);
    }
    menuDrop(){
        var {type}= this.props.item;
        return (
          <Menu onClick={e => this.props.ticketDone(this.props.item)}>
            <Menu.Item key= {type} ><Icon type="user" /> Done </Menu.Item>
          </Menu>
        );
    }

}