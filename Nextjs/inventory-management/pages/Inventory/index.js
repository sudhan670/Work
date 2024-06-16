// pages/inventory/index.js
import React from 'react';
import Link from 'next/link';

const InventoryHomePage = () => {
  return (
    <div>
      <h1>Inventory Management</h1>
      <p>Welcome to the Inventory Management section.</p>
      <ul>
        <li>
          <Link href="/inventory/add">
            <a>Add New Item</a>
          </Link>
        </li>
        <li>
          <Link href="/inventory/edit">
            <a>Edit Inventory</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default InventoryHomePage;
