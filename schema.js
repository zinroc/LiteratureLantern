"use strict";

module.exports = function (knex) {
    return {
        createUsersTable: function (){
            return knex.schema.hasTable("users")
            .then(function (exists){
                if(!exists){
                    return knex.schema.createTable("users", function (table){
                        table.increments("id");
                        table.string("name");
                        table.string("last");
                    });
                }
            });
        },
    };
};