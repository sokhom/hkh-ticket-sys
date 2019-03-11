import { connect } from 'react-redux';
import { openItemTab,onClickItemTab,removeItemTab } from 'modules/Tab/TabModule';
import TabPanel from 'components/common/TabPanel'

const mapStateToProps = state =>{
//    console.log('mapStateToProps', state);
//    console.log('mapStateToProps11', state);
    return ({
      itemTabs: state.tab.itemTabs,
      activeKey: state.tab.activeKey
    })
};

const mapDispatchToProps = dispatch => ({
    openItemTab: (itemData) => {
    //       console.log('mapDispatchToProps-openTask',ticketDone);
        dispatch(openItemTab(itemData));
    },
    onClickItemTab: (activeKey) => {
         dispatch(onClickItemTab(activeKey));
    },
    removeItemTab: (targetKey) => {
         dispatch(removeItemTab(targetKey));
    }
});

export default(store,children) => connect(mapStateToProps, mapDispatchToProps)(TabPanel(store,children));