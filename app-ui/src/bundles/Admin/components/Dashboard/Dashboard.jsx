// @flow
import React from 'react';
import { Panel } from 'react-bootstrap';
import { Form, Tabs } from 'antd';

import './Dashboard.scss';

export default () => (
  <Panel className="dashboard">
    <Panel.Body collapsible={false}>
      This can be adapted to fit your needs
    </Panel.Body>
  </Panel>
);
