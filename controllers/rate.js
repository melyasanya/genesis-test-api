const axios = require("axios");
const { httpError } = require("../helpers");

const getRate = async (req, res) => {
  const response = await axios.get(
    "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"
  );
  const usdToUah = response.data.find(
    (rate) => rate.ccy === "USD" && rate.base_ccy === "UAH"
  );

  if (!usdToUah) {
    throw httpError(400);
  }

  res.json(usdToUah.buy);
};

module.exports = {
  getRate,
};
