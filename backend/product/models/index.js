import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

function getPrice(num) {
  return (Number(num) / 100).toFixed(2);
}

function setPrice(num) {
  return num * 100;
}

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
      index: true,
      match: [/^(http|https):\/\/+[\www\d]+\.[\w]+(\/[\w\d]+)?/],
    },

    description: {
      type: String,
      lowercase: true,
    },
    price: {
      type: String,
      get: getPrice,
      set: setPrice,
      required: [true, "can't be blank"],
    },
    quantity: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ['IN_STOCK', 'OUT_OF_STOCK'],
      default: 'IN_STOCK',
    },
  },
  {
    toObject: { getters: true, setters: true },
    toJSON: { getters: true, setters: true },
    runSettersonQuery: true,
  },
);

productSchema.plugin(uniqueValidator, { message: 'Invalid URL' });

export default mongoose.model('Product', productSchema);
