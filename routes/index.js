////////////////////////////////    REQUIRE   //////////////////////////////////

var express = require("express");
var mongoose = require("mongoose");
var Post = require("../models/Posts");
var Comment = require("../models/Comments");


////////////////////////////////   ROUTER GET   //////////////////////////////////

var router = express.Router();

router.get("/", function(req, res, next){
  res.send("this is from /!");
});

router.get("/posts", function(res, res, next){
  Post.find(function(err, posts){
    if (err) { return next(err); }

    res.json(posts);
  });
});


////////////////////////////////   ROUTER POST   //////////////////////////////////

router.post("/", function(req, res, next){
  var post = new Post(req.body);

  post.save(function(err, post){
    if (err) { return next(err); }

    res.json(post)
  });
});

router.post('/posts/:post/comments', function(req, res, next) {
  var comment = new Comment(req.body);
  comment.post = req.post._id;

  comment.save(function(err, comment){
    if (err) { return next(err); }

    req.post.comments.push(comment);
    req.post.save(function(err, post){
      if (err) { return next(err); }

      res.json(comment);
    });
  });
});

////////////////////////////////   ROUTER PARAM   //////////////////////////////////

router.param('post', function(req, res, next, id) {
  var query = Post.findById(id);

  query.exec(function(err, post){
    if (err) { return next(err); }
    if (!post) { return next(new Error("can't find post")); }

    req.post = post;
    return next();
  });
});




module.exports = router;
