/* eslint-disable global-require */
const express = require("express");
const path = require("path");
const glob = require("glob");


const routerV1 = express.Router();

routerV1.get("/healthcheck", (req, res) => {
  res.status(200).send({ message: "bff-portal", status: "OK" });
});
routerV1.use("/products", require("../app/routes/product.route"));

module.exports = { v1: routerV1 };
