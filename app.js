require("dotenv").config();
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/payments/", require("./routes/index"));

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on:- http://127.0.0.1:${PORT}/`);
});
