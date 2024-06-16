// src/App.tsx
import React, { useState } from 'react';
import 'antd/dist/reset.css'; // Import Ant Design styles
import MainTable from './components/MainTable';
import LineChart from './components/LineChart';
import JobDetailsTable from './components/JobDetailsTable';
import { salaryData } from './data';

const App: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const handleRowClick = (year: number) => {
    setSelectedYear(year);
  };

  const jobDetails = selectedYear ? salaryData.find(data => data.year === selectedYear)?.jobs : null;

  return (
    <div style={{ padding: '20px' }}>
      <h1>ML Engineer Salaries</h1>
      <MainTable onRowClick={handleRowClick} />
      <LineChart />
      {jobDetails && (
        <>
          <h2>Job Details for {selectedYear}</h2>
          <JobDetailsTable jobDetails={jobDetails} />
        </>
      )}
    </div>
  );
};

export default App;
