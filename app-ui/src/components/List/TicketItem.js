import Item from './Item';
import { List,Menu, Dropdown, Button, Icon, message ,Modal,Form,Input} from 'antd';

import {CollectionCreateForm} from './CollectionCreateForm';


export default class TicketItem extends Item{


    state = { visible: false }

      showModal = (item) => {
        this.setState({
          visible: true,
        });

      }

      handleCreate = (e) => {
        this.setState({
                  visible: false,
                });
      }

      handleCancel = (e) => {
        this.setState({
          visible: false,
        });
      }

    menuDrop(){
        var {type}= this.props.item;
        return (

          <Menu onClick={()=>this.showModal(this.props.item)}>
            <Menu.Item key= {type} ><Icon type="user" /> Done </Menu.Item>
          </Menu>


        );
    }

    renderUI(){

            return(
            <div>
            <p> {this.props.item.desc}</p>
             <div>{this.state.visible}</div>
             <CollectionCreateForm visible={this.state.visible}
                                             onCancel={this.handleCancel}
                                             onCreate={this.handleCreate}/>
            </div>
            );
        }

}


