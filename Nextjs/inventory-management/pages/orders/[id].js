import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import OrderDetails from '../../components/OrderDetails';

const OrderDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [order, setOrder] = useState(null);

  useEffect(() => {
    if (id) {
      fetch('/data.json')
        .then(response => response.json())
        .then(data => {
          const foundOrder = data.orders.find(order => order.id === parseInt(id));
          setOrder(foundOrder);
        });
    }
  }, [id]);

  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <OrderDetails order={id} />
    </div>
  );
};

export default OrderDetailPage;
