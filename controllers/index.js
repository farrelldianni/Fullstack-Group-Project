
const router = require("express").Router();

const apiRoutes = require("../routes/api");

router.use("/api", apiRoutes);

module.exports = router;