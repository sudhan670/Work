// pages/index.js
import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Inventory Management System</h1>
      <p>This is the landing page of your application.</p>
      <p>Explore orders and manage inventory using the links below:</p>
      <ul>
        <li>
          <Link href="/orders">
            <a>Orders</a>
          </Link>
        </li>
        <li>
          <Link href="/inventory">
            <a>Inventory</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
