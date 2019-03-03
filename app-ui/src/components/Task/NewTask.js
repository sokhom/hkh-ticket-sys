import React from 'react';
import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Select,
  Icon,
  Button,
  Dropdown,
  Menu,
  InputNumber,
  DatePicker,
  Modal,
  message,
  Badge,
  Divider,
  Steps,
  Radio,
  Tabs,
  Cascader
} from 'antd';
import BasicModal from 'components/common/BasicModal'

export default class NewTask extends React.Component {
    render() {
        const { title,visible,handleOk,handleCancel,children} = this.props;
        return (
          <div>
            <BasicModal
              visible={visible}
              title={title}
              handleOk={handleOk}
              handleCancel={handleCancel}
            >
              {children}
            </BasicModal>
          </div>
        );
    }

}
