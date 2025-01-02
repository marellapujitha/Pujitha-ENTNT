import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const OverdueTrends = () => {
  const initialData = {
    ENTNT: {
      labels: ['January 1', 'February 1', 'March 1', 'April 1', 'May 1', 'June 1', 'July 1'],
      datasets: [
        {
          label: 'ENTNT',
          data: [3, 2, 4, 3, 5, 4, 6],
          borderColor: '#42A5F5',
          backgroundColor: 'rgba(66, 165, 245, 0.2)',
        },
      ],
    },
    GOOGLE: {
      labels: ['January 1', 'February 1', 'March 1', 'April 1', 'May 1', 'June 1', 'July 1'],
      datasets: [
        {
          label: 'GOOGLE',
          data: [4, 3, 5, 4, 6, 5, 7],
          borderColor: '#66BB6A',
          backgroundColor: 'rgba(102, 187, 106, 0.2)',
        },
      ],
    },
    MICROSOFT: {
      labels: ['January 1', 'February 1', 'March 1', 'April 1', 'May 1', 'June 1', 'July 1'],
      datasets: [
        {
          label: 'MICROSOFT',
          data: [2, 1, 3, 2, 4, 3, 5],
          borderColor: '#FFA726',
          backgroundColor: 'rgba(255, 167, 38, 0.2)',
        },
      ],
    },
  };

  const [selectedCompany, setSelectedCompany] = useState('ALL');
  const [dateRange, setDateRange] = useState({ start: '2024-01-01', end: '2024-07-01' });
  const [filteredData, setFilteredData] = useState(initialData);

  const handleFilter = () => {
    if (selectedCompany === 'ALL') {
      setFilteredData(initialData);
    } else {
      setFilteredData({ [selectedCompany]: initialData[selectedCompany] });
    }
  };

  const data = {
    labels: filteredData[selectedCompany]?.labels || initialData.ENTNT.labels,
    datasets: Object.keys(filteredData).map(company => ({
      label: filteredData[company].datasets[0].label,
      data: filteredData[company].datasets[0].data,
      borderColor: filteredData[company].datasets[0].borderColor,
      backgroundColor: filteredData[company].datasets[0].backgroundColor,
    })),
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Overdue Communication Trends',
      },
    },
  };

  return (
    <div className="overdue-container">
      
      <div className="filters">
        <label>Company:</label>
        <select
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
        >
          <option value="ALL">All</option>
          <option value="ENTNT">ENTNT</option>
          <option value="GOOGLE">GOOGLE</option>
          <option value="MICROSOFT">MICROSOFT</option>
        </select>
        <label>Date Range:</label>
        <input
          type="date"
          value={dateRange.start}
          onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
        />
        <input
          type="date"
          value={dateRange.end}
          onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
        />
        <button className="filter-button" onClick={handleFilter}>FILTER</button>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default OverdueTrends;
