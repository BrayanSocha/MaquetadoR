import React from 'react';
import Header from './Header';
import ContactFooter from './ContactFooter';

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ flexGrow: 1 }}>{children}</div>
      <ContactFooter />
    </div>
  );
};

export default Layout;