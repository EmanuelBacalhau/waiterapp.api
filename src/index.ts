import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';

import { router } from './routes';

mongoose
  .connect('mongodb://localhost:27017/waiterapp')
  .then(() => {
    const app = express();
    app.use(
      '/uploads',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    );
    app.use(express.json());
    app.use(router);

    const port = 3001;

    app.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => {
    console.error('Error connecting to MongoDB');
  });
