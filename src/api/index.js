import { Router } from 'express';
import { Server } from 'socket.io';
import users from './routes/users';
import course from './routes/course';

/**
 *
 * @param {Server} io
 */
export default (io) => {
  const app = Router();

  io.on('connection', (socket) => {
    // console.log(`${socket.id} joined`);

    // socket.on('disconnect', async () => {
    //   // TODO when user disconnects remove from ALL stream and close all lives and also change online state to offline
    //   console.log(`${socket.student.socketId} disconnected`);
    // });
  });

  users(app);
  course(app);

  return app;
};
