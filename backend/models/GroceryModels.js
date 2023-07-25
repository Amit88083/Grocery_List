const mongoose = require('mongoose');

const GrocerySchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
      },
    quantity: {
        type: Number,
        required: true,
        min: 0
      }
});

module.exports = mongoose.model('Grocery', GrocerySchema);