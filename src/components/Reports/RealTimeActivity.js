import React from 'react';
import './RealTimeActivity.css';
const RealTimeActivity = () => {
  const activities = [
    { date: '2024-12-26', user: 'Admin', company: 'Microsoft', action: 'Follow-up Email' },
    { date: '2024-12-25', user: 'User', company: 'Microsoft', action: 'Conference Call' },
    { date: '2024-12-20', user: 'Admin', company: 'Google', action: 'Email' },
    { date: '2024-12-15', user: 'User', company: 'ENTNT', action: 'LinkedIn Post' },
  ];

  return (
    <div className="activity-log">
      <h2>Real-Time Activity Log</h2>
      <div className="activity-cards">
        {activities.map((activity, index) => (
          <div key={index} className="activity-card">
            <p><strong>Date:</strong> {activity.date}</p>
            <p><strong>User:</strong> {activity.user}</p>
            <p><strong>Company:</strong> {activity.company}</p>
            <p><strong>Action:</strong> {activity.action}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RealTimeActivity;
