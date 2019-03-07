import React from 'react';
import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Select,
  Icon,
  Button,
  Dropdown,
  Menu,
  InputNumber,
  DatePicker,
  Modal,
  message,
  Badge,
  Divider,
  Steps,
  Radio,
  Tabs,
  Cascader
} from 'antd';
import loadable from 'loadable-components';
import  {getItem} from'components/List/ItemTaskCompo'
//import TicketItemViewContainer from 'containers/Task/Ticket/TicketItemViewContainer';
import NewTask from 'components/Task/NewTask'
import styles from './TabPanel.less';
const TabPane = Tabs.TabPane;

type Props = {
  children: Node,
};

export default(store,children:Props ) => {

    return class TabPanel extends React.Component {
        constructor(props) {
            super(props);
            const panes = [];
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
            if (lastIndex >= 0 && activeKey === targetKey ) {
                activeKey = panes[lastIndex].key;
            }else if(activeKey === targetKey){
                if(panes.length >0){
                     activeKey = panes[lastIndex+1].key;
                }else{
                    activeKey='newTab0';
                }
            }
            this.setState({ panes, activeKey });
        }

        onNewTabItem=(itemData,itemComponent)=>{
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
//              const  Item = getItem('ticketView');
//              const TicketItemViewContainer = loadable(() => import('containers/Task/Ticket/TicketItemViewContainer'));
//              panes.push({ id:itemData.id,title: itemData.title, content: <Item item={itemData}/>, key: activeKey });
                this.setState({ panes, activeKey });
                panes.push({ id:itemData.id,title: itemData.title, content: itemComponent, key: activeKey });

            }
        }

        render() {
            const   TaskListContainer = loadable(() => import('containers/list/TaskListContainer').then(bandle => bandle.default(store)));
            return (
                <div>
                    <Row type="flex" justify="end">
                        <Col md={16} sm={24} >
                            <div  className={styles.panelRight}>
                                <NewTask />
                            </div>
                        </Col>
                    </Row>
                    <Row ype="flex" justify="space-between">
                        <Col md={24} sm={16}>
                            <Tabs
                                hideAdd
                                onChange={this.onChange}
                                activeKey={this.state.activeKey}
                                type="editable-card"
                                onEdit={this.onEdit}
                            >
                                <TabPane tab='Task List' key='newTab0' closable={false}><TaskListContainer onNewTabItem={this.onNewTabItem}/></TabPane>
                                {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>)}
                            </Tabs>
                        </Col>
                    </Row>
                </div>
            );
        }
    }
}