const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const jediArr = [
  {
    name: "Luke Skywalker",
    gender: "Male",
    activity: "Volleyball",
  },
  {
    name: "Obi-Wan Kenobi",
    gender: "Male",
    activity: "Soccer",
  },
  {
    name: "Shaak Ti",
    gender: "Female",
    activity: "Paintball",
  },
  {
    name: "Mace Windu",
    gender: "Male",
    activity: "Gaming",
  },
];

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/add", (req, res) => {
  const newJedi = req.body;
  jediArr.push(newJedi);
  console.log(newJedi.name + " has been added to the array");
  res.redirect("/view");
});

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/view", (req, res) => {
  res.render("view", { jediArr });
});

app.get("/add", (req, res) => {
  res.render("form");
});

app.use((req, res) => {
  res.render("404");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
