const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
// const routes = require("./controllers/");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection.js");
const routes = require("./routes/");


app.use(routes);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));


app.use(require("./controllers/"));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});

