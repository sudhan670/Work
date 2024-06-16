// src/components/LineChart.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { salaryData } from '../data';

const LineChart: React.FC = () => {
  const years = salaryData.map(item => item.year);
  const totalJobs = salaryData.map(item => item.totalJobs);
  const averageSalaries = salaryData.map(item => item.averageSalary);

  const data = {
    labels: years,
    datasets: [
      {
        label: 'Number of Total Jobs',
        data: totalJobs,
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false
      },
      {
        label: 'Average Salary (USD)',
        data: averageSalaries,
        borderColor: 'rgba(153, 102, 255, 1)',
        fill: false
      }
    ]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
