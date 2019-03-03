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
import AddNewTicketItem from 'components/List/AddNewTicketItem'
import TicketItemView from 'components/List/TicketItemView'
import NewTask from 'components/Task/NewTask'
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
//              const  Item = getItem('ticketView'); //loadable(() => import('containers/list/TicketItemContainer'));
//              panes.push({ id:itemData.id,title: itemData.title, content: <Item item={itemData}/>, key: activeKey });
                this.setState({ panes, activeKey });
                panes.push({ id:itemData.id,title: itemData.title, content: <TicketItemView />, key: activeKey });
            }

        }

        render() {

            const  TaskListContainer = loadable(() => import('containers/list/TaskListContainer').then(bandle => bandle.default(store)));
            return (
                <div>
                    <Row type="flex" justify="end">
                        <Col md={16} sm={24} >
                            <NewTaskPane/>
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


class CreateNewTask extends React.Component {


    constructor(props) {
        super(props);
         this.state = {
                    loading: false,
                    visible: false,
                    itemType: ''
                }
    }

    onChange =(value, selectedOptions) => {
        this.setItemType(this.getTitle(selectedOptions));


        this.onOpenModal();
    }
    setItemType = (itemType) =>{
        this.setState({ itemType: itemType});
    }
    getTitle=(selectedOptions)=>  {
        var title = '';
        selectedOptions.some(v => {
            var itemType = v.label;
            if(title !==''){
                itemType = ' / ' +  itemType;
            }
            title = title + itemType;
        });
        return title;
    }
    filter = (inputValue, path) =>   {
        return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
    }
    onOpenModal = () =>{
        const { getFieldsValue } = this.props.form;
        console.log('form.getFieldsValue()  ',getFieldsValue() );
        const { form: { validateFields } } = this.props;
        validateFields((err, values) => {

            console.log('onOpenModal err',err);
             if (!err) {
                this.setState({ visible: true});
            }
        });
    }

    handleOk = () => {
        const { form: { validateFields },form } = this.formRef.props;
        validateFields((err, values) => {
            if (!err) {
                form.resetFields();
                this.setState({ visible: false});
            }
        });
    }

    handleCancel = () =>{
        this.setState({ visible: false});
    }

    saveFormRef = (formRef) => {
        this.formRef = formRef;
        console.log('formRef',formRef);
    }


    render() {
        const { form } = this.props;
        const { visible, loading,itemType } = this.state;

        console.log('AddNewTicketItem form ',form);
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
            }, {
                     value: 'ticket',
                     label: 'Ticket',
                     children: [{
                         value: 'a',
                         label: 'A',
                         children: [{
                             value: 'a0',
                             label: 'A-0000001',
                         }],
                     }],
                 }];

        return (
            <div>
                <NewTask
                    title = {'Create Item: ('+ itemType +')'}
                    visible={visible}
                    handleOk={this.handleOk}
                    handleCancel={this.handleCancel}
                >
                    <AddNewTicketItem  wrappedComponentRef={this.saveFormRef} />
                </NewTask>

                <Form layout="inline" className={styles.panelRight}>
                    <FormItem label="" >
                        {form.getFieldDecorator('itemType',{
                            rules: [{ required: true, message: 'Please select item type!',
//                                    validator:(rule, value, callback) =>{
//                                              // Some async check
//                                              callback();
//                                           }
                                },

                            ],
                        })(
                            <Cascader
                                style={{ width: '100%' }}
                                options={options}

                                onChange={this.onChange.bind(this)}
                                placeholder="itemType"
                                showSearch={{filter:this.filter}}


                            />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" onClick={this.onOpenModal} >
                            Create
                        </Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}
export const NewTaskPane = Form.create()(CreateNewTask);


//class ModalNewTask extends React.Component {
//    render() {
//        const { title,visible,handleOk,handleCancel,children} = this.props;
//        return (
//          <div>
//            <BasicModal
//              visible={visible}
//              title={title}
//              handleOk={handleOk}
//              handleCancel={handleCancel}
//            >
//              {children}
//            </BasicModal>
//          </div>
//        );
//    }
//
//}


