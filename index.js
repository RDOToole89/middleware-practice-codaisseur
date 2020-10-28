const { json } = require("express");
const express = require("express");
const app = express();

app.use(express.json());

const loggingMiddleWare = (req, res, next) => {
  const date = new Date();
  console.log(`Request made on: ${date}`);

  res.setHeader("X-Codaisseur-Time", date);
};

app.use(loggingMiddleWare);

app.get("/", (req, res, next) => {
  res.send("Hello World!");
});

const PORT = 4000;

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
