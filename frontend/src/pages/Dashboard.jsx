import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import api from '../api/axios';
import { Link } from 'react-router-dom';

export default function Dashboard(){
  const [stats, setStats] = useState(null);

  useEffect(() => {
    async function fetch() {
      try {
        const { data } = await api.get('/checkin/stats');
        setStats(data);
      } catch(err) {
        console.error(err);
      }
    }
    fetch();
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ padding: 20 }}>
        <h1>Dashboard</h1>
        <div>
          <Link to="/create">Create Event</Link> | <Link to="/events">Events</Link>
        </div>
        <div style={{ marginTop:20 }}>
          <h3>Stats</h3>
          {stats ? (
            <div>
              <div>Total events: {stats.eventsCount}</div>
              <div>Total checkins: {stats.totalCheckins}</div>
            </div>
          ) : <div>Loading...</div>}
        </div>
      </div>
    </div>
  );
}
