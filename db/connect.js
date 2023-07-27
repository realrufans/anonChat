const mongoose = require("mongoose");

const connect_db = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connect_db;
