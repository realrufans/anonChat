const express = require("express");
const { register, login } = require("../controllers/auth");
const router = express.Router();

// register route
router.post("/register", register).post("/login", login);

module.exports = router;
