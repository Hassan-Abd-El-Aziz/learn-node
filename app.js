const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const myCustomer = require("./models/customerSchema");
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs")
app.use(express.static("public"));


// create live reload 

const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));


const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
//////////////////////////////////////////////

mongoose
  .connect(
    "mongodb+srv://hassanabdelaziz940_db_user:H1NbKxgwiDFqrUol@node.5igbtkl.mongodb.net/alldata?appName=node",
  )
  .then(() => {
    app.get("/", (req, res) => {
      res.render("index")
    });
    app.get("/user/add.html", (req, res) => {
      res.render("user/add")
    });
    app.get("/user/view.html", (req, res) => {
      myCustomer.find().then((data) => {

        res.render("user/view", { data: data })
      }).catch((err) => {
        console.log(err)
      })
    });
    app.get("/user/edit.html", (req, res) => {
      res.render("user/edit")
    });
    app.get("/user/search.html", (req, res) => {
      res.render("user/search")
    });
  })
app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});

app.post("/user/add.html", (req, res) => {
  const customer = new myCustomer(req.body)
  customer.save().then(() => {

    res.redirect("/user/add.html")
  }).catch((err) => {
    console.log(err)
  })



})