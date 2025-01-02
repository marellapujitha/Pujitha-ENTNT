import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarPage.css';

const CalendarPage = ({ selectedDate, setSelectedDate, communicationEvents, formatDate }) => {
  return (
    <div className="calendar-container">
      <h2>Communication Calendar</h2>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileContent={({ date, view }) => {
          const event = communicationEvents.find(
            (event) => event.date === formatDate(date)
          );
          return view === 'month' && event ? (
            <p className="event">{event.title}</p>
          ) : null;
        }}
      />
    </div>
  );
};

export default CalendarPage;
