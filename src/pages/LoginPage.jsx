import React from 'react';
import Layout from '../components/Layout';

const LoginPage = () => {
  return (
    <Layout>
      <div style={{ padding: '20px', maxWidth: '400px', margin: '20px auto', border: '1px solid #ccc', borderRadius: '5px' }}>
        <h2>Login</h2>
        <form>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Usuario:</label>
            <input type="text" style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Contraseña:</label>
            <input type="password" style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
          </div>
          <button type="submit" style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Iniciar Sesión
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default LoginPage;