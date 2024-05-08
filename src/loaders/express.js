import bodyParser from 'body-parser';
import cors from 'cors';
// import morgan from 'morgan';
import express from 'express';
import config from '../config/index';
import routes from '../api';
import errorHandlerMiddleware from '../api/middleware/errorHandler_middleware';

export default async (app, io) => {
  app.use(cors());
  app.enable('trust proxy');
  // app.use(morgan('combine'));

  app.use(express.json());

  app.get('/', (req, res) => {
    res.status(202).send({
      memory_useage: process.memoryUsage(),
      up_time: process.uptime(),
      pid: process.pid,
      uid: process.getuid,
      allowedNodeENV: process.allowedNodeEnvironmentFlags,
    });
  });

  app.use(config.api.prefix, routes(io));

  app.use((req, res, next) => {
    const err = new Error('Route Not Found');
    err.status = 404;
    err.name = 'Wrong route';
    next(err);
  });

  app.use(errorHandlerMiddleware);

  return app;
};
