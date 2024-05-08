import ErrorResponse from '../../classes/errorResponse_class';
import ErrorHandler from '../../helpers/errHandler';
const {
  serverResponse,
  validationError,
} = ErrorHandler;
const errorHandlerMiddleware = (err, req, res, next) => {
  // console.log(err);
  let error = {
    ...err,
  };
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message);
    error = new ErrorResponse(message, 400);
  }

  if (err.code === 11000) {
    const message = 'Duplicate entries please check fields';
    error = new ErrorResponse(message, 400);
  }
  return serverResponse(
    res,
    error.message || err.message || error || err || 'Unknown server error',
    error.statusCode || 400,
  );
};

export default errorHandlerMiddleware;
