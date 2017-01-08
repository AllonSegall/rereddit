////////////////////////////////    REQUIRE   //////////////////////////////////

var mongoose = require("mongoose");
// var Comment = require("../models/Comments");


////////////////////////////////    SCHEMA   //////////////////////////////////

var PostSchema = new mongoose.Schema({
  title: String,
  link: String,
  upvotes: {type: Number, default: 0},
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

var Post = mongoose.model("Post", PostSchema);

module.exports = Post;
