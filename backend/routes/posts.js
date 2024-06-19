const express = require('express');
const multer = require('multer');
const Post = require('../models/post');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// Set up multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, '..', 'uploads');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage: storage });

// Create a new post
router.post('/', upload.single('image'), async (req, res) => {
  const { content } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : '';

  try {
    const newPost = new Post({ image, content });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error creating post:', error); // Add detailed error logging
    res.status(500).json({ message: error.message });
  }
});

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error); // Add detailed error logging
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
