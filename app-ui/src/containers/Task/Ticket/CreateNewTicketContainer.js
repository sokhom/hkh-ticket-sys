import { connect } from 'react-redux';
import { createNewTicket } from 'modules/list/TicketItemModule';
import TicketForm from 'components/Task/Ticket/TicketForm'

const actions = [
    {name:'Done',key:'done_ticket'},
    {name:'Open Ticket Detail',key:'open_ticket'},
    {name:'Assign To',key:'assign_ticket_to'}
]

const mapStateToProps = state =>{
    return ({
        item:{
            title: 'Ticket-00069-604',
            desc: 'Add new ticket',
            dueDate: new Date()
        }
    })
};

const mapDispatchToProps = dispatch => ({
  createNewTicket: (item) => {
       dispatch(createNewTicket({...item,actions:actions}));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketForm);