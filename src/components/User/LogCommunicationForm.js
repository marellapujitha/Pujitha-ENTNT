import React, { useState } from 'react';
import './LogCommunicationForm.css';

const LogCommunicationForm = ({ setShowLogForm, selectedCompanies, addCommunicationEvent }) => {
  const [communicationType, setCommunicationType] = useState('');
  const [communicationDate, setCommunicationDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    selectedCompanies.forEach(company => {
      const newEvent = {
        date: communicationDate,
        title: `${communicationType} for ${company}`,
      };
      addCommunicationEvent(newEvent);
    });
    setShowLogForm(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <h2>Log New Communication</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Type of Communication
            <select value={communicationType} onChange={(e) => setCommunicationType(e.target.value)} required>
              <option value="">Select Type</option>
              <option value="LinkedIn Post">LinkedIn Post</option>
              <option value="Email">Email</option>
              <option value="Conference Call">Conference Call</option>
              <option value="Webinar">Webinar</option>
            </select>
          </label>
          <label>
            Date of Communication
            <input type="date" value={communicationDate} onChange={(e) => setCommunicationDate(e.target.value)} required />
          </label>
          <label>
            Add Notes
            <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Enter any additional comments..." />
          </label>
          <button type="submit">Submit</button>
          <button type="button" onClick={() => setShowLogForm(false)}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default LogCommunicationForm;