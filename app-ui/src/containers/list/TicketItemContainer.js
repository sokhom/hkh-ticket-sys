import { connect } from 'react-redux';
import { ticketDone } from 'modules/list/TicketItemModule';
import { updateTaskItem } from 'modules/list/TaskListModule';
import TicketItem from 'components/List/TicketItem'

const mapStateToProps = state =>{
//    console.log('mapStateToProps-TicketItemContainer',state);
    return ({
      type: state.ticketItem.type
    })
} ;

const mapDispatchToProps = dispatch => ({
  ticketDone: (item) => {
       console.log('mapDispatchToProps-ticketDone',item);
//       dispatch(ticketDone(item))
       dispatch(updateTaskItem(item));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketItem);