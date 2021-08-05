import '@babel/polyfill';

import path from 'path';

import dotenv from 'dotenv';

import express from 'express';

import mongoose from 'mongoose';
import auth from './auth/routes';
import product from './product/routes';
import order from './orders/routes';

const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

auth(app);
product(app);
order(app);
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepAlive: true,
    useCreateIndex: true,
  })
  .then(() => console.table('db connected'))
  .catch((err) => console.table(err));

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve('../build/index.html'));
  });
}
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server is running on Port ${port}`));
