require("dotenv").config();
const mongoose = require("mongoose");

const app = require("./index");
const scheduleSend = require("./cron/dailySend");
const runMigration = require("./services/migrationService");

const { DB_HOST } = process.env;

const PORT = process.env.PORT || 3001;

mongoose
  .connect(DB_HOST)
  .then(async () => {
    await runMigration();

    app.listen(PORT);
    console.log(`Database connection successful, Listening on ${PORT}`);
    scheduleSend();
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
