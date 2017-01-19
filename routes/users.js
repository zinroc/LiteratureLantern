var express = require('express');
var router = express.Router();

var Promise = Promise || require ("bluebird");


var credentials = require("../credentials.js")
var knex = require("knex")({
    client: "pg",
    connection: credentials.PG_CON_STRING
});

var usersStore = require ("../my_node_modules/usersStore.js")(knex);


/* GET users listing. */
router.get('/', function(req, res, next) {
	usersStore.getUser()
	.then(function (rows){
		res.json(rows);
	});
/**
  res.json({
    name: "Patrick",
    last: "Turd"
  });
 **/
});




module.exports = router;
