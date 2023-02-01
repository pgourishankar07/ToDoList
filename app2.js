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
  var type = "";
  switch (today) {
    case 0:
      day = "Sunday";
      type = "Weekend";
      break;
    case 1:
      day = "Monday";
      type = "Weekday";
      break;
    case 2:
      day = "Tueday";
      type = "Weekday";
      break;
    case 3:
      day = "Wednesday";
      type = "Weekday";
      break;
    case 4:
      day = "Thursday";
      type = "Weekday";
      break;
    case 5:
      day = "Friday";
      type = "Weekday";
      break;
    case 6:
      day = "Saturday";
      type = "Weekend";
      break;
  }
  res.render("list", {
    KindOfDay: type,
    DayName: day,
  });
});

app.listen(3000, () => {
  console.log("Server has started");
});
