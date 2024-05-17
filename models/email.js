const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

const emailSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
  },
  { versionKey: false, timestamps: false }
);

emailSchema.post("save", handleMongooseError);

const addEmailSchema = Joi.object({
  email: Joi.string().email().required(),
});

const Email = model("email", emailSchema);

module.exports = {
  Email,
  addEmailSchema,
};
