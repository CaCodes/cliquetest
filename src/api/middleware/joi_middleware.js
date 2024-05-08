import ErrorHandler from '../../helpers/errHandler';
const Joi = require('joi');
const {
  serverResponse,
  validationError,
} = ErrorHandler;

const joiMiddleware = (schema, property) => (req, res, next) => {
  const { error } = Joi.validate(req.body, schema);
  const valid = error == null;

  if (valid) {
    next();
  } else {
    const { details } = error;
    const message = details.map(i => i.message).join(',');

    return serverResponse(res, message, 422);
  }
};

export default joiMiddleware;
