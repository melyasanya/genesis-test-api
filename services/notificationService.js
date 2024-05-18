const { Email } = require("../models/email");
const dailyExchangeRate = require("./exchangeRateService");
const sendEmail = require("./emailService");

const sendDailyExchangeRate = async () => {
  try {
    const exchangeRate = await dailyExchangeRate();
    const emails = await Email.find();

    const subject = "Daily USD to UAH Exchange Rate";
    const text = `Current exchange rate for USD to UAH is: ${exchangeRate}`;

    emails.forEach(
      async (email) => await sendEmail(email.email, subject, text)
    );
  } catch (error) {
    console.error("Error sending daily exchange rate:", error.message);
  }
};

module.exports = sendDailyExchangeRate;
