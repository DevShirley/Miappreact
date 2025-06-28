import React from 'react';

function Cart({ items, onRemoveItem }) {
  // Agrupar productos por ID
  const groupedItems = items.reduce((acc, item) => {
    const found = acc.find(i => i.id === item.id);
    if (found) {
      found.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  const total = groupedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      padding: '2rem 1rem',
      borderTop: '1px solid #ccc',
      marginTop: '2rem',
      background: '#fff'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '500px',
        textAlign: 'center'
      }}>
        <h2>🛒 Carrito</h2>

        {groupedItems.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          <>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {groupedItems.map((item, index) => (
                <li key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  marginBottom: '1rem',
                  background: '#f3f3f3',
                  borderRadius: '8px',
                  padding: '0.5rem 1rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textAlign: 'left' }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: '40px', height: '40px', objectFit: 'contain', borderRadius: '4px' }}
                    />
                    <div>
                      <div style={{ fontWeight: 'bold' }}>
                        {item.name} {item.quantity > 1 && `(x${item.quantity})`}
                      </div>
                      <div style={{ fontSize: '0.85rem', color: '#333' }}>${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemoveItem(items.findIndex(i => i.id === item.id))}
                    style={{
                      background: '#f44336',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      padding: '0.3rem 0.6rem'
                    }}
                  >❌</button>
                </li>
              ))}
            </ul>
            <h4 style={{ marginTop: '1rem' }}>Total: ${total.toFixed(2)}</h4>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
