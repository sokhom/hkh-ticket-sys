import React, { Component } from 'react';
import {
  Button,
  Modal,
  Form,
  Input,
  Radio,
  Select
} from 'antd';
const { TextArea } = Input;

class TicketActionAssignToForm extends React.Component {

    state = {
        selectedItems: [],
    };

    handleChange = selectedItems => {
        this.setState({ selectedItems });
    };
    render() {
        const OPTIONS = ['Hay Sokhom', 'Group-A', 'Ngoun Phanny', 'Group-C'];
        const { selectedItems } = this.state;
        const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));
        const {
            form
        } = this.props;
        const { getFieldDecorator } = form;
        return (
          <Form layout="vertical">
            <Form.Item label="Assign To">
              {getFieldDecorator('assignTo', {
                rules: [{ required: true, message: 'Please assign the ticket to...' }],
              })(
                <Select
                    mode="multiple"
                    placeholder="Inserted are removed"
                    value={selectedItems}
                    onChange={this.handleChange}
                    style={{ width: '100%' }}
                >
                    {filteredOptions.map(item => (
                        <Select.Option key={item} value={item}>
                            {item}
                        </Select.Option>
                    ))}
                </Select>
              )}
            </Form.Item>
            <Form.Item label="Description">
                {getFieldDecorator('desc', {
                    rules: [{ required: false, message: 'Please input the description!' }],
                })(
                    <TextArea placeholder="Please input the description!" autosize={{ minRows: 2, maxRows: 6 }} />
                )}
            </Form.Item>
          </Form>
        );
    }
}

export default Form.create()(TicketActionAssignToForm);