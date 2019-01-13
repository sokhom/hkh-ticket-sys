
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Layout, Icon, message } from 'antd';
import { Switch, Route,Redirect,BrowserRouter as Router } from 'react-router-dom';
import CoreLayout from 'components/CoreLayout';
import AuthenticatedContainer from 'containers/Header/AuthenticatedContainer';

const { Content, Header, Footer } = Layout;

class MainLayout extends React.PureComponent {
    componentWillUnmount() {
    //        unenquireScreen(this.enquireHandler);
    }

    render() {
        return(
            <Layout>
               <Header style={{ padding: 0 }}>
                    <AuthenticatedContainer/>
               </Header>
                <Content style={{ margin: '24px 24px 0', height: '100%' }}>
                    <Router>
                     <Switch>
                      <Redirect exact from="/" to="/admin1/applications" />
                      <Redirect exact from="/list" to="/list/applications" />
                       <Route exact path="/list/applications" render={() => <h3>Please select a topic11.</h3>}/>
                      <Route exact path="/admin1/applications" render={() => <h3>Please select a topic.</h3>}/>
                     </Switch>
                    </Router>
                </Content>
           </Layout>
        );
    }

}
export default() => MainLayout;