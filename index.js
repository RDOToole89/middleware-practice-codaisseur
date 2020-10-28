const { json } = require("express");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("Hello World!");
});

const PORT = 4000;

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
