const axios = require("axios");
const { httpError } = require("../helpers");

const dailyExchangeRate = async () => {
  try {
    const response = await axios.get(
      "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"
    );
    const usdToUah = response.data.find(
      (rate) => rate.ccy === "USD" && rate.base_ccy === "UAH"
    );

    if (!usdToUah) {
      throw new Error("Exchange rate not found");
    }

    return usdToUah.buy;
  } catch (error) {
    console.error("Error fetching exchange rate:", error.message);
    throw error;
  }
};

module.exports = dailyExchangeRate;
