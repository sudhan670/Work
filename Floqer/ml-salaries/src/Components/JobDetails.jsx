// src/components/JobDetailsTable.tsx
import React, { useMemo } from 'react';
import { Table } from 'antd';

interface JobDetailsTableProps {
  jobDetails: Record<string, number>;
}

const JobDetailsTable: React.FC<JobDetailsTableProps> = ({ jobDetails }) => {
  const dataSource = useMemo(() => {
    return Object.entries(jobDetails).map(([title, count]) => ({
      key: title,
      title,
      count,
    }));
  }, [jobDetails]);

  const columns = useMemo(() => [
    {
      title: 'Job Title',
      dataIndex: 'title',
      key: 'title',
      sorter: (a: { title: string }, b: { title: string }) => a.title.localeCompare(b.title),
    },
    {
      title: 'Number of Jobs',
      dataIndex: 'count',
      key: 'count',
      sorter: (a: { count: number }, b: { count: number }) => a.count - b.count,
    },
  ], []);

  if (!dataSource.length) {
    return <p>No job details available for the selected year.</p>;
  }

  return <Table columns={columns} dataSource={dataSource} />;
};

export default JobDetailsTable;
