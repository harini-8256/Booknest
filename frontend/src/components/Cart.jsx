// // import React from 'react';
// // import { useCart } from '../context/CartContext';

// // const Cart = () => {
// //   const { cart, removeFromCart } = useCart();

// //   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

// //   return (
// //     <div style={{ padding: '20px' }}>
// //       <h2>Your Cart</h2>
// //       {cart.length === 0 ? (
// //         <p>Your cart is empty.</p>
// //       ) : (
// //         <>
// //           {cart.map((item, index) => (
// //             <div key={index} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
// //               <h3>{item.title}</h3>
// //               <p>Price: ₹{item.price} × {item.quantity}</p>
// //               <button onClick={() => removeFromCart(item._id)}>Remove</button>
// //             </div>
// //           ))}
// //           <h3>Total: ₹{total}</h3>
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // export default Cart;
// import React, { useContext, useState } from 'react';
// import axios from 'axios';
// import { CartContext } from '../context/CartContext';

// const Cart = () => {
//   const { cart, removeFromCart } = useContext(CartContext);
//   const [message, setMessage] = useState('');
//   const [orderId, setOrderId] = useState('');

//   const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

//   const handleOrder = async () => {
//     const userId = localStorage.getItem('userId'); // make sure this is saved on login
//     if (!userId) {
//       alert("Please login first");
//       return;
//     }

//     try {
//       const res = await axios.post('http://localhost:5000/api/orders', {
//         userId,
//         items: cart.map(book => ({
//           bookId: book._id,
//           quantity: book.quantity || 1
//         }))
//       });
//       setMessage(res.data.message);
//       setOrderId(res.data.orderId);
//     } catch (err) {
//       alert('Order failed');
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Your Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           {cart.map((item, index) => (
//             <div key={index} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
//               <h3>{item.title}</h3>
//               <p>Price: ₹{item.price} x {item.quantity || 1}</p>
//               <button onClick={() => removeFromCart(item._id)}>Remove</button>
//             </div>
//           ))}
//           <h3>Total: ₹{total}</h3>
//           <button onClick={handleOrder}>Place Order</button>
//         </>
//       )}

//       {message && (
//         <div style={{ marginTop: '20px', color: 'green' }}>
//           <p>{message}</p>
//           <p><strong>Order ID:</strong> {orderId}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;
import React, { useState } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const [message, setMessage] = useState('');
  const [orderId, setOrderId] = useState('');

  const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  const handleOrder = async () => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      alert("Please login first");
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/orders', {
        userId,
        items: cart.map(book => ({
          bookId: book._id,
          quantity: book.quantity || 1
        }))
      });
      setMessage(res.data.message);
      setOrderId(res.data.orderId);
    } catch (err) {
      alert('Order failed');
      console.error(err);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
              <h3>{item.title}</h3>
              <p>Price: ₹{item.price} x {item.quantity || 1}</p>
              <button onClick={() => removeFromCart(item._id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ₹{total}</h3>
          <button onClick={handleOrder}>Place Order</button>
        </>
      )}

      {message && (
        <div style={{ marginTop: '20px', color: 'green' }}>
          <p>{message}</p>
          <p><strong>Order ID:</strong> {orderId}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
