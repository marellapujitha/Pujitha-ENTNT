import React from 'react';
import './Notifications.css';

const Notifications = ({ communicationEvents = [] }) => {
  const now = new Date();

  const overdueCommunications = communicationEvents.filter((comm) => {
    const commDate = new Date(comm.date);
    return commDate < now;
  });

  const dueToday = communicationEvents.filter((comm) => {
    const commDate = new Date(comm.date);
    return commDate.toDateString() === now.toDateString();
  });

  return (
    <div className="notifications-container">
      <h2 id='n'>Notifications</h2>
      <div className="notifications-summary">
        <div className="notifications-overdue">
          <h3>Overdue Communications</h3>
          <div className="count">{overdueCommunications.length}</div>
        </div>
        <div className="notifications-due-today">
          <h3>Due Today</h3>
          <div className="count">{dueToday.length}</div>
        </div>
      </div>
      <div className="notifications-details">
        <h3>Overdue Communications</h3>
        <div className="grid">
          {overdueCommunications.map((comm, index) => (
            <div key={index} className="notification-item">
              <strong>{comm.company}</strong>
              <p>{comm.title}</p>
              <p>Date: {comm.date}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="notifications-details-t">
        <h3 >Communications Due Today</h3>
        <div id='t'>
          {dueToday.map((comm, index) => (
            <div key={index} >
              <strong>{comm.company}</strong>
              <p>{comm.title}</p>
              <p>Date: {comm.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
