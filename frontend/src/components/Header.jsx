// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => (
//   <nav style={{ padding: '10px', backgroundColor: '#0077cc', color: 'white' }}>
//     <Link to="/" style={{ marginRight: '15px', color: 'white' }}>Home</Link>
//     <Link to="/login" style={{ marginRight: '15px', color: 'white' }}>Login</Link>
//     <Link to="/register" style={{ marginRight: '15px', color: 'white' }}>Register</Link>
//     <Link to="/addbook" style={{ color: 'white' }}>Add Book</Link>
//   </nav>
// );





// export default Header;
// import React from 'react';
// import { Link } from 'react-router-dom';

// function Header() {
//   const navStyle = {
//     display: 'flex',
//     justifyContent: 'space-around',
//     padding: '1rem',
//     backgroundColor: '#f0f0f0',
//     borderBottom: '1px solid #ccc',
//     fontSize: '1.1rem',
//   };

//   const linkStyle = {
//     textDecoration: 'none',
//     color: '#333',
//     fontWeight: 'bold',
//   };

//   return (
//     <nav style={navStyle}>
//       <Link to="/" style={linkStyle}>Home</Link>
//       <Link to="/login" style={linkStyle}>Login</Link>
//       <Link to="/register" style={linkStyle}>Register</Link>
//       <Link to="/addbook" style={linkStyle}>Add Book</Link>
//       <Link to="/cart" style={linkStyle}>Cart</Link>
//       <Link to="/orders" style={linkStyle}>Orders</Link>

//     </nav>
//   );
// }

// export default Header;
// import React from 'react';
// import { Link } from 'react-router-dom';

// function Header() {
//   const navStyle = {
//     display: 'flex',
//     justifyContent: 'space-around',
//     padding: '1rem',
//     backgroundColor: '#f0f0f0',
//     borderBottom: '1px solid #ccc',
//     fontSize: '1.1rem',
//   };

//   const linkStyle = {
//     textDecoration: 'none',
//     color: '#333',
//     fontWeight: 'bold',
//   };

//   const userRole = localStorage.getItem('role'); // 👈 Get role from localStorage

//   return (
//     <nav style={navStyle}>
//       <Link to="/" style={linkStyle}>Home</Link>
//       <Link to="/login" style={linkStyle}>Login</Link>
//       <Link to="/register" style={linkStyle}>Register</Link>

//       {/* ✅ Only show Add Book if user is admin */}
//       {userRole === 'admin' && (
//         <Link to="/addbook" style={linkStyle}>Add Book</Link>
         

//       )}
    

//       <Link to="/cart" style={linkStyle}>Cart</Link>
//       <Link to="/orders" style={linkStyle}>Orders</Link>
//     </nav>
//   );
// }

// export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const role = localStorage.getItem('role');

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '1rem',
    backgroundColor: '#f0f0f0',
    borderBottom: '1px solid #ccc',
    fontSize: '1.1rem',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/login" style={linkStyle}>Login</Link>
      <Link to="/register" style={linkStyle}>Register</Link>
      {role === 'admin' && <Link to="/addbook" style={linkStyle}>Add Book</Link>}
      <Link to="/cart" style={linkStyle}>Cart</Link>
      <Link to="/orders" style={linkStyle}>Orders</Link>
    </nav>
  );
}

export default Header;
