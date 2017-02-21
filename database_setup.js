"use strict";

var Promise = Promise || require("bluebird"),
    credentials = require("./credentials.js");

var knex = require("knex")({
    client: "pg",
    connection: credentials.PG_CON_STRING
});



var schema = require("./schema.js")(knex);


module.exports = {
    createTables: function () {
        console.log("Creating tables...");
            // static tables (those which house data not modified by player) first
        return schema.createUsersTable()
           /** .then(schema.createGameState) **/
        .error(function (e) {
            console.error("There was an error creating some tables");
            console.error(e);
        });
    }
};

