const express = require("express");
const app = express();

const cors = require("cors");

const mongoose = require("mongoose");
const User = require("./models/Users");

const bcrypt = require("bcryptjs");
const bcryptSalt = bcrypt.genSaltSync(10);

const dotenv = require("dotenv");

app.use(express.json());
require("dotenv").config();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

mongoose.connect(process.env.MONGO_URL);

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const userDoc = await User.create({
    username,
    email,
    password: bcrypt.hashSync(password, bcryptSalt),
  });
  res.json(userDoc);
});

app.listen(4000);
