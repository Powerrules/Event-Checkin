import React, { useState, useContext } from 'react';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Input from '../components/Input';
import Button from '../components/Button';
import Navbar from '../components/Navbar';

export default function Register(){
  const [form, setForm] = useState({ name:'', email:'', password:'' });
  const { setAuth } = useContext(AuthContext);
  const nav = useNavigate();

  async function submit(e){
    e.preventDefault();
    try {
      const { data } = await api.post('/auth/register', form);
      setAuth(data.token, data.user);
      nav('/');
    } catch(err) {
      alert(err.response?.data?.message || 'Error');
    }
  }

  return (<div>
    <Navbar />
    <div style={{ padding:20, maxWidth:600, margin:'auto' }}>
      <h2>Register</h2>
      <form onSubmit={submit}>
        <Input label="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
        <Input label="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
        <Input label="Password" type="password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} />
        <Button type="submit">Register</Button>
      </form>
    </div>
  </div>);
}
