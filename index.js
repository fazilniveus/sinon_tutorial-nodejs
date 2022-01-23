const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
var bodyParser = require('body-parser')
const { saveUser, getUser } = require("./src/services/user.service")

const app = express();
const username = "root";
const password = "example";
const dbname = "mongo-sinon";

mongoose.connect(
  `mongodb://${username}:${password}@localhost:27017/${dbname}?authSource=admin&readPreference=primary`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", async function () {
  console.log("Connected successfully");
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors());

// Post API to add user to Database
app.post("/", async (req, res, next) => {
  try {
    const { profileId, name, dob, experience } = req.body;
    const user = await saveUser({ profileId, name, dob, experience });   
    res.json({
      message: "Inserted Successfully",
      user: user,
    });
  } catch (err) {
    next(err);
  }
});

// Get API to get user by his profileId
app.get("/:profileId", async (req, res, next) => {
  try {
    const { profileId } = req.params;
    const user = await getUser({ profileId });   
    res.json({
      message: "Fetched Successfully",
      user: user,
    });
  } catch (err) {
    next(err);
  }
});

app.listen(3030, () => {
  console.log("Server started on port 3030");
});
