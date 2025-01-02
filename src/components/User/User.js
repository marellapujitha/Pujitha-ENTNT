import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faCalendarAlt, faBell } from '@fortawesome/free-solid-svg-icons';
import Header from '../Header/Header';
import Dashboard from './Dashboard';
import CalendarPage from './CalendarPage';
import Notifications from './Notifications';
import LogCommunicationForm from './LogCommunicationForm';
import './User.css';

const User = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activePage, setActivePage] = useState('dashboard');
  const [showLogForm, setShowLogForm] = useState(false);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [communicationEvents, setCommunicationEvents] = useState([
    { date: '2024-12-15', title: 'LinkedIn Post for ENTNT' },
    { date: '2024-12-20', title: 'Email to Google' },
    { date: '2024-12-25', title: 'Conference Call with Microsoft' },
    { date: '2024-12-26', title: 'Follow-up Email to Microsoft' },
  ]);
  const [notificationCount, setNotificationCount] = useState(0);

  useEffect(() => {
    const today = new Date();
    const count = communicationEvents.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate <= today;
    }).length;
    setNotificationCount(count);
  }, [communicationEvents]);

  const formatDate = (date) => date.toISOString().split('T')[0];

  const addCommunicationEvent = (newEvent) => {
    setCommunicationEvents([...communicationEvents, newEvent]);
  };

  return (
    <div className="user-container">
      <Header />
      <div className="button-container">
        <button
          className={`user-button ${activePage === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActivePage('dashboard')}
        >
          <FontAwesomeIcon icon={faTachometerAlt} className="button-icon" />
          Dashboard
        </button>
        <button
          className={`user-button ${activePage === 'calendar' ? 'active' : ''}`}
          onClick={() => setActivePage('calendar')}
        >
          <FontAwesomeIcon icon={faCalendarAlt} className="button-icon" />
          Calendar
        </button>
        <button
          className={`user-button notifications ${activePage === 'notifications' ? 'active' : ''}`}
          onClick={() => setActivePage('notifications')}
        >
          <span className="notification-icon">
            <FontAwesomeIcon icon={faBell} className="button-icon" />
            Notifications
            {notificationCount > 0 && <span className="badge">{notificationCount}</span>}
          </span>
        </button>
      </div>

      {activePage === 'calendar' && (
        <CalendarPage
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          communicationEvents={communicationEvents}
          formatDate={formatDate}
        />
      )}
      {activePage === 'dashboard' && (
        <Dashboard
          setShowLogForm={setShowLogForm}
          selectedCompanies={selectedCompanies}
          setSelectedCompanies={setSelectedCompanies}
        />
      )}
      {activePage === 'notifications' && (
        <Notifications communicationEvents={communicationEvents} />
      )}

      {showLogForm && (
        <div className="log-communication-window">
          <LogCommunicationForm
            setShowLogForm={setShowLogForm}
            selectedCompanies={selectedCompanies}
            addCommunicationEvent={addCommunicationEvent}
          />
        </div>
      )}
    </div>
  );
};

export default User;
