import Item from './Item';
import { List,Menu, Dropdown, Button, Icon, message ,Modal,Form,Input} from 'antd';
import {RequireMessageFormModal} from './RequireMessageFormModal';
import TicketItemViewContainer from 'containers/Task/Ticket/TicketItemViewContainer';

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

    handleDropDownMenu = (e) => {
        const {key} = e;
        switch (key){
            case 'done_ticket' :
                this.showModal(this.props.item);
                break;
            case 'open_ticket' :
//                this.props.viewTicket(this.props.item);
                this.props.openItemDetail(<TicketItemViewContainer />, this.props.viewTicket);
                break;
            default :
                console.log('handle not match.');
                break;
        }
    }

    //@@override
    menuDrop(){
        var { type } = this.props.item;
//        console.log('TicketItem props:',this.props);
        return (
          <Menu onClick={this.handleDropDownMenu}>
            <Menu.Item key= 'open_ticket' ><Icon type="user" /> Open Ticket</Menu.Item>
            <Menu.Item key= 'done_ticket' ><Icon type="user" /> Done </Menu.Item>
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


