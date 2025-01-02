import React, { useState } from 'react';
import Admin from './components/Admin/Admin';
import User from './components/User/User';
import Reports from './components/Reports/Reports';
import Header from './components/Header/Header';
import './App.css';

const App = () => {
  const [activePage, setActivePage] = useState('admin');

  const handleButtonClick = (page) => {
    setActivePage(page);
  };

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <div className="sidebar">
          <ul className="sidebar-menu">
            <li className={activePage === 'admin' ? 'menu-item active' : 'menu-item'} onClick={() => handleButtonClick('admin')}>
              Admin
            </li>
            <li className={activePage === 'user' ? 'menu-item active' : 'menu-item'} onClick={() => handleButtonClick('user')}>
              User
            </li>
            <li className={activePage === 'reports' ? 'menu-item active' : 'menu-item'} onClick={() => handleButtonClick('reports')}>
              Reports
            </li>
          </ul>
        </div>
        <div className="content">
          {activePage === 'admin' && <Admin />}
          {activePage === 'user' && <User />}
          {activePage === 'reports' && <Reports />}
        </div>
      </div>
    </div>
  );
};

export default App;
