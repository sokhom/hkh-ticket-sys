import React from 'react';
import {
  Modal,
  Button,
} from 'antd';

export default class BasicModal extends React.Component {

    handleOkButton = (callback) => {
        callback();
    }

    handleCancelButton = (callback) => {
        callback();
    }

    render() {
        const { title,visible,handleOk,handleCancel,children} = this.props;
        return (
          <div>
            <Modal
              visible={visible}
              title={title}
              onOk={()=> this.handleOkButton(handleOk)}
              maskClosable= {false}
              onCancel={()=>this.handleCancelButton(handleCancel)}
              footer={[
                <Button key="back" onClick={()=>this.handleCancelButton(handleCancel)}>Cancel</Button>,
                <Button key="submit" type="primary" onClick={()=> this.handleOkButton(handleOk)}>Create</Button>
              ]}
            >
              {children}
            </Modal>
          </div>
        );
    }

}