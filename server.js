require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());

const jwt = require("jsonwebtoken");

const posts = [
  {
    username: "galal98",
    title: "I love coding",
  },
  {
    username: "galal981",
    title: "I love coding 2",
  },
];

app.get("/posts", authenticateToken, (req, res) => {
  res.json(posts.filter((post) => post.username === req.user.name));
});

app.post("/login", (req, res) => {
  // Authenticate User
  const username = req.body.username;
  const user = { name: username };

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken: accessToken });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });

  //   res.json({ message: "hello" });
}

app.listen(8000, () => console.log("listening on port 8000"));
