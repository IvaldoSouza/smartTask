const getCodeError = (message) => {
  switch (message) {
    case 'Sale not found':
      return 'not_found';  
    default:
      return 'invalid_data';
  }
};

const getSatusError = (code) => {
  switch (code) {
    case 'not_found':
      return 404;  
    default:
      return 400;
  }
};

const errorsMessage = (error, _req, res, _next) => {
  res.status(getSatusError(getCodeError(error.details[0].message))).json({
    err: {
      code: getCodeError(error.details[0].message),
      message: error.details[0].message,
    },
  });
};

module.exports = errorsMessage;