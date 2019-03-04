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
import BasicModal from 'components/common/BasicModal'
import CreateNewTicketContainer from 'containers/Task/Ticket/CreateNewTicketContainer'

const FormItem = Form.Item;

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
//        console.log('form.getFieldsValue()  ',getFieldsValue() );
        const { form: { validateFields } } = this.props;
        validateFields((err, values) => {
             if (!err) {
                this.setState({ visible: true});
            }
        });
    }

    handleOk = () => {
        const { form: { validateFields,getFieldsValue,resetFields},createNewTicket } = this.formRef.props;
        validateFields((err, values) => {
            if (!err) {
//                 console.log('getValueProps',getFieldsValue()    );
                createNewTicket(getFieldsValue());
                resetFields();
                this.setState({ visible: false});
            }
        });
    }

    handleCancel = () =>{
        this.setState({ visible: false});
    }

    saveFormRef = (formRef) => {
        this.formRef = formRef;
    }


    render() {
        const { form } = this.props;
        const { visible, loading,itemType } = this.state;

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
                <BasicModal
                    title = {'Create Item: ('+ itemType +')'}
                    visible={visible}
                    handleOk={this.handleOk}
                    handleCancel={this.handleCancel}
                >
                    <CreateNewTicketContainer  wrappedComponentRef={this.saveFormRef} />
                </BasicModal>

                <Form layout="inline" >
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
export default Form.create()(CreateNewTask);
