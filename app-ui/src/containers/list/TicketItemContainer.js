import { connect } from 'react-redux';
import { ticketDone,viewTicket } from 'modules/list/TicketItemModule';
//import { updateTaskItem } from 'modules/list/TaskListModule';
import TicketItem from 'components/List/TicketItem'

const mapStateToProps = state =>{
//    console.log('mapStateToProps-TicketItemContainer',state);
    return ({
        isPadding: false
    })
};

const mapDispatchToProps = dispatch => ({
    ticketDone: (item) => {
        dispatch(ticketDone(item));
    },
    viewTicket: (item) => {
        dispatch(viewTicket(item));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketItem);