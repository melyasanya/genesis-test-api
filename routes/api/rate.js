const express = require("express");

const { ctrlWrapper } = require("../../helpers");
const { getRate } = require("../../controllers/rate");

const router = express.Router();

router.get("/", ctrlWrapper(getRate));

module.exports = router;
