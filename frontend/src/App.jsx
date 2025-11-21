import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CreateEvent from './pages/CreateEvent';
import EventsList from './pages/EventsList';
import EventDetails from './pages/EventDetails';
import Scanner from './pages/Scanner';
import ManualCheckin from './pages/ManualCheckin';

function PrivateRoute({ children }) {
  const { user } = React.useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/create" element={<PrivateRoute><CreateEvent /></PrivateRoute>} />
          <Route path="/events" element={<PrivateRoute><EventsList /></PrivateRoute>} />
          <Route path="/events/:id" element={<PrivateRoute><EventDetails /></PrivateRoute>} />
          <Route path="/scan" element={<Scanner />} />
          <Route path="/manual" element={<PrivateCheck><ManualCheckin /></PrivateCheck>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

function PrivateCheck({ children }) {
  // manual check can be public or protected; we'll keep it public for kiosks
  return children;
}
