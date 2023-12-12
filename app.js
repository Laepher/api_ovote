require("dotenv").config();
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var calonRouter = require("./routes/calon");
var pesertaRouter = require("./routes/peserta");
var voteRouter = require("./routes/vote");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/calon", calonRouter);
app.use("/peserta", pesertaRouter);
app.use("/vote", voteRouter);

module.exports = app;
