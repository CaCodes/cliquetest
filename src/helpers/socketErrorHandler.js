const socketErrorHandler = {
  socketValidationError: error => ({
    status: 'error',
    error: {
      message: error.details[0].message,
    },
    code: 400,
  }),
  socketServerResponse: (message, status) => ({
    status: 'error',
    message,
    code: status,
  }),
};
export default socketErrorHandler;
