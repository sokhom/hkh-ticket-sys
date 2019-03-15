import React, { Component } from 'react';
//import { formatMessage, FormattedMessage } from 'umi/locale';
import {
  Card,
  Button,
  Form,
  Icon,
  Col,
  Row,
  DatePicker,
  TimePicker,
  Input,
  Select,
  Popover,
  Collapse,
  Cascader,

  message,
  Layout,
  Menu,
  Dropdown
} from 'antd';
import CreateNewTicket from 'components/Task/Ticket/CreateNewTicket'
import styles from './BaseView.less';

const FormItem = Form.Item;
const { Option } = Select;
const InputGroup = Input.Group;
const Panel = Collapse.Panel;
const {
  Header, Footer, Content,
} = Layout;

class TicketItemView extends React.Component{

    componentWillMount() {
//        this.props.viewTicket(this.props.item)
//        console.log('TicketItemView->componentWillMount ',this.props);
    }

    saveFormRef = (formRef) => {
        this.formRef = formRef;
    }



    handleDropDownMenu = (e) => {
        const {key} = e;
        switch (key){
            case 'done_ticket' :
                this.props.ticketDone({...this.props.item,desc:'edit from view detail from '});
                break;
                console.log('handle not match.');
                break;
        }
    }

    menuDrop(){
     return (
       <Menu onClick={this.handleDropDownMenu}>
         <Menu.Item key="done_ticket"><Icon type="user" />Done</Menu.Item>
         <Menu.Item key="2"><Icon type="user" />2nd menu item</Menu.Item>
         <Menu.Item key="3"><Icon type="user" />3rd item</Menu.Item>
       </Menu>
     );

    }

    render(){
        console.log('TicketItemView-> props: ',this.props);
        return(
            <Layout
                className="layout"
                style={{
                    overflow: 'hidden',
                    minHeight: '100%',
                }}
            >
                <Content>
                    < CreateNewTicket wrappedComponentRef={this.saveFormRef} item={this.props.item}/>
                </Content>
                <Footer style={{backgroundColor: '#fafafa',padding: '5px',     margin: '7px 0px 7px 0px' }}>
                    <Dropdown  overlay={this.menuDrop()}>
                        <Button style={{ marginLeft: 8,float:'right' }}>
                            Actions <Icon type="down" />
                        </Button>
                    </Dropdown>
                </Footer>
            </Layout>
        );
    }
}

export default Form.create()(TicketItemView);