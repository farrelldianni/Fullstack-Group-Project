const router = require("express").Router();

//should this be post-routes.js, and comment-routes.js?
const postRoutes = require("./post-routes");
const commentRoutes = require("./comment-routes");

router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);

module.exports = router;