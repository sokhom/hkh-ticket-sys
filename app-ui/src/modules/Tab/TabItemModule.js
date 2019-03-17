import { combineReducers } from 'redux';
import tabReducer from 'modules/Tab/TabModule';
export default combineReducers({
  tabItems: tabReducer
});
