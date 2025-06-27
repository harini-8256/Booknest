// import React, { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (book) => {
//     setCart((prev) => {
//       const existing = prev.find(item => item._id === book._id);
//       if (existing) {
//         return prev.map(item =>
//           item._id === book._id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       } else {
//         return [...prev, { ...book, quantity: 1 }];
//       }
//     });
//   };

//   const removeFromCart = (bookId) => {
//     setCart((prev) => prev.filter((item) => item._id !== bookId));
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart((prev) => {
      const existing = prev.find(item => item._id === book._id);
      if (existing) {
        // If book already in cart, increment quantity
        return prev.map(item =>
          item._id === book._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If new book, add with quantity 1
        return [...prev, { ...book, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (bookId) => {
    setCart((prev) => prev.filter((item) => item._id !== bookId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for easy use in components
export const useCart = () => useContext(CartContext);
