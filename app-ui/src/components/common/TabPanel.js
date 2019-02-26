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
import TicketItemView from 'components/List/TicketItemView'

import styles from './TabPanel.less';
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;


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
//                const  Item = getItem('ticketView'); //loadable(() => import('containers/list/TicketItemContainer'));
//              panes.push({ id:itemData.id,title: itemData.title, content: <Item item={itemData}/>, key: activeKey });
                this.setState({ panes, activeKey });
                panes.push({ id:itemData.id,title: itemData.title, content: <TicketItemView />, key: activeKey });
            }
            console.log('panes',panes);
        }

        render() {

            const  TaskListContainer = loadable(() => import('containers/list/TaskListContainer').then(bandle => bandle.default(store)));
            return (
                <div>
                    <Row type="flex" justify="end">
                        <Col md={8} sm={24} >
                            <NewTask/>
                        </Col>
                    </Row>
                    <Row ype="flex" justify="space-between">
                        <Col md={24} sm={8}>
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


class CreateNewTask extends React.Component {

    constructor(props) {
        super(props);
    }
    onChange(value, selectedOptions)  {
        console.log(value, selectedOptions);
    }
    filter(inputValue, path)    {
        return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
    }
    render() {
        const { form } = this.props;
        const options = [{
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [{
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [{
                    value: 'xihu',
                    label: 'West Lake',
                    }, {
                    value: 'xiasha',
                    label: 'Xia Sha',
                    disabled: true,
                }],
            }],
            }, {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [{
                value: 'nanjing',
                label: 'Nanjing',
                children: [{
                    value: 'zhonghuamen',
                    label: 'Zhong Hua men',
                }],
            }],
        }];

        return (
            <div>
                <ModalNewTask />
                <Form layout="inline" className={styles.panelRight}>
                    <FormItem label="" >
                        {form.getFieldDecorator('status')(
                            <Cascader
                                style={{ width: '100%' }}
                                options={options}
                                onChange={this.onChange}
                                placeholder="Please select item type"
                                showSearch={{filter:this.filter}}
                            />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit">
                            Create
                        </Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

export const NewTask = Form.create()(CreateNewTask);



class ModalNewTask extends React.Component {
  state = {
    loading: false,
    visible: false,
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal with customized footer
        </Button>
        <Modal
          visible={visible}
          title="Title"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>Return</Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              Submit
            </Button>,
          ]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}


