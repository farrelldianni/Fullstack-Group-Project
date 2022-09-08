const router = require("express").Router();

const postRoutes = require("./post-routes");
const commentRoutes = require("./comment-routes");

router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);

module.exports = router;