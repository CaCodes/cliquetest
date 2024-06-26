import jwt from 'jsonwebtoken';
import User from '../../models/User';
import config from '../../config/index';
// import ErrorResponse from '../../classes/errorResponse_class';
import ErrorHandler from '../../helpers/errHandler';
const {
  serverResponse,
  validationError,
} = ErrorHandler;

const accountAuth = {
  userAuth: async (req, res, next) => {
    try {
      const token = req.header('Authorization').replace('Bearer ', '');
      const decoded = jwt.verify(token, config.secretOrKey);
      const user = await User.findOne({
        _id: decoded._id,
        'tokens.token': token,
      });
      if (!user) throw new Error();
      req.token = token;
      req.user = user;
      next();
    } catch (error) {
      // LoggerInstance.error(error);
      res.status(401).send({
        msg: 'Please Authenticate',
      });
    }
  },

};
export default accountAuth;
