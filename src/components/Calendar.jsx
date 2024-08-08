import React from 'react';

const Calendar = () => {
  const calendarSrc = process.env.REACT_APP_CALENDAR_SRC;
  const calendarHeight = process.env.REACT_APP_CALENDAR_HEIGHT;
  const calendarWidth = process.env.REACT_APP_CALENDAR_WIDTH;
  const calendarBgColor = process.env.REACT_APP_CALENDAR_BG_COLOR;
  const calendarTimezone = process.env.REACT_APP_CALENDAR_TIMEZONE;

  if (!calendarSrc || !calendarHeight || !calendarWidth || !calendarBgColor || !calendarTimezone) {
    return <div>Environment variables for the calendar are not set correctly.</div>;
  }

  const calendarUrl = `https://calendar.google.com/calendar/embed?height=${calendarHeight}&wkst=1&ctz=${calendarTimezone}&bgcolor=${calendarBgColor}&src=${calendarSrc}`;

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <h2>Calendar of Events</h2>
      <iframe 
        src={calendarUrl}
        style={{ 
          border: 'solid 1px #777', 
          width: `${calendarWidth}px`, 
          height: `${calendarHeight}px`, 
          overflow: 'hidden' 
        }} 
        seamless
        title="Google Calendar">
      </iframe>
    </div>
  );
};

export default Calendar;
