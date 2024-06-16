import { useState, useEffect } from 'react';

const OrderDetails = ({ order }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setItems(data.items));
  }, []);

  const completeOrder = () => {
    // Update order status logic here (possibly involving state and local storage)
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Order #{order.id}</h1>
      <p className="mb-2"><strong>Customer:</strong> {order.customer}</p>
      <p className="mb-2"><strong>Status:</strong> {order.status}</p>
      <h2 className="text-xl font-bold mt-6 mb-2">Items</h2>
      <ul className="list-disc pl-5">
        {order.items.map(item => {
          const stockItem = items.find(stockItem => stockItem.id === item.id);
          return (
            <li key={item.id} className="mb-2">
              {item.name} - Quantity: {item.quantity} (In Stock: {stockItem ? stockItem.stock : 'Loading...'})
            </li>
          );
        })}
      </ul>
      {order.status === 'Pending' && (
        <button onClick={completeOrder} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">Mark as Completed</button>
      )}
    </div>
  );
};

export default OrderDetails;
