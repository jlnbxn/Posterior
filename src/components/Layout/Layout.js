import React from 'react';
import GlobalStyles from '../../styles/GlobalStyles';
import 'antd/dist/antd.css';
import Footer from './Footer';
import Menu from '../Menu/Menu';

function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
