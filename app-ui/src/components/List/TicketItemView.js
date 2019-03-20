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
import TicketForm from 'components/Task/Ticket/TicketForm'
import TicketActionDoneModal from 'components/Task/Ticket/TicketActionDoneModal'
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
                const {showModal} = this.formRef1
//                console.log('wrappedActionD?oneModal ' ,showModal);
                showModal(this.props.item);
                //this.props.ticketDone({...this.props.item,desc:'edit from view detail from '});
                break;
                console.log('handle not match.');
                break;
        }
    }

    menuDrop(){
        var { actions } = this.props.item;
        return (
            <Menu onClick={this.handleDropDownMenu}>
                {actions.map(act =>
                    <Menu.Item key= {act.key} ><Icon type="user" /> {act.name}</Menu.Item>
                )}
            </Menu>
        );
    }

    wrappedActionDoneModal = (formRef1) => {
//            console.log('wrappedActionDoneModal11111 ' ,formRef1);
            this.formRef1 = formRef1;
    }

    render(){
//        console.log('TicketItemView-> props: ',this.props);
        return(
            <Layout
                className="layout"
                style={{
                    overflow: 'hidden',
                    minHeight: '100%',
                }}
            >
                <Content>
                    < TicketForm wrappedComponentRef={this.saveFormRef} item={this.props.item}/>
                    <TicketActionDoneModal item={this.props.item} wrappedComponentRef={this.wrappedActionDoneModal} ticketActionDone={this.props.ticketDone} />
                </Content>
                <Footer style={{backgroundColor: '#fafafa',padding: '5px',     margin: '7px 0px 7px 0px' }}>
                    <Dropdown  overlay={this.menuDrop()}>
                        <Button type="primary" style={{ marginLeft: 8,float:'right' }}>
                            Actions <Icon type="down" />
                        </Button>
                    </Dropdown>
                </Footer>
            </Layout>
        );
    }
}

export default Form.create()(TicketItemView);