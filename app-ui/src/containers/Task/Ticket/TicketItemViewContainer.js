import { connect } from 'react-redux';
import {ticketDone } from 'modules/list/TicketItemModule';
import TicketItemView from 'components/List/TicketItemView';


const mapStateToProps = state =>{
//    console.log('mapStateToProps-TicketItemView',state);
    return ({...state})
};

const mapDispatchToProps = dispatch => ({
    ticketDone: (item) => {
        dispatch(ticketDone(item));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketItemView);