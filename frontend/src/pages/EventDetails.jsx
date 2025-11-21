import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/axios';
import Navbar from '../components/Navbar';

export default function EventDetails(){
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [checkins, setCheckins] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const ev = await api.get(`/events/${id}`);
        setEvent(ev.data);
        const chk = await api.get(`/checkin/event/${ev.data._id}`);
        setCheckins(chk.data);
      } catch(err) {
        console.error(err);
      }
    }
    fetch();
  }, [id]);

  return (<div>
    <Navbar />
    <div style={{ padding:20 }}>
      {!event ? <div>Loading...</div> :
        <div>
          <h2>{event.title}</h2>
          <div>{event.description}</div>
          <div>ShortId: {event.shortId}</div>

          <h3 style={{ marginTop:20 }}>Checkins ({checkins.length})</h3>
          <table style={{ width:'100%', borderCollapse:'collapse' }}>
            <thead>
              <tr><th>Name</th><th>Email</th><th>Time</th><th>Source</th></tr>
            </thead>
            <tbody>
              {checkins.map(c => (
                <tr key={c._id}>
                  <td>{c.name}</td>
                  <td>{c.email}</td>
                  <td>{new Date(c.createdAt).toLocaleString()}</td>
                  <td>{c.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }
    </div>
  </div>);
}
