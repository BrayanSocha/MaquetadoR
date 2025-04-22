import React from 'react';

const HomePageContent = () => {
  return (
    <div style={{ padding: '20px' }}>
      {/* Hero Section */}
      <div style={{ marginBottom: '20px' }}> {/* Añadí un borde temporal para visualizar el contenedor */}
      <img src="https://st1.uvnimg.com/dims4/default/798bf22/2147483647/thumbnail/1024x576/quality/75/?url=https%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fassets%2Fvixes%2Fimj%2Fnuestrorumbo%2F7%2F7-lugares-donde-la-naturaleza-nos-sorprende-1.jpg" alt="Hero" style={{ width: '100%', objectFit: 'contain' }} />
      </div>

      {/* Featured Sections */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '20px' }}>
  {/* Featured 1 */}
  <div style={{ border: '1px solid #ccc' }}>
    <div>
        <img
          src=""
          style={{ width: '100%', display: 'block' }}
        />
        </div>
          <div>Título 1</div>
          <p>Descripción breve 1...</p>
        </div>
        <div style={{ border: '1px solid #ccc' }}>
      
        <img
          src="" 
          style={{ width: '100%', display: 'block' }}
        />
        <div>Título 2</div>
          <p>Descripción breve 2...</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '10px' }}>
          <img src="" alt="Featured 3" style={{ width: '100%', maxHeight: '150px', objectFit: 'cover' }} />
          <div>Título 3</div>
          <p>Descripción breve 3...</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '10px' }}>
          <img src="" alt="Featured 4" style={{ width: '100%', maxHeight: '150px', objectFit: 'cover' }} />
          <div>Título 4</div>
          <p>Descripción breve 4...</p>
        </div>
      </div>

      {/* Products Section */}
      <div style={{ marginBottom: '20px' }}>
        <h2>PRODUCTS</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
          <div style={{ border: '1px solid #ccc', padding: '10px' }}>
            <img src="URL_DE_TU_IMAGEN_PRODUCTO_1" alt="Product 1" style={{ width: '100%', maxHeight: '150px', objectFit: 'cover' }} />
          </div>
          <div style={{ border: '1px solid #ccc', padding: '10px' }}>
            <img src="URL_DE_TU_IMAGEN_PRODUCTO_2" alt="Product 2" style={{ width: '100%', maxHeight: '150px', objectFit: 'cover' }} />
          </div>
          <div style={{ border: '1px solid #ccc', padding: '10px' }}>
            <img src="URL_DE_TU_IMAGEN_PRODUCTO_3" alt="Product 3" style={{ width: '100%', maxHeight: '150px', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageContent;