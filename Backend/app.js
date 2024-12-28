const express = require("express");

// const bodyParser = require('body-parser');
const cors = require("cors");
const cookieParser = require("cookie-parser");
const db = require("./Db/db.js");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const userroutes = require("./routes/user.routes.js");
const captionroutes = require("./routes/captain.routes.js");

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

db();

// const PORT = process.env.PORT || 3000;
// const MONGO_URI = process.env.MONGO_URI;

app.use("/api/v1/auth", userroutes);
app.use("/api/v1/captain", captionroutes);

module.exports = app;
