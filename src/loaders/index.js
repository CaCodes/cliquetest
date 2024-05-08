import expressLoader from './express';
import mongooseLoader from './mongoose';
import Logger from './logger';

export default async (app, io) => {
  await mongooseLoader();
  Logger.info('✌️  Mongoose has Initialized...  ✌️');
  await expressLoader(app, io);
  Logger.info('✌️ Express has Initialized...  ✌️✌️');
};
