// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const OrderHistory = () => {
//   const [orders, setOrders] = useState([]);
//   const userId = localStorage.getItem('userId');

//   useEffect(() => {
//     if (userId) {
//       axios.get(`http://localhost:5000/api/orders/${userId}`)
//         .then(res => setOrders(res.data))
//         .catch(err => console.error(err));
//     }
//   }, [userId]);

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Your Orders</h2>
//       {orders.length === 0 ? (
//         <p>No orders found.</p>
//       ) : (
//         orders.map(order => (
//           <div key={order._id} style={{ border: '1px solid #ccc', marginBottom: '15px', padding: '10px' }}>
//             <h4>Order ID: {order._id}</h4>
//             <p>Total: ₹{order.total}</p>
//             <p>Books:</p>
//             <ul>
//               {order.books.map((b, i) => (
//                 <li key={i}>{b.title} - ₹{b.price} x {b.quantity}</li>
//               ))}
//             </ul>
//             <p><i>Placed on: {new Date(order.createdAt).toLocaleString()}</i></p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default OrderHistory;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const OrderHistory = () => {
//   const [orders, setOrders] = useState([]);
//   const userId = localStorage.getItem('userId');

//   useEffect(() => {
//     if (userId) {
//       axios
//         .get(`http://localhost:5000/api/orders/${userId}`)
//         .then(res => setOrders(res.data))
//         .catch(err => console.error('Failed to fetch orders:', err));
//     }
//   }, [userId]);

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Your Orders</h2>
//       {orders.length === 0 ? (
//         <p>No orders found.</p>
//       ) : (
//         orders.map(order => (
//           <div
//             key={order._id}
//             style={{ border: '1px solid #ccc', marginBottom: '15px', padding: '10px' }}
//           >
//             <h4>Order ID: {order._id}</h4>
//             <p><strong>Total:</strong> ₹{order.total || 'N/A'}</p>
//             <p><strong>Books:</strong></p>
//             <ul>
//               {order.items.map((item, i) => (
//                 <li key={i}>
//                   {item.book?.title || 'Unknown Title'} — ₹{item.book?.price || 0} × {item.quantity}
//                 </li>
//               ))}
//             </ul>
//             <p><i>Placed on: {new Date(order.createdAt).toLocaleString()}</i></p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default OrderHistory;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    if (userId) {
      axios.get(`http://localhost:5000/api/orders/${userId}`)
        .then(res => setOrders(res.data))
        .catch(err => console.error(err));
    }
  }, [userId]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map(order => (
          <div key={order._id} style={{ border: '1px solid #ccc', marginBottom: '15px', padding: '10px' }}>
            <h4>Order ID: {order._id}</h4>
            <p>Total: ₹{order.total}</p>
            <p>Books:</p>
            <ul>
              {order.books.map((b, i) => (
                <li key={i}>{b.title} - ₹{b.price} x {b.quantity}</li>
              ))}
            </ul>
            <p><i>Placed on: {new Date(order.createdAt).toLocaleString()}</i></p>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderHistory;
