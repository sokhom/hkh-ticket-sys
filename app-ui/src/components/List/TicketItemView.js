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
import styles from './BaseView.less';

const FormItem = Form.Item;
const { Option } = Select;
const InputGroup = Input.Group;
const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}


 class TicketItemView extends React.Component{

    render(){
        const {
             getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
           } = this.props.form;
        const formItemLayout = {
          labelCol: {
            xs: { span: 16 },
            sm: { span: 8 },
          },
          wrapperCol: {
            xs: { span: 16 },
            sm: { span: 8 },
          },
        };

        return(
             <Collapse onChange={callback} defaultActiveKey="1">
                <Panel header="Requester" key="1">
                    <Form  layout="vertical">
                        <Form.Item
                            {...formItemLayout}
                            label="E-mail"
                        >
                            {getFieldDecorator('email', {
                                rules: [{
                                    type: 'email', message: 'The input is not valid E-mail!',
                                }, {
                                    required: true, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input />
                            )}
                        </Form.Item>
                        <Form.Item
                            {...formItemLayout}
                            label="DatePicker"
                        >
                            {getFieldDecorator('date-picker',  { rules: [{ type: 'object', required: true, message: 'Please select time!' }] })(
                                <DatePicker />
                            )}
                        </Form.Item>
                    </Form>
                </Panel>
                <Panel header="Items" key="2">
                    <h1> hell</h1>
                </Panel>
            </Collapse>
        );
    }
}

export default Form.create()(TicketItemView);