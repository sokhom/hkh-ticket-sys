import React, { Component } from 'react';
import BasicModal from 'components/common/BasicModal';


export default class TicketActionDoneModal extends React.Component{
    state = { visible: false }

    showModal = (item) => {
        this.setState({
            visible: true,
        });
    }

    handleCreate = (e) => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            //          console.log('Received values of form: ', values);
            this.props.ticketDone({...this.props.item,desc:values.desc});
            form.resetFields();
            this.setState({ visible: false });
        });
    }

    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    }

    saveFormRef = (formRef) => {
        this.formRef = formRef;
    }

    render(){
        return(
            <BasicModal
                title={this.props.item.title}
//                wrappedComponentRef={this.saveFormRef}
                visible={this.state.visible}
                onCancel={this.handleCancel}
                onCreate={this.handleCreate}
//                okText ='Done'
            />
        );
    }

}