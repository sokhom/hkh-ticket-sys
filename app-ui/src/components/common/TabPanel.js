import React from 'react';
import { Tabs,Button } from 'antd';
import loadable from 'loadable-components';

const TabPane = Tabs.TabPane;

export default class TabPanel extends React.Component {
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        const panes = [
          { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1' },
          { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' },
        ];
        this.state = {
          activeKey: panes[0].key,
          panes,
        };
      }

      onChange = (activeKey) => {
        this.setState({ activeKey });
      }

      onEdit = (targetKey, action) => {
        this[action](targetKey);
      }

      add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
         const  Item = loadable(() => import('containers/list/TicketItemContainer'));

         const itemData={id:1,title:'Racing car',desc:'Racing car sprays burning fuel into crowd.',type:'ticket'};
        panes.push({ title: itemData.title, content: <Item item={itemData}/>, key: activeKey });
        this.setState({ panes, activeKey });
      }

      remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
          activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
      }

      render() {
        return (
          <div>
            <div style={{ marginBottom: 16 }}>
              <Button onClick={this.add}>ADD</Button>
            </div>
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