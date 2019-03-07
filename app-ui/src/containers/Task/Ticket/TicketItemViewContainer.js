import { connect } from 'react-redux';
import { createNewTicket } from 'modules/list/TicketItemModule';
import TicketItemView from 'components/List/TicketItemView'

const mapStateToProps = state =>{
    console.log('mapStateToProps-TicketItemView',state);
    return ({
        item: state.ticketItem.item
    })
} ;

const mapDispatchToProps = dispatch => ({
    openTicket: (item) => {
        //  console.log('mapDispatchToProps-CreateNewTicket',item);
        //  dispatch(ticketDone(item))
        dispatch(createNewTicket(item));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketItemView);