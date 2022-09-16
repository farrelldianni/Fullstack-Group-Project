const router = require("express").Router();


router.get("/", (req, res) => {
  res.render("login");
});

router.get("/home", (req, res) => {
  res.render("homepage");
});

router.get("/post", (req, res) => {
  res.render("post")
})
module.exports = router;
