import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>COMPANY NAME HERE</div>
      <div>
        <Link to="/" style={{ marginRight: '20px', textDecoration: 'none', color: 'black' }}>Home</Link>
        <Link to="/login" style={{ marginRight: '20px', textDecoration: 'none', color: 'blue' }}>Login</Link>
        <Link to="/register" style={{ textDecoration: 'none', color: 'green' }}>Registro</Link>
      </div>
    </div>
  );
};

export default Header;