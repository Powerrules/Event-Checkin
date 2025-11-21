import React from 'react';

export default function Modal({children, onClose}) {
  return (
    <div style={{position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{background: '#fff', padding: '1rem', borderRadius: 6, minWidth: 320}}>
        <div style={{textAlign: 'right'}}>
          <button onClick={onClose}>Close</button>
        </div>
        {children}
      </div>
    </div>
  );
}
