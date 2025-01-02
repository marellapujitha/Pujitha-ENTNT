import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const EngagementEffectiveness = () => {
  const initialData = {
    ENTNT: {
      labels: ['Email', 'Phone Call', 'LinkedIn Message', 'Website Visit'],
      datasets: [
        {
          label: 'Communication Methods',
          data: [50, 42, 73, 150],
          backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#FF6384'],
        },
      ],
    },
    GOOGLE: {
      labels: ['Email', 'Phone Call', 'LinkedIn Message', 'Website Visit'],
      datasets: [
        {
          label: 'Communication Methods',
          data: [60, 35, 50, 100],
          backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#FF6384'],
        },
      ],
    },
    MICROSOFT: {
      labels: ['Email', 'Phone Call', 'LinkedIn Message', 'Website Visit'],
      datasets: [
        {
          label: 'Communication Methods',
          data: [80, 25, 90, 120],
          backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#FF6384'],
        },
      ],
    },
  };

  const [selectedCompany, setSelectedCompany] = useState('ENTNT');
  const data = initialData[selectedCompany];

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Engagement Effectiveness',
      },
    },
  };

  return (
    <div className="engagement-container">
      <div className="filters">
        <label>Company:</label>
        <select
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
        >
          <option value="ENTNT">ENTNT</option>
          <option value="GOOGLE">GOOGLE</option>
          <option value="MICROSOFT">MICROSOFT</option>
        </select>
      </div>
      <div style={{ position: 'relative', width: '80%', height: '350px' }}> {/* Slightly bigger size */}
        <Pie data={data} options={options} />
      </div>
      <div className="export-buttons">
        <button className="export-button">EXPORT CSV</button>
        <button className="export-button">EXPORT PDF</button>
      </div>
    </div>
  );
};

export default EngagementEffectiveness;
