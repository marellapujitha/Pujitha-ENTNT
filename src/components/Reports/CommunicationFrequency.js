import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CommunicationFrequency = () => {
  const data = {
    labels: ['Email', 'LinkedIn Post', 'Phone Call'],
    datasets: [
      {
        label: 'Communication Count',
        data: [150, 100, 50],
        backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Communication Frequency',
      },
    },
    // Specify the chart's aspect ratio (optional)
    aspectRatio: 1.5, // Adjust this value as needed
  };

  return (
    <div className="chart-container" style={{ width: '80%', margin: '0 auto' }}>
      <h2>Communication Frequency Report</h2>
      <Bar data={data} options={options} height={200} width={400} />
    </div>
  );
};

export default CommunicationFrequency;
