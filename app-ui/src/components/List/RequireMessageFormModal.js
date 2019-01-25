import React, { Component } from 'react';
import {
  Button, Modal, Form, Input, Radio,
} from 'antd';


export const RequireMessageFormModal = Form.create({ name: 'require_message_form_modal' })(

    class extends React.Component {
        render() {
          const {
            visible, onCancel, onCreate, form, title,okText
          } = this.props;
          const { getFieldDecorator } = form;
          return (
            <Modal
              visible={visible}
              title={title}
              okText={okText? okText:'Ok'}
              onCancel={onCancel}
              onOk={onCreate}
            >
              <Form layout="vertical">
                <Form.Item label="Description">
                  {getFieldDecorator('desc', {
                    rules: [{ required: true, message: 'Please input the description!' }],
                  })(
                    <Input />
                  )}
                </Form.Item>
              </Form>
            </Modal>
          );
        }
    }
);
