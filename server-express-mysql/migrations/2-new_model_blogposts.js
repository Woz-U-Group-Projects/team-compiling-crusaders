'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "blogposts", deps: []
 *
 **/

var info = {
    "revision": 2,
    "name": "new_model",
    "created": "2021-04-15T20:24:46.265Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "blogposts",
        {

        },
        {}
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
