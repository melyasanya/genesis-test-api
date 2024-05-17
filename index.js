const express = require("express");
const cors = require("cors");

const rateRouter = require("./routes/api/rate");
const subscribeRouter = require("./routes/api/subscribe");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/rate", rateRouter);
app.use("/api/subscribe", subscribeRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
