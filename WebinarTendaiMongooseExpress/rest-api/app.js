// configuring the environment variables
require("dotenv").config();

const PORT = process.env.PORT;
const HOST = process.env.HOST;
const URL = process.env.URL;

// express is our server
let express = require("express");
let app = express();

// we also need to require the db feature
let mongoose = require("mongoose");

// and connect with error handling
try {
  mongoose.connect(URL); // calling the connect method will set a property called connection with the file handle, for the database.
} catch (error) {
  console.error(error);
}

// identifying the connection
let selectedDatabase = mongoose.connection;

selectedDatabase.on("error", (error) => {
  console.error(error);
});

selectedDatabase.on("open", (error) => {
  console.log("Connected to MongoDB");
});

// configuring the app to use JSON for communication
app.use(express.json());

const usersRouter = require("./routes/index");
app.use("/users", usersRouter);

app.listen(PORT, HOST, () => {
  console.log(`Listening on ${PORT}, and host : ${HOST}`);
});
