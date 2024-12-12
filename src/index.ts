import http from 'node:http';
import path from 'node:path';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import { Server } from 'socket.io';

import { router } from './routes';

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

mongoose
  .connect('mongodb://localhost:27017/waiterapp')
  .then(() => {
    app.use(cors());
    app.use(
      '/uploads',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    );
    app.use(express.json());
    app.use(router);

    const port = 3001;

    server.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => {
    console.error('Error connecting to MongoDB');
  });
