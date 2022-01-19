const mongoose = require("mongoose");
const { isMobilePhone } = require("validator");

const Product = mongoose.model("Products", {
  name: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    require: true,
  },
  isActive: {
    type: Boolean,
  },
  details: {
    description: {
      type: String,
      required: true,
      minlength: 10,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    discount: {
      type: Number,
      default: 0,
    },
    images: {
      type: Array,
      minlength: 2,
    },
    phone: {
      type: String,
      required: true,
      validate(value) {
        return isMobilePhone(value, "he-IL");
      },
    },
    DateAdded: {
      type: Date,
      default: new Date(),
    },
  },
});

module.exports = { Product };
