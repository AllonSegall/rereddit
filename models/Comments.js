////////////////////////////////    REQUIRE   //////////////////////////////////

var mongoose = require('mongoose');

////////////////////////////////    SCHEMA   //////////////////////////////////

var CommentSchema = new mongoose.Schema({
  body: String,
  author: String,
  upvotes: {type: Number, default: 0},
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' }
});

var Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
