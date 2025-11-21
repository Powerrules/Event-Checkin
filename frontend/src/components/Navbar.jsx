import React from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Navbar(){
  const { user, logout } = React.useContext(AuthContext);
  return (
    <nav style={{ padding: 12, borderBottom:'1px solid #ddd', display:'flex', justifyContent:'space-between' }}>
      <div><Link to="/">EventCheck</Link></div>
      <div>
        {user ? (
          <>
            <span style={{ marginRight: 12 }}>{user.name}</span>
            <button onClick={logout}>Logout</button>
          </>
        ): (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register" style={{ marginLeft: 8 }}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
