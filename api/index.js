const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/Users");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");

const app = express();
dotenv.config();

const bcryptSalt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");
const jwtSecret = "onlyweknow";

app.use(express.json());
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

  try {
    const userDoc = await User.create({
      username,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(userDoc);
  } catch (e) {
    console.error(e);
    res.status(422).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  if (userDoc) {
    jwt.sign(
      { email: userDoc.email, id: userDoc, _id },
      jwtSecret,
      {},
      (err, token) => {
        if (err) throw err;
      }
    );
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      res.cookie("token", token).json({ status: "pass ok" });
    }
  } else {
    res.status(422).json({ status: "not found" });
  }
});

app.listen(4000, () => {
  console.log("Server running on port 4000...");
});
