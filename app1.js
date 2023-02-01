const express = require("express");
const bp = require("body-parser");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(bp.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  var date = new Date();
  var today = date.getDay();
  var day = "";
  if (today == 6 || today == 0) {
    day = "Weekend";
    // res.sendFile(path.join(__dirname + "/weekend.html"));
  } else {
    day = "Weekday";
    // res.sendFile(path.join(__dirname + "/weekdays.html"));
  }
  res.render("list", { KindOfDay: day });
});

app.listen(3000, () => {
  console.log("Server has started");
});
