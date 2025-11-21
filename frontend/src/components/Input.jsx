import React from 'react';

export default function Input({ label, ...props }) {
  return (
    <label style={{ display:'block', marginBottom: 8 }}>
      {label && <div style={{ marginBottom: 4 }}>{label}</div>}
      <input {...props} style={{ padding:8, width:'100%', boxSizing:'border-box' }} />
    </label>
  );
}
