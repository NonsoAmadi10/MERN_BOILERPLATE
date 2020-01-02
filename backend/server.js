import "@babel/polyfill";

import dotenv from "dotenv";

import express from "express";

import mongoose from "mongoose";

import itemsRoute from "./routes/items";
const app = express();
dotenv.config();
app.use("/items", itemsRoute);

mongoose
  .connect(process.env.DB_URL)
  .then(connect => console.log("db connected"))
  .catch(err => console.log(err));
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server is running on Port ${port}`));
