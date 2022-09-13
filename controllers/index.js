const router = require("express").Router();

<<<<<<< HEAD
const homeRoutes = require("./home-routes.js");

router.use("/", homeRoutes);

module.exports = router;

=======
// const apiRoutes = require("./api/");
const homeRoutes = require("./home-routes.js");

router.use("/", homeRoutes);
// router.use("/api", apiRoutes);

module.exports = router;
>>>>>>> 8c9e804c07a1e179039c5765568138fbf5c82e15
