import Item from './Item';
import { List,Menu, Dropdown, Button, Icon, message ,Modal,Form,Input} from 'antd';
import {RequireMessageFormModal} from './RequireMessageFormModal';
import TicketItemViewContainer from 'containers/Task/Ticket/TicketItemViewContainer';
import TicketActionDoneModal from 'components/Task/Ticket/Actions/TicketActionDoneModal';
import TicketActionAssignToModal from 'components/Task/Ticket/Actions/TicketActionAssignToModal'

export default class TicketItem extends Item{



    handleDropDownMenu = (e) => {
        const {key} = e;
        switch (key){
            case 'done_ticket' :
                const {showModal} = this.formRef;
                showModal(this.props.item);
                break;
            case 'open_ticket' :
                this.props.openItemDetail('Ticket/TicketItemViewContainer');
                break;
            case 'assign_ticket_to' :
//                var {showModal} = this.formAssignToRef;
                this.formAssignToRef.showModal(this.props.item);
                break;
            default :
                console.log('handle not match.');
                break;
        }
    }

    //@@override
    menuDrop(){
        var { type,actions } = this.props.item;
        return (
          <Menu onClick={this.handleDropDownMenu}>
            {actions.map(act =>
                 <Menu.Item key= {act.key} ><Icon type="user" /> {act.name}</Menu.Item>
            )}
          </Menu>
        );
    }

    wrappedActionDoneModal = (formRef) => {
        this.formRef = formRef;
    }

    wrappedActionAssignToModal = (formAssignToRef) => {
            this.formAssignToRef = formAssignToRef;
    }
    //@@override
    renderUI(){
        return(
            <div>
                <p> {this.props.item.desc}</p>
                <TicketActionDoneModal item={this.props.item} wrappedComponentRef={this.wrappedActionDoneModal} ticketActionDone={this.props.ticketDone} />
                <TicketActionAssignToModal item={this.props.item} wrappedComponentRef={this.wrappedActionAssignToModal} ticketActionDone={this.props.ticketDone} />
            </div>
        );
    }

}


