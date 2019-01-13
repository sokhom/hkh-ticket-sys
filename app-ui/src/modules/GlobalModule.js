// @flow
import { createAction, handleActions } from 'redux-actions';

export const initialState = {
  collapsed: false
};

export const changeLayoutCollapsed = createAction('CHANGE_LAYOUT_COLLAPSED');


export default handleActions({
  [changeLayoutCollapsed]: (state,action) => ({ ...state, collapsed: action.payload })
}, initialState);