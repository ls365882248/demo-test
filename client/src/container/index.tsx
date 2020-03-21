import * as React from 'react';
import { Layout } from 'antd';
import AppContent from './content';
import AppHeader from './header';
import './index.scss';

const { Header, Footer } = Layout;

function Container() {
  return (
    <Layout className='app-body'>
      <Header className='app-header'>
        <AppHeader />
      </Header>
      <Layout className='app-content'>
        <AppContent />
      </Layout>
      <Footer className='app-footer'>Footer</Footer>
    </Layout>
  );
}

export default Container;
