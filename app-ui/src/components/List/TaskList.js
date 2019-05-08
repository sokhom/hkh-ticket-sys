import React, { PureComponent } from 'react';
import { List } from 'antd';
//import InfiniteScroll from 'react-infinite-scroller';
import Task from './Task';
import styles from './TaskList.less';

export default(store) => {
    return class TaskList extends React.PureComponent {
        render(){
            return(
                <div >

                        <List
                            className={styles.listInfiniteContainer}
                            header={<div>Header</div>}
                            footer={<div>Footer</div>}
                            bordered
                            dataSource={this.props.data}
                            renderItem={item => (<List.Item> {Task(store,item,this.props.onNewTabItem)} </List.Item>)}
                        />

                </div>
            );
        }
    }
}