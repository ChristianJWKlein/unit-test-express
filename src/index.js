const express = require("express");
const app = express();
const PORT = 8001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello darkness my old friend");
});

app.listen(PORT, () => {
  console.log(`Listening on port  ${PORT}`);
});
