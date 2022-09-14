const router = require("express").Router();

const postRoutes = require("./post-routes.js");
const commentRoutes = require("./comment-routes.js");

router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);

module.exports = router;