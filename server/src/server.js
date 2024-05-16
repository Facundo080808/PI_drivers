const express = require("express");
const router = require("./routes/index.routes");
const morgan = require("morgan");
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.json());
server.use(morgan("dev"));

server.use(router);

server.use(cors());
server.use(router);

module.exports = server;
