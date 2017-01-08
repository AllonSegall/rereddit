////////////////////////////////    REQUIRE   //////////////////////////////////

var express = require("express");

////////////////////////////////   ROUTER GET   //////////////////////////////////

var router = express.Router();

router.get("/", function(req, res, next){
  res.send("this is from /!");
});


module.exports = router;
