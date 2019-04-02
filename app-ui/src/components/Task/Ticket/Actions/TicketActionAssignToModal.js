import React, { Component } from 'react';
import BasicModal from 'components/common/BasicModal';
import TicketActionAssignToFormContainer from 'containers/Task/Ticket/Actions/TicketActionAssignToFormContainer'


export default class TicketActionAssignToModal extends React.Component{
    state = { visible: false }

    showModal1 = (item) => {
        this.setState({
            visible: true,
        });
    }

    handleCreate = () => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            //          console.log('Received values of form: ', values);
            this.props.ticketActionDone({item:{...this.props.item,desc:values.desc}});
            form.resetFields();
            this.setState({ visible: false });
        });
    }

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    }

    saveFormRef = (formRef) => {
        this.formRef = formRef;
    }

    componentWillMount() {
         const {wrappedComponentRef} = this.props
         wrappedComponentRef( {showModal:this.showModal1} );
    }


    render(){

        return(
            <BasicModal
                title={this.props.item.title}
                visible={this.state.visible}
                handleCancel={this.handleCancel}
                handleOk={this.handleCreate}
                okText ='Ok'
            >
                <TicketActionAssignToFormContainer  wrappedComponentRef={this.saveFormRef}/>
            </BasicModal>
        );
    }

}