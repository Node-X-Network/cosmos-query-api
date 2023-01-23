const express = require("express");
const axios = require("axios");
const app = express();

app.get("/", async (req, res) => {
  try {
    const abci_info = await axios.get("http://localhost:26657/abci_info");
    return res.send(abci_info.data);
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
});

app.listen(3000, () => {
  console.log("Start server at port 3000.");
});
