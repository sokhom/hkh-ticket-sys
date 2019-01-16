import React, { PureComponent } from 'react';
import { List,Menu, Dropdown, Button, Icon, message } from 'antd';


export default class Item extends React.PureComponent{

    handleButtonClick(e):void {
      message.info('Click on left button.');
      console.log('click left button', e);
    }

    handleMenuClick (e):void {
      message.info('Click on menu item.');
      console.log('click', e);
    }

    menuDrop(){
        return (
          <Menu onClick={this.handleMenuClick}>
            <Menu.Item key="1"><Icon type="user" />1st menu item</Menu.Item>
            <Menu.Item key="2"><Icon type="user" />2nd menu item</Menu.Item>
            <Menu.Item key="3"><Icon type="user" />3rd item</Menu.Item>
          </Menu>
        );
    }

    render(){
        return(
            <div>
                <p> {this.props.item.title}</p>
                <Dropdown.Button onClick={this.handleButtonClick} overlay={this.menuDrop()}>
                    Acknowledge
                </Dropdown.Button>
            </div>
        );
    }
}