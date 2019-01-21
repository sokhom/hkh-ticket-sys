import { connect } from 'react-redux';
import { ticketDone } from 'modules/list/TicketItemModule';
import TicketItem from 'components/List/TicketItem'




const mapStateToProps = state => ({
  status: false,
});


const mapDispatchToProps = dispatch => ({
  ticketDone: (status) => {
       console.log('mapDispatchToProps-ticketDone',this.getState());
       dispatch(ticketDone(status))
   }

});

export default connect(mapStateToProps, mapDispatchToProps)(TicketItem);