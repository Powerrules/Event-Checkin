import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../api/axios';
import Navbar from '../components/Navbar';
import Input from '../components/Input';
import Button from '../components/Button';

export default function Scanner(){
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [form, setForm] = useState({ name:'', email:'' });
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if(token) {
      // optionally auto submit without name/email
    }
  }, [token]);

  async function submit(e){
    e?.preventDefault();
    try {
      const { data } = await api.post('/checkin/scan', { token, name: form.name, email: form.email });
      setStatus('Checked in — thank you!');
    } catch(err) {
      console.error(err);
      setStatus(err.response?.data?.message || 'Error during checkin');
    }
  }

  return (<div>
    <Navbar />
    <div style={{ padding:20, maxWidth:600, margin:'auto' }}>
      <h2>Event Check-in</h2>
      {!token && <div>No token provided — ask the admin to give a valid QR.</div>}
      {token && (
        <>
          <div style={{ marginBottom: 12 }}>Token found. Enter your details to check in:</div>
          <form onSubmit={submit}>
            <Input label="Name (optional)" value={form.name} onChange={e => setForm({...form, name:e.target.value})} />
            <Input label="Email (optional)" value={form.email} onChange={e => setForm({...form, email:e.target.value})} />
            <Button type="submit">Check In</Button>
          </form>
          {status && <div style={{ marginTop:12 }}>{status}</div>}
        </>
      )}
    </div>
  </div>);
}
