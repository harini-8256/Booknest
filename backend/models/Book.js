const mongoose = require('mongoose'); // ✅ Add this line
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  description: String,
  price: Number,
  quantity: Number,
  image:String,
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});
module.exports = mongoose.model('Book', bookSchema);
