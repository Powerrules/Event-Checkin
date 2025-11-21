import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Input from '../components/Input';
import Button from '../components/Button';
import api from '../api/axios';

export default function ManualCheckin(){
  const [form, setForm] = useState({ eventShortId:'', name:'', email:'' });
  const [msg, setMsg] = useState(null);

  async function submit(e){
    e.preventDefault();
    try {
      const { data } = await api.post('/checkin/manual', form);
      setMsg('Checked in manually.');
    } catch(err) {
      setMsg(err.response?.data?.message || 'Error');
    }
  }
  return (<div>
    <Navbar />
    <div style={{ padding:20 }}>
      <h2>Manual Check-in (kiosk)</h2>
      <form onSubmit={submit}>
        <Input label="Event short ID (ask admin)" value={form.eventShortId} onChange={e => setForm({...form, eventShortId:e.target.value})} />
        <Input label="Name" value={form.name} onChange={e => setForm({...form, name:e.target.value})} />
        <Input label="Email" value={form.email} onChange={e => setForm({...form, email:e.target.value})} />
        <Button type="submit">Check In</Button>
      </form>
      {msg && <div style={{ marginTop: 12 }}>{msg}</div>}
    </div>
  </div>);
}
