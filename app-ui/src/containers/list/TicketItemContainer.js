import { connect } from 'react-redux';
import { ticketDone } from 'modules/list/TicketItemModule';
import TicketItem from 'components/List/TicketItem'

const mapStateToProps = state =>{
//    console.log('mapStateToProps',state);
    return ({
      status: state.ticketItem.status
    })
} ;

const mapDispatchToProps = dispatch => ({
  ticketDone: (status) => {
//       console.log('mapDispatchToProps-ticketDone',status);
       dispatch(ticketDone(!status))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketItem);