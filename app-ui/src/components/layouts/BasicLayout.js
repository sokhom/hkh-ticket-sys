import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Layout, Icon, message } from 'antd';
import DocumentTitle from 'react-document-title';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import logo from '../../assets/logo.png';
import MenuContainer from '../../containers/Sider/MenuContainer';
import GlobalHeader from '../globalHeader';
import { getMenuData } from '../../common/menu';
import { NotFoundRoute } from '../NotFound';
import { Switch, Route,Redirect,BrowserRouter as Router } from 'react-router-dom';
import AuthenticatedContainer from '../../containers/Header/AuthenticatedContainer';

const { Content, Header, Footer } = Layout;
/**
 * 根据菜单取得重定向地址.
 */
const redirectData = [];
const getRedirect = item => {
  if (item && item.children) {
    if (item.children[0] && item.children[0].path) {
      redirectData.push({
        from: `${item.path}`,
        to: `${item.children[0].path}`,
      });
      item.children.forEach(children => {
        getRedirect(children);
      });

    }
     console.log('redirectData',redirectData   );
  }
};
getMenuData().forEach(getRedirect);
 //console.log('redirectData',redirectData);
const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
    maxWidth: 1599,
  },
  'screen-xxl': {
    minWidth: 1600,
  },
};

export default class BasicLayout extends React.PureComponent {
    componentWillUnmount() {
//            unenquireScreen(this.enquireHandler);
    }

    getPageTitle() {
        return "ant-d";
    }

    handleMenuCollapse = collapsed => {
        const { dispatch } = this.props;
        dispatch({
          type: 'global/changeLayoutCollapsed',
          payload: collapsed,
        });
    };

    render() {
        const {
            currentUser,
            collapsed,
        //          fetchingNotices,
        //          notices,
                  routerData,
        //          match,
            location,
        } = this.props;
        const layout = (
          <Layout>
           <MenuContainer
              logo={logo}
              Authorized={Authorized}
              menuData={getMenuData()}
//              collapsed={collapsed}
              location={location}
//             isMobile={mb}
//            onCollapse={this.handleMenuCollapse}
            />
            <Layout>
               <Header style={{ padding: 0 }}>
                    <AuthenticatedContainer/>
                </Header>
                <Content style={{ margin: '24px 24px 0', height: '100%' }}>
                 <Switch>



                 </Switch>

                </Content>
            </Layout>
          </Layout>
        );
        return (
         /*
         <DocumentTitle title={this.getPageTitle()}>
            <ContainerQuery query={query}>
              {params => <div className={classNames(params)}>{layout}</div>}
            </ContainerQuery>
         </DocumentTitle>

         */

          <div className="not-found-container">
                <p className="code">
                  404
                </p>
                <p>
                  <Trans>
                    The Page you are looking for could not be found!
                  </Trans>
                </p>

              </div>


        );
    }
}

//export default() => BasicLayout;
