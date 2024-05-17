const { httpError } = require("../helpers");
const { Email } = require("../models/email");

const subscribe = async (req, res) => {
  const { email } = req.body;

  const existingUser = await Email.findOne({ email });
  if (existingUser) {
    throw httpError(409, "Email already exists");
  }

  await Email.create({ email });

  res.sendStatus(200);
};

module.exports = {
  subscribe,
};
