import jwt from 'jsonwebtoken';
import { Server } from 'socket.io';
import User from '../../models/User';
import config from '../../config/index';
/**
 *
 * @param {Server} io
 */
const socketUserAuth = async (io) => {
  try {
    io.use(async (socket, next) => {
      try {
        const { token } = socket.handshake.query;
        if (token) {
          const decoded = jwt.verify(token, config.secretOrKey);
          const user = await User.findOne({
            _id: decoded._id,
            'tokens.token': token,
          })
            .select(['-ipAddress', '-confirmationCode'])
            .populate('profile', ['profilePics']);
          if (!user) throw new Error();
          socket.token = token;
          user.isOnline = true;
          user.socketId = socket.id;
          socket.user = user;
          await user.save();
          return next();
        }
        throw Error('No auth, Please login and try again');
      } catch (error) {
        console.log(error.message);
        socket.disconnect(true);
      }
    });
  } catch (error) {
    throw error;
  }
};

export default socketUserAuth;
