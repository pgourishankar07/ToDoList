const express = require("express");
const bp = require("body-parser");
// const path = require("path");
const app = express();

app.set("view engine", "ejs"); //setting a new template engine as ejs
app.use(bp.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static("public"));
// express only serves app.js on the server so to serve css and html files ,we create a folder and
// put all those files inside that folder named public
let itmDatas = ["Study", "JSRead", "BookExercise"];
let work = [];

app.get("/", (req, res) => {
  let date = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  let day = date.toLocaleString("en-US", options);

  res.render("list", {
    //setting up template page from view/list.ejs "list" name of the template file
    place: "Home",
    DayName: day,
    nwItm: itmDatas,
  });
});

app.post("/Home", (req, res) => {
  let itmData = req.body.item;
  itmDatas.push(itmData);
  res.redirect("/"); //again refreshes abd go to app.get
});

app.get("/work", (req, res) => {
  let date = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  let day = date.toLocaleString("en-US", options);

  res.render("list", {
    place: "Work",
    DayName: day,
    nwItm: work,
  });
});

app.post("/work", (req, res) => {
  let itmData = req.body.item;
  work.push(itmData);
  res.redirect("/work"); //again refreshes and go to app.get
});

app.listen(3000, () => {
  console.log("Server has started");
});
