const express = require('express');
const postsController = require('../controllers/posts');

const router = express.Router();

// GET /posts
router.get('/posts', postsController.getPosts);

module.exports = router;
