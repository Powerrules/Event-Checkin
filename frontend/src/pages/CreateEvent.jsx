import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import api from '../api/axios';
import Input from '../components/Input';
import Button from '../components/Button';

export default function CreateEvent(){
  const [form, setForm] = useState({ title:'', description:'', location:'', startTime:'', endTime:'' });
  const [qrDataUrl, setQrDataUrl] = useState(null);
  const [qrPayload, setQrPayload] = useState(null);

  async function submit(e){
    e.preventDefault();
    try {
      const { data } = await api.post('/events', form);
      setQrDataUrl(data.qrDataUrl);
      setQrPayload(data.qrPayload);
    } catch(err) {
      alert(err.response?.data?.message || 'Error creating event');
    }
  }

  return (
    <div>
      <Navbar />
      <div style={{ padding: 20, maxWidth:800, margin:'auto' }}>
        <h2>Create Event</h2>
        <form onSubmit={submit}>
          <Input label="Title" value={form.title} onChange={e => setForm({...form, title: e.target.value})} />
          <Input label="Description" value={form.description} onChange={e => setForm({...form, description: e.target.value})} />
          <Input label="Location" value={form.location} onChange={e => setForm({...form, location: e.target.value})} />
          <Input label="Start time" type="datetime-local" value={form.startTime} onChange={e => setForm({...form, startTime: e.target.value})} />
          <Input label="End time" type="datetime-local" value={form.endTime} onChange={e => setForm({...form, endTime: e.target.value})} />
          <Button type="submit">Create</Button>
        </form>

        {qrDataUrl && (
          <div style={{ marginTop:20 }}>
            <h3>QR Code (share this with attendees)</h3>
            <img src={qrDataUrl} alt="QR" style={{ width:200, height:200 }} />
            <div style={{ marginTop:8 }}>Link encoded: <a href={qrPayload} target="_blank">{qrPayload}</a></div>
          </div>
        )}
      </div>
    </div>
  );
}
