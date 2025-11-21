import React from 'react';

export default function EventCard({event}) {
  return (
    <div style={{border: '1px solid #eee', padding: '1rem', borderRadius: 6}}>
      <h3>{event?.title ?? 'Event Title'}</h3>
      <p>{event?.date ?? 'Event Date'}</p>
    </div>
  );
}
