import React, { Component } from 'react';
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


} from 'antd';
import moment from 'moment';

const FormItem = Form.Item;
const { Option } = Select;
const InputGroup = Input.Group;
const Panel = Collapse.Panel;
const dateFormat = 'YYYY/MM/DD';


 class TicketForm extends React.Component{

    render(){
        const {
            item,
            form:{ getFieldDecorator, getFieldsError, getFieldError, isFieldTouched}
        } = this.props;
        const formItemLayout = {
          labelCol: {
            xs: { span: 16 },
            sm: { span: 8 },
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
          },
        };

        return(

             <Collapse  defaultActiveKey="1">
                <Panel header="Basic Info" key="1">

                    <Form  layout="vertical">
                        <Form.Item
                            {...formItemLayout}
                            label="Subject"
                        >
                            {getFieldDecorator('subject', {
                                initialValue: item.title,
                                rules: [
                                    {required: true,},
                                ],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item
                            {...formItemLayout}
                            label="Description"
                        >
                            {getFieldDecorator('description', {
                                 initialValue: item.desc,
                                rules: [
                                    {required: true,},
                                ],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item
                            {...formItemLayout}
                            label="Due Date"
                        >
                            {getFieldDecorator('dueDate',  {
                                initialValue: moment(item.dueDate, this.dateFormat),
                                rules: [{ type: 'object', required: false, message: 'Please select due date!' }]
                                })(
                                <DatePicker  />
                            )}
                        </Form.Item>
                    </Form>
                </Panel>
                <Panel header="Attachment files" key="2">
                    <h1> hello world!!!</h1>
                </Panel>
            </Collapse>

        );
    }
}

export default Form.create()(TicketForm);