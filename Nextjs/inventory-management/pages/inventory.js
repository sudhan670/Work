import { useState, useEffect } from 'react';
import InventoryList from '../components/InventoryList';
import AddItemForm from '../components/AddItemForm';

const Inventory = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setItems(data.items));
  }, []);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Inventory</h1>
      <AddItemForm addItem={addItem} />
      <InventoryList items={items} deleteItem={deleteItem} />
    </div>
  );
};

export default Inventory;
