const express = require("express");

const { ctrlWrapper } = require("../../helpers");
const { subscribe } = require("../../controllers/subscribe");
const { validate } = require("../../middlewares");
const { addEmailSchema } = require("../../models/email");

const router = express.Router();

router.post("/", validate(addEmailSchema), ctrlWrapper(subscribe));

module.exports = router;
