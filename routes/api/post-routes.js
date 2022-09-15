const router = require("express").Router();
const User = require("../../models/User");
const Post = require('../../models/Post')

// get all posts
router.get('/', (req, res) => {
  Post.findAll({
    attributes: ['id', 'title', 'created_at'],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;