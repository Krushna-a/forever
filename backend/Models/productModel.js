const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: {
    filename: { type: String, required: true },
    url: { type: String, required: true }
  },
  size: [String],
  color: [String],
  category: { type: String, required: true },
  type: { type: String, required: true },
  tags: [String],
  inStock: { type: Boolean, default: true }
}, {
  timestamps: true
});

module.exports = mongoose.model("Products", productSchema);
