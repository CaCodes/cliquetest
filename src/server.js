import express from 'express';
import socketIo from 'socket.io';
import loaders from './loaders/index';
// import cronJob from './repository/job';
const startServer = async () => {
  const app = express();
  const { PORT } = process.env;

  const server = app.listen(PORT, (err) => {
    if (err) throw new Error(err);
    console.log(`Server is running on http://localhost:${PORT}`);
  });

  const io = socketIo(server, {
    cors: {
      origin: '*',
      credentials: true,
    },
  });
  await loaders(app, io);
  // await cronJob();
};

startServer();
