// @flow
import { combineReducers } from 'redux';
import { createAction, handleActions } from 'redux-actions';
import { formReducer, modelReducer } from 'react-redux-form';

export const initialState = {
        isPending: false,
        activeKey: 'newTab0',
        itemTabs: []
};

export const openItemTab = createAction('OPEN_ITEM_TAB');
export const removeItemTab = createAction('REMOVE_ITEM_TAB');
export const onClickItemTab = createAction('ON_CLICK_ITEM_TAB');


export default handleActions({
        [openItemTab]: (state,action)=>{
            console.log('openItemTab',action.payload);
            const {itemData,content} = action.payload
            const tabIndex = itemData.id;
            const activeKey = `newTab${tabIndex}`;
            let isPane = false;
            state.itemTabs.forEach((pane, i) => {
                if (pane.id === tabIndex) {
                    isPane = true;
                }
            });
            if(isPane){
                 return {...state,activeKey:activeKey}
            }else{
                 return {...state,itemTabs:[...state.itemTabs,{ id:itemData.id,title: itemData.title, content: content, key: activeKey }]}
            }
        },
        [onClickItemTab]: (state,action) =>{

                 console.log('tab.activeKey onClickItemTab:',action.payload     );
             const {activeKey} = action.payload
             return {...state,activeKey:activeKey}
        },
        [removeItemTab]:(state,action) =>{
             const {targetKey} = action.payload;
            let activeKey = state.activeKey;
            let lastIndex;
            state.itemTabs.forEach((pane, i) => {
                if (pane.key === targetKey) {
                    lastIndex = i-1 ;
                }
            });

            const panes = state.itemTabs.filter(pane => pane.key !== targetKey);
            if (lastIndex >= 0 && activeKey === targetKey ) {
                activeKey = panes[lastIndex].key;
            }else if(activeKey === targetKey){
                if(panes.length >0){
                     activeKey = panes[lastIndex+1].key;
                }else{
                    activeKey='newTab0';
                }
            }
            return {...state,itemTabs:panes,activeKey:activeKey}
        }
    }, initialState);