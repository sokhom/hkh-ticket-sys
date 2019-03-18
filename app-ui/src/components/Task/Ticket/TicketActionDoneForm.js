import React, { Component } from 'react';
import {
  Button, Modal, Form, Input, Radio,
} from 'antd';

class TicketActionDoneForm extends React.Component {
    render() {
        const {
        visible, onCancel, onCreate, form, title,okText
        } = this.props;
        const { getFieldDecorator } = form;
        return (
          <Form layout="vertical">
            <Form.Item label="Description">
              {getFieldDecorator('desc', {
                rules: [{ required: true, message: 'Please input the description!' }],
              })(
                <Input />
              )}
            </Form.Item>
          </Form>
        );
    }
}

export default Form.create()(TicketActionDoneForm);