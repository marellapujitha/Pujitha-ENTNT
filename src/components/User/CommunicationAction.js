import React, { useState } from "react";
import "./CommunicationAction.css";

const CommunicationAction = ({ companies, onUpdate }) => {
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    type: "",
    date: "",
    notes: "",
  });

  const handleSelectCompany = (id) => {
    setSelectedCompanies((prev) =>
      prev.includes(id) ? prev.filter((cid) => cid !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(selectedCompanies, formData);
    setModalOpen(false);
    setFormData({ type: "", date: "", notes: "" });
  };

  return (
    <div className="communication-action">
      <button onClick={() => setModalOpen(true)}>Communication Performed</button>
      {modalOpen && (
        <div className="modal">
          <h4>Log Communication</h4>
          <form onSubmit={handleSubmit}>
            <select
              name="type"
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            >
              <option value="Email">Email</option>
              <option value="Call">Call</option>
              <option value="LinkedIn Post">LinkedIn Post</option>
            </select>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
            <textarea
              name="notes"
              placeholder="Add notes"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CommunicationAction;
