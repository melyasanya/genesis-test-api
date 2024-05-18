const cron = require("node-cron");
const sendDailyExchangeRate = require("../services/notificationService");

const scheduleSend = () => {
  cron.schedule("0 9 * * *", async () => {
    await sendDailyExchangeRate();
    console.log("Exchange rate emails sent");
  });
};

module.exports = scheduleSend;
