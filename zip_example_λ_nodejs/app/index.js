const axios = require("axios");

exports.handler = async function (event) {
  const resp = await axios.get("https://example.com");
  return resp;
};
