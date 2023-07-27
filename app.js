const express = require("express");
const auth_router = require("./src/routes/auth");
const app = express();
const port = process.env.PORT;
const connect_db = require("./db/connect");
require("dotenv").config();

// middlewares

// auth router
app.use("/api/v1/", auth_router);

app.get("/", (req, res) => {
  res.send("Hello");
});

const start = async () => {
  try {
    await connect_db(process.env.MONGO_URI);
    console.log("connected to Db");
    app.listen(3000, () => {
      console.log("listening to port 3000");
    });
  } catch (error) {
    console.log(error);
  }
};
 
start();
