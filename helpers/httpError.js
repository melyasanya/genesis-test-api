const errorMessageList = {
  400: "Invalid status value",
};

const httpError = (status, message = errorMessageList[status]) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

module.exports = httpError;
