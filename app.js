const express = require("express");
const bp = require("body-parser");
const date = require(__dirname + "/date.js");
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
  let day = date.getdate(); // importing from my package
  res.render("list", {
    //setting up template page from view/list.ejs "list" name of the template file
    place: "Home",
    DayName: day,
    nwItm: itmDatas,
  });
});

app.post("/", (req, res) => {
  let itmData = req.body.item;

  if (req.body.button == "Work") {
    work.push(itmData);
    res.redirect("/work");
  } else {
    itmDatas.push(itmData);
    res.redirect("/");
  }
});

app.get("/work", (req, res) => {
  let day = date.getday(); // importing from my package

  res.render("list", {
    place: "Work",
    DayName: day,
    nwItm: work,
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(3000, () => {
  console.log("Server has started");
});
