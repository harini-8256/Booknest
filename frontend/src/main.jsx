// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { CartProvider } from './context/CartContext'; // ✅ Import this

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <CartProvider>  {/* ✅ Wrap App here */}
//       <App />
//     </CartProvider>
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

s