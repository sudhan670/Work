// components/AddItemForm.js
import React, { useState } from 'react';

const AddItemForm = ({ onSubmit }) => {
  const [itemName, setItemName] = useState('');
  const [initialStock, setInitialStock] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic
    if (!itemName.trim() || !initialStock.trim()) {
      alert('Please enter item name and initial stock level.');
      return;
    }
    // Call parent onSubmit function with form data
    onSubmit({ itemName, initialStock: parseInt(initialStock) });
    // Reset form fields
    setItemName('');
    setInitialStock('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
      <div className="mb-4">
        <label htmlFor="itemName" className="block text-sm font-medium text-gray-700">
          Item Name
        </label>
        <input
          type="text"
          id="itemName"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="initialStock" className="block text-sm font-medium text-gray-700">
          Initial Stock
        </label>
        <input
          type="number"
          id="initialStock"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={initialStock}
          onChange={(e) => setInitialStock(e.target.value)}
          required
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Item
        </button>
      </div>
    </form>
  );
};

export default AddItemForm;
