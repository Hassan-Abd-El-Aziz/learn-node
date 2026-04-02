const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const Mydata = require("./models/mydataSchema");
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://hassanabdelaziz940_db_user:H1NbKxgwiDFqrUol@node.5igbtkl.mongodb.net/alldata?appName=node",
  )
  .then(() => {
    app.get("/", (req, res) => {
      res.sendFile("./views/login.html", { root: __dirname });
    });

    app.get("/home", (req, res) => {
      res.sendFile("./views/home.html", { root: __dirname });
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});

app.post("/login", (req, res) => {
  console.log(req.body)
  const mydata = new Mydata(req.body)
  mydata.save().then(() => {

    res.redirect("/home")
  }).catch((err) => {
    console.log(err)
  })



})