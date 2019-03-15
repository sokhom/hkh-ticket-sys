import { connect } from 'react-redux';
import { createNewTicket,viewTicket,ticketDone } from 'modules/list/TicketItemModule';
import TicketItemView from 'components/List/TicketItemView'

const mapStateToProps = state =>{
//    console.log('mapStateToProps-TicketItemView',state);
    return ({
        item1: state.ticketItem.item
    })
} ;

const mapDispatchToProps = dispatch => ({
//    openTicket: (item) => {
////          console.log('mapDispatchToProps-CreateNewTicket',item);
//        //  dispatch(ticketDone(item))
//        dispatch(createNewTicket(item));
//    }
ticketDone: (item) => {
        dispatch(ticketDone(item));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketItemView);