import mongoose from "mongoose";

const { Schema } = mongoose;

const itemModel = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const items = mongoose.model("items", itemModel);

export default items;
