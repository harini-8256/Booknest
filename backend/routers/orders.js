const router = require('express').Router();
const Order = require('../models/Order');
const Book = require('../models/Book');

router.post('/', async (req, res) => {
  try {
    const { userId, items } = req.body;

    let total = 0;
    const orderItems = [];

    for (const item of items) {
      const book = await Book.findById(item.bookId);
      if (!book || book.quantity < item.quantity) {
        return res.status(400).json({ message: `Book ${item.bookId} unavailable or insufficient stock` });
      }
      book.quantity -= item.quantity;
      await book.save();

      total += book.price * item.quantity;
      orderItems.push({
        bookId: book._id,
        title: book.title,
        quantity: item.quantity,
        price: book.price
      });
    }

    const order = new Order({ userId, books: orderItems, total });
    await order.save();

    res.status(201).json({ message: 'Order placed', orderId: order._id });
  } catch (err) {
    res.status(500).json({ message: 'Order failed', error: err.message });
  }
});

router.get('/:userId', async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Could not fetch orders' });
  }
});

module.exports = router;
