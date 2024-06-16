import Link from 'next/link';

const OrderList = ({ orders }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-3 px-6 text-left">ID</th>
            <th className="py-3 px-6 text-left">Customer</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-left">Item Count</th>
            <th className="py-3 px-6 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} className="border-b hover:bg-gray-50">
              <td className="py-3 px-6">{order.id}</td>
              <td className="py-3 px-6">{order.customer}</td>
              <td className="py-3 px-6">{order.status}</td>
              <td className="py-3 px-6">{order.items.length}</td>
              <td className="py-3 px-6">
                <Link href={`/orders/${order.id}`}>
                  <a className="text-blue-500 hover:underline">Details</a>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
