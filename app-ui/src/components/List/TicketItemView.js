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
  Cascader
} from 'antd';
import CreateNewTicket from 'components/Task/Ticket/CreateNewTicket'
import styles from './BaseView.less';

const FormItem = Form.Item;
const { Option } = Select;
const InputGroup = Input.Group;
const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}


 class TicketItemView extends React.Component{

    saveFormRef = (formRef) => {
        this.formRef = formRef;
    }

    render(){
//        console.log('TicketItemView-> props: ',this.props);
        return(
            <div>
            < CreateNewTicket wrappedComponentRef={this.saveFormRef} {...this.props}/>
            </div>
        );
    }
}

export default Form.create()(TicketItemView);