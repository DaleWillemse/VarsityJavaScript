const express = require("express");
const usersRouter = express.Router(); // Note that we are using a method

// Now we are ready to use the model called users
const User = require("../models/user");

// Save to MongoDB
// The requests will come from the REST API client, and the requrest will contain
// a path to the resource. This path is called the endpoint.
// the second argument, is the handler that must be invoked if the method and path
// are matched.
usersRouter.post("/add", async (req, res) => {
  const user_to_save = new User({
    name: req.body.name,
    surname: req.body.surname,
  });

  try {
    let result = await user_to_save.save(); // We can not predict how long this save will take. Run it asynchronously
    res.status(201).json("Done saving the user");
  } catch (error) {
    console.log(error);
  }
});

// Now we are creating a viewing feature
usersRouter.get("/view", async (req, res) => {
  try {
    const result = await User.find(); // We can not predict how long this save will take. Run it asynchronously
    res.json(result);
  } catch (error) {
    console.log(error);
  }
});
// Now we are creating a viewing feature for a specific record
usersRouter.get("/view/:id", async (req, res) => {
  try {
    const result = await User.findById(req.params.id); // We can not predict how long this save will take. Run it asynchronously
    res.json(result);
  } catch (error) {
    console.log(error);
  }
});

module.exports = usersRouter;

// Read from MongoDB
// usersRouter.get();
