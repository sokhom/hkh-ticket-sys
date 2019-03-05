import { connect } from 'react-redux';
import { createNewTicket } from 'modules/list/TicketItemModule';
import TicketItemView from 'components/List/TicketItemView'

const mapStateToProps = state =>{
    console.log('mapStateToProps-TicketItemView',state);
    return ({
        item:{
            subject: 'Ticket-00012',
            title: 'tere',
            description: '',
            dueDate: new Date()
        }
    })
} ;

const mapDispatchToProps = dispatch => ({
    createNewTicket: (item) => {
        //  console.log('mapDispatchToProps-CreateNewTicket',item);
        //  dispatch(ticketDone(item))
        dispatch(createNewTicket(item));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketItemView);