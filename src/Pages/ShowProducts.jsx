import axios from 'axios';
import { useEffect, useState } from 'react';

const ShowProducts = () => {
  const [orders, setAllOrders] = useState([]);

  const fetchDataProduct = async () => {
    try {
      const response = await axios.get('https://jardin-api.vercel.app/orders');
      console.log(response.data[0].data);
      setAllOrders(response.data[0].data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDataProduct();
  }, []);
  return (
    <div className="">
      {orders.map((item) => (
        <div className="" key={item._id}>
          {item.tableNumber}
        </div>
      ))}
    </div>
  );
};

export default ShowProducts;
