import { useState } from 'react';

const AddItemForm = ({ addItem }) => {
  const [name, setName] = useState('');
  const [stock, setStock] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && stock) {
      const newItem = { id: Date.now(), name, stock: parseInt(stock) };
      addItem(newItem);
      setName('');
      setStock('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-4">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Item Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block w-full border border-gray-300 p-2 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Stock</label>
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="block w-full border border-gray-300 p-2 rounded"
        />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Item</button>
    </form>
  );
};

export default AddItemForm;
