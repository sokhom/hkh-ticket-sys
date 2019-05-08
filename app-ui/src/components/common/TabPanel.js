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

//import  {getItem} from'components/List/ItemTaskCompo'
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
            this.props.onClickItemTab({activeKey});
        }

        onEdit = (targetKey, action) => {
            this[action](targetKey);
        }

        remove = (targetKey) => {
            this.props.removeItemTab({targetKey});
        }

        onNewTabItem=(itemData,itemComponent)=>{
            this.props.openItemTab({itemData:itemData,content:itemComponent});
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
                                activeKey={this.props.activeKey}
                                type="editable-card"
                                onEdit={this.onEdit}
                            >
                                <TabPane tab='Task List' key='newTab0' closable={false}><TaskListContainer onNewTabItem={this.onNewTabItem}/></TabPane>
                                {this.props.itemTabs.map(pane =>{
                                       const path = pane.content;
                                       const ITemContainer =  loadable(() => import(`containers/Task/${path}`));
                                      return  <TabPane tab={pane.title} key={pane.key}><ITemContainer item={pane.itemDetail} /></TabPane>
                                    })
                                }
                            </Tabs>
                        </Col>
                    </Row>
                </div>
            );
        }
    }
}