import { connect } from 'react-redux';
import {ticketDone } from 'modules/list/TicketItemModule';
import TicketActionAssignToForm from 'components/Task/Ticket/Actions/TicketActionAssignToForm';


const mapStateToProps = state =>{
    console.log('mapStateToProps-TicketActionAssignToFormContainer',state);
    return ({...state})
};

const mapDispatchToProps = dispatch => ({
    ticketDone: (item) => {
        dispatch(ticketDone(item));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketActionAssignToForm);