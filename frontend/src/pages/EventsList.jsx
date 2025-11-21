import React, { useEffect, useState } from 'react';
import api from '../api/axios';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

export default function EventsList(){
  const [events, setEvents] = useState([]);
  useEffect(() => {
    async function fetch() {
      try {
        const { data } = await api.get('/events');
        setEvents(data);
      } catch(err) {
        console.error(err);
      }
    }
    fetch();
  }, []);
  return (
    <div>
      <Navbar />
      <div style={{ padding:20 }}>
        <h2>Events</h2>
        <div>
          {events.map(ev => (
            <div key={ev._id} style={{ padding:10, border:'1px solid #eee', marginBottom:8 }}>
              <Link to={`/events/${ev._id}`}><strong>{ev.title}</strong></Link>
              <div>{ev.location} — {new Date(ev.startTime).toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
