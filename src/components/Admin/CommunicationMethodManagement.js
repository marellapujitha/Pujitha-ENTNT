import React, { useState } from "react";
import './CommunicationMethodManagement.css';

const defaultMethods = [
  { name: "LinkedIn Post", description: "Post on LinkedIn", mandatory: true },
  { name: "LinkedIn Message", description: "Message on LinkedIn", mandatory: true },
  { name: "Email", description: "Send an email", mandatory: true },
  { name: "Phone Call", description: "Make a phone call", mandatory: false },
  { name: "Other", description: "Other methods", mandatory: false },
];

const CommunicationMethodManagement = () => {
  const [methods, setMethods] = useState(defaultMethods);

  const handleDelete = (name) => {
    setMethods(methods.filter((method) => method.name !== name));
  };

  return (
    <div className="communication-method-management">
      <h2 className="section-title">Communication Method Management</h2>
      <table className="method-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Mandatory</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {methods.map((method) => (
            <tr key={method.name}>
              <td>{method.name}</td>
              <td>{method.description}</td>
              <td>{method.mandatory ? "Yes" : "No"}</td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(method.name)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommunicationMethodManagement;
