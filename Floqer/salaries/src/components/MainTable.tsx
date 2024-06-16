// src/components/MainTable.tsx
import React, { useState } from 'react';
import { Table } from 'antd';
import { salaryData } from '../data';

const MainTable: React.FC<{ onRowClick: (year: number) => void }> = ({ onRowClick }) => {
    const [sortedInfo, setSortedInfo] = useState<{ order?: 'ascend' | 'descend', columnKey?: string }>({});

    const handleChange = (pagination: any, filters: any, sorter: any) => {
        setSortedInfo(sorter);
    };

    const columns = [
        {
            title: 'Year',
            dataIndex: 'year',
            key: 'year',
            sorter: (a: any, b: any) => a.year - b.year,
            sortOrder: sortedInfo.columnKey === 'year' ? sortedInfo.order : undefined,
        },
        {
            title: 'Number of Total Jobs',
            dataIndex: 'totalJobs',
            key: 'totalJobs',
            sorter: (a: any, b: any) => a.totalJobs - b.totalJobs,
            sortOrder: sortedInfo.columnKey === 'totalJobs' ? sortedInfo.order : undefined,
        },
        {
            title: 'Average Salary (USD)',
            dataIndex: 'averageSalary',
            key: 'averageSalary',
            sorter: (a: any, b: any) => a.averageSalary - b.averageSalary,
            sortOrder: sortedInfo.columnKey === 'averageSalary' ? sortedInfo.order : undefined,
        }
    ];

    return (
        <Table
            columns={columns}
            dataSource={salaryData}
            onChange={handleChange}
            onRow={(record) => {
                return {
                    onClick: () => {
                        onRowClick(record.year);
                    },
                };
            }}
            rowKey="year"
        />
    );
};

export default MainTable;
