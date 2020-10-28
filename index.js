const express = require("express");
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());

const loggingMiddleWare = (req, res, next) => {
  const date = new Date();
  console.log(`Request made on: ${date}`);

  res.setHeader("X-Codaisseur-Time", date);
  next();
};

const failRandomlyMiddleWare = (req, res, next) => {
  const chance = Math.round(Math.random());

  if (chance === 0) {
    next();
  } else {
    res.status(500).send("You got powned!");
  }
};

app.use(loggingMiddleWare);
// app.use(failRandomlyMiddleWare);

app.get("/", failRandomlyMiddleWare, (req, res, next) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.json({
    message: "We received your request body!",
  });
});

app.get("/foo", (req, res, next) => {
  res.send("Foo");
});

const PORT = 4000;

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
