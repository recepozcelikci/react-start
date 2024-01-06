const mongoose = require("mongoose");
const ReviewSchema = mongoose.Schema({
  text: { type: String, required: true },
  rating: { type: Number, required : true},
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});
const ProductSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    image: [{ type: String, required: true }],
    reviews: [ReviewSchema],
    description: { type: String, required: true },
    colors: [{ type: String, required: true }],
    colors: [{ type: String, required: true }],
    price: {
      price: {
        type: Number,
        required: true,
      },
      special: {
        type: Number,
      },
    },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category",required : true},
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
