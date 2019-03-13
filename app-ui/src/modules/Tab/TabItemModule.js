import { combineReducers } from 'redux';
import tabReducer from 'modules/Tab/TabModule';
import ticketItemReducer from 'modules/list/TicketItemModule';
export default combineReducers({
  tabItems: tabReducer,
  ticketItem: ticketItemReducer
});
