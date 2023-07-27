const express = require('express')
const user_model = require('../models/user')
const register = (req, res) => {
  res.send("register");
};

const login = (req, res) => {
  res.send("login");
};

module.exports = {
  register,
  login,
};
