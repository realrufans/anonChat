const express = require("express");
const router = express.Router();
const { register, login } = require("./auth");

router.route().post(register).post(login);

module.exports = router;