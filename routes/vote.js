var express = require("express");
var router = express.Router();
const Validator = require("fastest-validator");
const v = new Validator();
const { Vote } = require("../models");

// GET
router.get("/", async (req, res, next) => {
  const users = await Vote.findAll();
  return res.json({
    status: 200,
    message: "Success get all data",
    data: users,
  });
});

// GET DATA BY ID
router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  // check id in table note
  let user = await Vote.findByPk(id);
  if (!user) {
    return res.status(404).json({ status: 404, message: "Data not found" });
  } else {
    return res.json({ status: 200, message: "Success get data", data: user });
  }
});

// POST
router.post("/", async (req, res, next) => {
  // validation
  const schema = {
    vote1: "string",
    vote2: "string",
  };
  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.status(400).json(validate);
  }
  // proses create
  const user = await Vote.create(req.body);
  res.json({
    status: 200,
    message: "Success create data",
    data: user,
  });
});

// PUT
router.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  let user = await Vote.findByPk(id);
  if (!user) {
    return res.status(404).json({ status: 404, message: "Data not found" });
  }
  // validation
  const schema = {
    vote1: "string",
    vote2: "string",
  };
  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.status(400).json(validate);
  }
  // proses update
  user = await user.update(req.body);
  res.json({
    status: 200,
    message: "Success update data",
    data: user,
  });
});

// DELETE
router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;
  // check id in table note
  let user = await Vote.findByPk(id);
  if (!user) {
    return res.status(404).json({ status: 404, message: "Data not found" });
  }

  // proses delete data
  await user.destroy();
  res.json({
    status: 200,
    message: "Success delete data",
  });
});

module.exports = router;
