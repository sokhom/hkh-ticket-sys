
import React, { PureComponent } from 'react';
import { Menu, Icon, Spin, Tag, Dropdown, Avatar, Divider, Tooltip } from 'antd';
import Debounce from 'lodash-decorators/debounce';
import HeaderSearch from '../HeaderSearch';

import styles from './index.less';


 export default class GlobalHeader extends PureComponent<Props> {
  handleMenuClick = ({ key }) => {
         const { onSignOut } = this.props;
         if (key === 'triggerError') {
//           dispatch(routerRedux.push('/exception/trigger'));
           return;
         }
         if (key === 'logout') {
            onSignOut();
         }
       };

   toggle = () => {
       const { collapsed, onCollapse } = this.props;
       onCollapse(!collapsed);
//       this.triggerResizeEvent();
     };
  /* eslint-disable*/
//   @Debounce(600)
   triggerResizeEvent() {
     const event = document.createEvent('HTMLEvents');
     event.initEvent('resize', true, false);
     window.dispatchEvent(event);
   }

    render() {
         const {
////              currentUser = {},
              collapsed,
//    //          fetchingNotices,
//    //          isMobile,
                    logo,
//    //          onNoticeVisibleChange,
////              onMenuClick
//    //          onNoticeClear,
                 userName
            } = this.props;

        const menu = (
              <Menu className={styles.menu} selectedKeys={[]} onClick={this.handleMenuClick}>
                <Menu.Item disabled>
                  <Icon type="user" />User
                </Menu.Item>
                <Menu.Item disabled>
                  <Icon type="setting" />Setting
                </Menu.Item>
                <Menu.Item key="triggerError">
                  <Icon type="close-circle" />Close Circle
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="logout">
                  <Icon type="logout" />Log out
                </Menu.Item>
              </Menu>
            );
        return (

        <div className={styles.header}>
            <Icon
                className={styles.trigger}
                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
            />
            <div className={styles.right}>
                  <HeaderSearch
                    className={`${styles.action} ${styles.search}`}
                    placeholder="站内搜索"
                    dataSource={['搜索提示一', '搜索提示二', '搜索提示三']}
                    onSearch={value => {
                      console.log('input', value); // eslint-disable-line
                    }}
                    onPressEnter={value => {
                      console.log('enter', value); // eslint-disable-line
                    }}
                  />



                <Dropdown overlay={menu}>
                 <span className={`${styles.action} ${styles.account}`}>
                    <Avatar size="small" className="avatar" src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"/>
                   <span className={styles.name}>{userName}</span>
                 </span>
                </Dropdown>
            </div>
        </div>
    );
    }
}


