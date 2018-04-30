var express = require('express');
var router = express.Router();

/* GET videgames. */
router.get('/videogames', function(req, res) {
  var db = req.db;
  var collection = db.get('videogames');
  collection.find({},{},function(e,docs){
    res.json(docs);
  });
});

module.exports = router;
