import React from 'react';
import { Tabs,Button } from 'antd';
import loadable from 'loadable-components';

const TabPane = Tabs.TabPane;
type Props = {
  children: Node,
};

export default(store,children:Props ) => {

    return class TabPanel extends React.Component {
        constructor(props) {
            super(props);
            const  TaskListContainer = loadable(() => import('containers/list/TaskListContainer').then(bandle => bandle.default(store)));
//          const task = <TabPane tab='Task List' key='newTab0' closable={false}><TaskListContainer onNewTabItem={this.onNewTabItem}/></TabPane>
            const panes = [{id:0, title:'Task List', content: <TaskListContainer onNewTabItem={this.onNewTabItem} /> , key: 'newTab0'}];
            this.state = {
                activeKey: 'newTab0',
                panes,
            };
        }

        onChange = (activeKey) => {
            this.setState({ activeKey });
        }

        onEdit = (targetKey, action) => {
            this[action](targetKey);
        }

        remove = (targetKey) => {
            let activeKey = this.state.activeKey;
            let lastIndex;
            this.state.panes.forEach((pane, i) => {
                if (pane.key === targetKey) {
                    lastIndex = i-1 ;
                }
            });
            const panes = this.state.panes.filter(pane => pane.key !== targetKey);
            if (lastIndex >= 0 && activeKey === targetKey) {
                activeKey = panes[lastIndex].key;
            }
            if(panes.length <= 0){
                activeKey='newTab0';
            }
            this.setState({ panes, activeKey });
        }

        onNewTabItem=(itemData)=>{
            const panes = this.state.panes;
            const tabIndex = itemData.id;
            const activeKey = `newTab${tabIndex}`;
            let isPane = false;
            this.state.panes.forEach((pane, i) => {
                if (pane.id === tabIndex) {
                    isPane = true;
                }
            });

            if(isPane){
                this.setState({ panes, activeKey });
            }else{
                const  Item = loadable(() => import('containers/list/TicketItemContainer'));
                panes.push({ id:itemData.id,title: itemData.title, content: <Item item={itemData}/>, key: activeKey });
                this.setState({ panes, activeKey });
            }
            console.log('panes',panes);
        }

        render() {

            return (
                <div>
                    <Tabs
                        hideAdd
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}
                        type="editable-card"
                        onEdit={this.onEdit}
                    >

                        {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>)}
                    </Tabs>
                </div>
            );
        }
   }
}