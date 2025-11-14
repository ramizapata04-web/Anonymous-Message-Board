'use strict';

const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  removal_code: {
    type: String,
    required: true
  },
  flagged: {
    type: Boolean,
    default: false
  }
});

const postSchema = new mongoose.Schema({
  forum: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  posted_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  is_flagged: {
    type: Boolean,
    default: false
  },
  removal_code: {
    type: String,
    required: true
  },
  comments: [commentSchema]
});

const Post = mongoose.model('Post', postSchema);
const Comment = mongoose.model('Comment', commentSchema);

module.exports = { Post, Comment };