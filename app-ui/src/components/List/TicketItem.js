import Item from './Item';
import { List,Menu, Dropdown, Button, Icon, message } from 'antd';

export default class TicketItem extends Item{

    handleMenuClick (e):void {
          message.info('Click on menu item11. key= '+e.key);
          console.log('click', e);
    }
    menuDrop(){
        var {type}= this.props.item;
        return (
          <Menu onClick={this.handleMenuClick}>
            <Menu.Item key= {type} ><Icon type="user" /> Done </Menu.Item>
          </Menu>
        );
    }

}