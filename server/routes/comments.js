const express = require('express')
const Router = express.Router();

const Comment = require('../models/Comment');

Router.post('/saveComment', async (req,res) => {

    const {
        writer,
        postId,
        responseTo,
        content
    } = req.body;

    try {
      const comment = new Comment({
        writer,
        postId,
        responseTo,
        content 
      });
      
      const savedComment = await comment.save();

      res.status(201).json(comment);
    } catch (err) {
        res.status(400).json({msg:'comment could not be saved'})
    }
})

module.exports = Router;