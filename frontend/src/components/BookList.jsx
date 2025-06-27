// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useCart } from '../context/CartContext';

// const BookList = () => {
//   const [books, setBooks] = useState([]);
//   const { addToCart } = useCart();

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/books')
//       .then(res => setBooks(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Available Books</h2>
//       {books.length === 0 && <p>No books found</p>}
//       {books.map(book => (
//         <div
//           key={book._id}
//           style={{
//             border: '1px solid #ccc',
//             margin: '10px',
//             padding: '10px',
//             display: 'flex',
//             gap: '20px',
//             alignItems: 'flex-start',
//           }}
//         >
//           {/* Book Image */}
//           {book.image && (
//             <img
//               src={book.image}
//               alt={book.title}
//               onError={(e) => (e.target.src = 'https://via.placeholder.com/120x160?text=No+Image')}
//               style={{ width: '120px', height: '160px', objectFit: 'cover' }}
//             />
//           )}

//           {/* Book Details */}
//           <div style={{ textAlign: 'left' }}>
//             <h3>{book.title}</h3>
//             <p><strong>Author:</strong> {book.author}</p>
//             <p><strong>Genre:</strong> {book.genre}</p>
//             <p><strong>Price:</strong> ₹{book.price}</p>
//             <p><strong>Description:</strong> {book.description}</p>
//             <button onClick={() => addToCart(book)}>Add to Cart</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BookList;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get('http://localhost:5000/api/books')
      .then(res => setBooks(res.data))
      .catch(err => console.error('❌ Error fetching books:', err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Available Books</h2>
      {books.length === 0 ? (
        <p>No books found</p>
      ) : (
        books.map(book => (
          <div
            key={book._id}
            style={{
              border: '1px solid #ccc',
              margin: '10px',
              padding: '10px',
              display: 'flex',
              gap: '20px',
              alignItems: 'flex-start',
            }}
          >
            {book.image && (
              <img
                src={book.image}
                alt={book.title}
                onError={(e) => (e.target.src = 'https://via.placeholder.com/120x160?text=No+Image')}
                style={{ width: '120px', height: '160px', objectFit: 'cover' }}
              />
            )}
            <div style={{ textAlign: 'left' }}>
              <h3>{book.title}</h3>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Genre:</strong> {book.genre}</p>
              <p><strong>Price:</strong> ₹{book.price}</p>
              <p><strong>Description:</strong> {book.description}</p>
              <button onClick={() => {
  addToCart(book);
  alert('✅ Added to cart successfully');
}}>
  Add to Cart
</button>

            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BookList;
