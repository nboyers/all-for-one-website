import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Calendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
      const calendarId = process.env.REACT_APP_CALENDAR_ID;
      const maxResults = 10;
      const timeMin = new Date().toISOString();

      const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&timeMin=${timeMin}&maxResults=${maxResults}&singleEvents=true&orderBy=startTime`;

      try {
        const response = await axios.get(url);
        setEvents(response.data.items);
      } catch (error) {
        console.error('Error fetching events', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h2>Calendar of Events</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <h3>{event.summary}</h3>
            <p>{new Date(event.start.dateTime).toLocaleString()} - {new Date(event.end.dateTime).toLocaleString()}</p>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;
