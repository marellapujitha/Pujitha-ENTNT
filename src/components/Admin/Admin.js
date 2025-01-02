import React, { useState } from 'react';
import Header from '../Header/Header';
import './Admin.css';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('company');
  const [companies, setCompanies] = useState([
    {
      id: 1,
      name: 'ENTNT',
      location: 'Delhi, India',
      period: 'Every 7 days',
      linkedIn: 'https://www.linkedin.com/company/entnt',
      emails: 'info@entnt.com',
      phoneNumbers: '011-98765432',
      comments: 'Innovative solutions provider'
      
    },
    {
      id: 2,
      name: 'TCS',
      location: 'Bangalore, India',
      period: 'Every 14 days',
      linkedIn: 'https://www.linkedin.com/company/tcs',
      emails: 'contact@tcs.com',
      phoneNumbers: '080-12345678',
      comments: 'Leading global IT services company'
    },
    {
      id: 3,
      name: 'APPLE',
      location: 'Hyderabad, India',
      period: 'Every 9 days',
      linkedIn: 'https://www.linkedin.com/company/apple',
      emails: 'support@apple.com',
      phoneNumbers: '040-87654321',
      comments: 'Renowned tech giant'
    },
  ]);
  const [methods, setMethods] = useState([
    { id: 1, name: 'LinkedIn Post', description: 'Share or interact with company posts', sequence: 1, mandatory: true },
    { id: 2, name: 'LinkedIn Message', description: 'Send personalized messages', sequence: 2, mandatory: true },
    { id: 3, name: 'Email', description: 'Send email updates', sequence: 3, mandatory: true },
    { id: 4, name: 'Phone Call', description: 'Call the company representatives', sequence: 4, mandatory: false },
    { id: 5, name: 'Other', description: 'Any other method of communication', sequence: 5, mandatory: false },
  ]);
  const [editingItem, setEditingItem] = useState(null);
  const [newItem, setNewItem] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState({ isOpen: false, item: null });

  const handleTabClick = (tab) => setActiveTab(tab);

  // Handle Add/Edit Actions
  const handleAddOrEdit = () => {
    if (editingItem) {
      if (activeTab === 'company') {
        setCompanies(companies.map((c) => (c.id === editingItem.id ? editingItem : c)));
      } else {
        setMethods(methods.map((m) => (m.id === editingItem.id ? editingItem : m)));
      }
    } else {
      if (activeTab === 'company') {
        setCompanies([...companies, { ...newItem, id: companies.length + 1 }]);
      } else {
        setMethods([...methods, { ...newItem, id: methods.length + 1 }]);
      }
    }
    setEditingItem(null);
    setNewItem({});
    setIsModalOpen(false);
  };

  // Handle Delete Confirmation
  const handleDelete = () => {
    if (activeTab === 'company') {
      setCompanies(companies.filter((c) => c.id !== deleteConfirmation.item.id));
    } else {
      setMethods(methods.filter((m) => m.id !== deleteConfirmation.item.id));
    }
    setDeleteConfirmation({ isOpen: false, item: null });
  };

  return (
    <div className="admin-container">
      <Header />
      <div className="admin-main">
        <div className="admin-tabs">
          <button className={activeTab === 'company' ? 'tab-button active' : 'tab-button'} onClick={() => handleTabClick('company')}>
            Company Management
          </button>
          <button className={activeTab === 'methods' ? 'tab-button active' : 'tab-button'} onClick={() => handleTabClick('methods')}>
            Communication Methods
          </button>
        </div>

        {/* Company Management */}
        {activeTab === 'company' && (
          <div className="admin-table-container">
            <div className="table-header">
              <h2>Companies</h2>
              <button className="add-button" onClick={() => setIsModalOpen(true)}>+ Add Company</button>
            </div>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Communication Period</th>
                  <th>LinkedIn</th>
                  <th>Emails</th>
                  <th>Phone Numbers</th>
                  <th>Comments</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((company) => (
                  <tr key={company.id}>
                    <td>{company.name}</td>
                    <td>{company.location}</td>
                    <td>{company.period}</td>
                    <td><a href={company.linkedIn} target="_blank" rel="noopener noreferrer">{company.linkedIn}</a></td>
                    <td>{company.emails}</td>
                    <td>{company.phoneNumbers}</td>
                    <td>{company.comments}</td>
                    <td>
                      <button className="edit-btn" onClick={() => { setEditingItem(company); setIsModalOpen(true); }}>✏️</button>
                      <button className="delete-btn" onClick={() => setDeleteConfirmation({ isOpen: true, item: company })}>🗑️</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Communication Methods */}
        {activeTab === 'methods' && (
          <div className="admin-table-container">
            <div className="table-header">
              <h2>Communication Methods</h2>
              <button className="add-button" onClick={() => setIsModalOpen(true)}>+ Add Method</button>
            </div>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Sequence</th>
                  <th>Mandatory</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {methods.map((method) => (
                  <tr key={method.id}>
                    <td>{method.name}</td>
                    <td>{method.description}</td>
                    <td>{method.sequence}</td>
                    <td>{method.mandatory ? 'Yes' : 'No'}</td>
                    <td>
                      <button className="edit-btn" onClick={() => { setEditingItem(method); setIsModalOpen(true); }}>✏️</button>
                      <button className="delete-btn" onClick={() => setDeleteConfirmation({ isOpen: true, item: method })}>🗑️</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Add/Edit Modal */}
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>{editingItem ? 'Edit Item' : 'Add Company'}</h3>
              <label>Name</label>
              <input
                type="text"
                value={editingItem ? editingItem.name : newItem.name || ''}
                onChange={(e) => editingItem ? setEditingItem({ ...editingItem, name: e.target.value }) : setNewItem({ ...newItem, name: e.target.value })}
              />
              <label>{activeTab === 'company' ? 'Location' : 'Description'}</label>
              <input
                type="text"
                value={editingItem ? editingItem[activeTab === 'company' ? 'location' : 'description'] : newItem[activeTab === 'company' ? 'location' : 'description'] || ''}
                onChange={(e) => editingItem ? setEditingItem({ ...editingItem, [activeTab === 'company' ? 'location' : 'description']: e.target.value }) : setNewItem({ ...newItem, [activeTab === 'company' ? 'location' : 'description']: e.target.value })}
              />
              <label>{activeTab === 'company' ? 'Period' : 'Sequence'}</label>
              <input
                type={activeTab === 'company' ? 'text' : 'number'}
                value={editingItem ? editingItem[activeTab === 'company' ? 'period' : 'sequence'] : newItem[activeTab === 'company' ? 'period' : 'sequence'] || ''}
                onChange={(e) => editingItem ? setEditingItem({ ...editingItem, [activeTab === 'company' ? 'period' : 'sequence']: e.target.value }) : setNewItem({ ...newItem, [activeTab === 'company' ? 'period' : 'sequence']: e.target.value })}
                />
                {activeTab === 'company' && (
                  <>
                    <label>LinkedIn Profile</label>
                    <input
                      type="text"
                      value={editingItem ? editingItem.linkedIn : newItem.linkedIn || ''}
                      onChange={(e) => editingItem ? setEditingItem({ ...editingItem, linkedIn: e.target.value }) : setNewItem({ ...newItem, linkedIn: e.target.value })}
                    />
                    <label>Emails</label>
                    <input
                      type="text"
                      value={editingItem ? editingItem.emails : newItem.emails || ''}
                      onChange={(e) => editingItem ? setEditingItem({ ...editingItem, emails: e.target.value }) : setNewItem({ ...newItem, emails: e.target.value })}
                    />
                    <label>Phone Numbers</label>
                    <input
                      type="text"
                      value={editingItem ? editingItem.phoneNumbers : newItem.phoneNumbers || ''}
                      onChange={(e) => editingItem ? setEditingItem({ ...editingItem, phoneNumbers: e.target.value }) : setNewItem({ ...newItem, phoneNumbers: e.target.value })}
                    />
                    <label>Comments</label>
                    <input
                      type="text"
                      value={editingItem ? editingItem.comments : newItem.comments || ''}
                      onChange={(e) => editingItem ? setEditingItem({ ...editingItem, comments: e.target.value }) : setNewItem({ ...newItem, comments: e.target.value })}
                    />
                  </>
                )}
                {activeTab === 'methods' && (
                  <>
                    <label>Mandatory</label>
                    <input
                      type="checkbox"
                      checked={editingItem ? editingItem.mandatory : newItem.mandatory || false}
                      onChange={(e) => editingItem ? setEditingItem({ ...editingItem, mandatory: e.target.checked }) : setNewItem({ ...newItem, mandatory: e.target.checked })}
                    />
                  </>
                )}
                <div className="modal-buttons">
                  <button onClick={() => setIsModalOpen(false)}>Cancel</button>
                  <button onClick={handleAddOrEdit}>{editingItem ? 'Update' : 'Add'}</button>
                </div>
              </div>
            </div>
          )}
  
          {/* Delete Confirmation Modal */}
          {deleteConfirmation.isOpen && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h3>Confirm Delete</h3>
                <p>Are you sure you want to delete this {activeTab === 'company' ? 'company' : 'method'}?</p>
                <div className="modal-buttons">
                  <button onClick={() => setDeleteConfirmation({ isOpen: false, item: null })}>Cancel</button>
                  <button onClick={handleDelete}>Delete</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default Admin;
  