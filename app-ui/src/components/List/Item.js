import React, { PureComponent } from 'react';
import { List,Menu, Dropdown, Button, Icon, message } from 'antd';


export default class Item extends React.PureComponent{

    render(){

        function handleButtonClick(e) {
          message.info('Click on left button.');
          console.log('click left button', e);
        }

        function handleMenuClick(e) {
          message.info('Click on menu item.');
          console.log('click', e);
        }

        const menu = (
          <Menu onClick={handleMenuClick}>
            <Menu.Item key="1"><Icon type="user" />1st menu item</Menu.Item>
            <Menu.Item key="2"><Icon type="user" />2nd menu item</Menu.Item>
            <Menu.Item key="3"><Icon type="user" />3rd item</Menu.Item>
          </Menu>
        );

        return(
            <div>
                <h1> {this.props.item.type} </h1>
                <p> {this.props.item.title}</p>
                <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
                    Acknowledge
                </Dropdown.Button>
            </div>
        );
    }
}