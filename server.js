const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const routes = require("./controllers/");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection.js");
const routes = require("./controllers/");

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));


app.listen(PORT, () => console.log("Now listening"));
