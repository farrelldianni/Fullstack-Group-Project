const express = require("express");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require("./config/connection.js");

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");


app.listen(PORT, () => console.log("Now listening"));