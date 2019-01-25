import Item from './Item';
import { List,Menu, Dropdown, Button, Icon, message ,Modal,Form,Input} from 'antd';
import {RequireMessageFormModal} from './RequireMessageFormModal';

export default class TicketItem extends Item{

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
            console.log('Received values of form: ', values);
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

    //@@override
    menuDrop(){
        var {type}= this.props.item;
        return (
          <Menu onClick={()=>this.showModal(this.props.item)}>
            <Menu.Item key= {type} ><Icon type="user" /> Done </Menu.Item>
          </Menu>
        );
    }


    //@@override
    renderUI(){
        return(
            <div>
                 <p> {this.props.item.desc}</p>
                 <RequireMessageFormModal
                    title={this.props.item.title}
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                    okText ='Done'
                 />
            </div>
        );
    }

}


