import React from 'react';

const ContactFooter = () => {
  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #ccc' }}>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div>
        <h3>CONTACT</h3>
        <p>Ubicación</p>
        <p>Email</p>
        <p>Teléfono</p>
      </div>
    </div>
  );
};

export default ContactFooter;