import '@babel/polyfill';

import path from 'path';

import dotenv from 'dotenv';

import express from 'express';

import mongoose from 'mongoose';

import itemsRoute from './routes/items';

const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/items', itemsRoute);

mongoose
  .connect(process.env.DB_URL)
  .then(connect => console.log('db connected'))
  .catch(err => console.log(err));

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve('../build/index.html'));
  });
}
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server is running on Port ${port}`));
