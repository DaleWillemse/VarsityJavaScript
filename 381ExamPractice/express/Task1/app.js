const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const peopleArr = [
  {
    name: "Marry Poppins",
    gender: "Male",
    job: "Taxi Driver",
  },
  {
    name: "Larry King",
    gender: "Male",
    job: "Journalist",
  },
  {
    name: "Susan Summers",
    gender: "Female",
    job: "Actress",
  },
  {
    name: "Bobby Brown",
    gender: "Male",
    job: "Singer",
  },
];

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/add", (req, res) => {
  const newPerson = req.body;
  peopleArr.push(newPerson);
  console.log(newPerson.name + " has been added to the array");
  res.redirect("/view");
});

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/view", (req, res) => {
  res.render("view", { peopleArr });
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
