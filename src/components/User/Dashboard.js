import React from 'react';
import './Dashboard.css';

const Dashboard = ({ setShowLogForm, selectedCompanies, setSelectedCompanies }) => {
  const handleCheckboxChange = (e, company) => {
    if (e.target.checked) {
      setSelectedCompanies([...selectedCompanies, company]);
    } else {
      setSelectedCompanies(selectedCompanies.filter(item => item !== company));
    }
  };

  const communicationSummary = (company) => {
    const communications = {
      'ENTNT': [
        { type: 'LinkedIn Post', date: '20/12/2024' },
        { type: 'Email', date: '15/12/2024' },
      ],
      'Google': [
        { type: 'Email', date: '26/12/2024' },
        { type: 'Webinar', date: '20/12/2024' },
      ],
      'Microsoft': [
        { type: 'Email', date: '26/12/2024' },
        { type: 'Conference Call', date: '19/12/2024' },
      ],
    };
    return communications[company] || [];
  };

  const nextScheduledCommunication = (company) => {
    const nextCommunications = {
      'ENTNT': { type: 'LinkedIn Post', date: '20/12/2024' },
      'Google': { type: 'Email', date: '25/12/2024' },
      'Microsoft': { type: 'Email', date: '26/12/2024' },
    };
    return nextCommunications[company] || {};
  };

  const highlightClass = (date) => {
    const now = new Date();
    const dueDate = new Date(date);

    if (dueDate < now) {
      return 'red-highlight';
    } else if (dueDate.toDateString() === now.toDateString()) {
      return 'yellow-highlight';
    } else {
      return '';
    }
  };

  return (
    <div className="dashboard-container">
      <h2 id='dh'>Company Communications</h2>
      <button className="communication-button" onClick={() => setShowLogForm(true)}>
        + Communication Performed
      </button>
      <table className="communications-table">
        <thead>
          <tr>
            <th>Select</th>
            <th>Company</th>
            <th>Last Five Communications</th>
            <th>Next Scheduled Communication</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" onChange={(e) => handleCheckboxChange(e, 'ENTNT')} /></td>
            <td>ENTNT<br />Abu Dhabi</td>
            <td>
              {communicationSummary('ENTNT').map((comm, index) => (
                <div key={index} className="communication-summary">
                  <span className="type">{comm.type}</span><br />
                  <span className="date">{comm.date}</span>
                </div>
              ))}
            </td>
            <td className={highlightClass(nextScheduledCommunication('ENTNT').date)}>
              {nextScheduledCommunication('ENTNT').type}<br />
              {nextScheduledCommunication('ENTNT').date}<br />
              <button>Disable Highlight</button>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox" onChange={(e) => handleCheckboxChange(e, 'Google')} /></td>
            <td>Google<br />California, US</td>
            <td>
              {communicationSummary('Google').map((comm, index) => (
                <div key={index} className="communication-summary">
                  <span className="type">{comm.type}</span><br />
                  <span className="date">{comm.date}</span>
                </div>
              ))}
            </td>
            <td className={highlightClass(nextScheduledCommunication('Google').date)}>
              {nextScheduledCommunication('Google').type}<br />
              {nextScheduledCommunication('Google').date}<br />
              <button>Disable Highlight</button>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox" onChange={(e) => handleCheckboxChange(e, 'Microsoft')} /></td>
            <td>Microsoft<br />Washington, US</td>
            <td>
              {communicationSummary('Microsoft').map((comm, index) => (
                <div key={index} className="communication-summary">
                  <span className="type">{comm.type}</span><br />
                  <span className="date">{comm.date}</span>
                </div>
              ))}
            </td>
            <td className={highlightClass(nextScheduledCommunication('Microsoft').date)}>
              {nextScheduledCommunication('Microsoft').type}<br />
              {nextScheduledCommunication('Microsoft').date}<br />
              <button>Disable Highlight</button>
            </td>
          </tr>
        </tbody>
      </table>
      
    </div>
  );
};

export default Dashboard;