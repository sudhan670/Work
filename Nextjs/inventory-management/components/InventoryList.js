const InventoryList = ({ items, deleteItem }) => {
    return (
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full bg-white border rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Stock</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-6">{item.id}</td>
                <td className="py-3 px-6">{item.name}</td>
                <td className="py-3 px-6">{item.stock}</td>
                <td className="py-3 px-6">
                  <button onClick={() => deleteItem(item.id)} className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default InventoryList;
  