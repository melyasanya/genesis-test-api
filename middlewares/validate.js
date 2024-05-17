const { httpError } = require("../helpers");

const validate = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(httpError(400, "Missing required field"));
    }
    next();
  };
  return func;
};

module.exports = validate;
