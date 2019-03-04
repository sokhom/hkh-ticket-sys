import { connect } from 'react-redux';
import { createNewTicket } from 'modules/list/TicketItemModule';
import CreateNewTicket from 'components/Task/Ticket/CreateNewTicket'

const mapStateToProps = state =>{
//    console.log('mapStateToProps-TicketItemContainer',state);
    return ({
        item:{
            subject: 'Ticket-00012',
            description: '',
            dueDate: new Date()
        }
    })
} ;

const mapDispatchToProps = dispatch => ({
  createNewTicket: (item) => {
//       console.log('mapDispatchToProps-CreateNewTicket',item);
//       dispatch(ticketDone(item))
       dispatch(createNewTicket(item));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewTicket);