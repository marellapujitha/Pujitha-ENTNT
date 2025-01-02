import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import CommunicationFrequency from './CommunicationFrequency';
import EngagementEffectiveness from './EngagementEffectiveness';
import OverdueTrends from './OverdueTrends';
import RealTimeActivity from './RealTimeActivity';
import './Reports.css';

const Reports = () => {
  return (
    <Router>
      <div className="reports-container">
        <header className="header">
          <h1>Reporting and Analytics</h1>
        </header>
        <div className="button-container">
          <NavLink 
            to="/communication-frequency" 
            className={({ isActive }) => isActive ? 'feature-button active' : 'feature-button'}
          >
            Communication Frequency
          </NavLink>
          <NavLink 
            to="/engagement-effectiveness" 
            className={({ isActive }) => isActive ? 'feature-button active' : 'feature-button'}
          >
            Engagement Effectiveness
          </NavLink>
          <NavLink 
            to="/overdue-trends" 
            className={({ isActive }) => isActive ? 'feature-button active' : 'feature-button'}
          >
            Overdue Trends
          </NavLink>
          <NavLink 
            to="/real-time-activity" 
            className={({ isActive }) => isActive ? 'feature-button active' : 'feature-button'}
          >
            Real-Time Activity
          </NavLink>
        </div>
        <Routes>
          <Route path="/communication-frequency" element={<CommunicationFrequency />} />
          <Route path="/engagement-effectiveness" element={<EngagementEffectiveness />} />
          <Route path="/overdue-trends" element={<OverdueTrends />} />
          <Route path="/real-time-activity" element={<RealTimeActivity />} />
          <Route path="/" element={<CommunicationFrequency />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Reports;
