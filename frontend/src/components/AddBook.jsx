import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    genre: '',
    description: '',
    price: '',
    quantity: '',
    image: '', // ✅ Add this line
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/books', book);
      alert('Book added successfully');
      setBook({
        title: '',
        author: '',
        genre: '',
        description: '',
        price: '',
        quantity: '',
        image: '', // ✅ Reset image
      });
    } catch (err) {
      alert('Error adding book');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <h2>Add Book</h2>
      <input type="text" placeholder="Title" value={book.title}
        onChange={(e) => setBook({ ...book, title: e.target.value })} required />
      <br />
      <input type="text" placeholder="Author" value={book.author}
        onChange={(e) => setBook({ ...book, author: e.target.value })} required />
      <br />
      <input type="text" placeholder="Genre" value={book.genre}
        onChange={(e) => setBook({ ...book, genre: e.target.value })} />
      <br />
      <textarea placeholder="Description" value={book.description}
        onChange={(e) => setBook({ ...book, description: e.target.value })} />
      <br />
      <input type="number" placeholder="Price" value={book.price}
        onChange={(e) => setBook({ ...book, price: e.target.value })} required />
      <br />
      <input type="number" placeholder="Quantity" value={book.quantity}
        onChange={(e) => setBook({ ...book, quantity: e.target.value })} required />
      <br />
      <input type="text" placeholder="Image URL" value={book.image}
        onChange={(e) => setBook({ ...book, image: e.target.value })} />
      <br />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
