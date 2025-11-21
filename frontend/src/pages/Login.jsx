import React, { useState, useContext } from 'react';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Input from '../components/Input';
import Button from '../components/Button';
import Navbar from '../components/Navbar';

export default function Login(){
  const [form, setForm] = useState({ email:'', password:'' });
  const { setAuth } = useContext(AuthContext);
  const nav = useNavigate();

  async function submit(e){
    e.preventDefault();
    try {
      const { data } = await api.post('/auth/login', form);
      setAuth(data.token, data.user);
      nav('/');
    } catch(err) {
      alert(err.response?.data?.message || 'Error');
    }
  }

  return (<div>
    <Navbar />
    <div style={{ padding:20, maxWidth:600, margin:'auto' }}>
      <h2>Login</h2>
      <form onSubmit={submit}>
        <Input label="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
        <Input label="Password" type="password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} />
        <Button type="submit">Login</Button>
      </form>
    </div>
  </div>);
}
