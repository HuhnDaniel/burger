const connection = require("./connection");

const orm = {
    selectAll: function(input, cb) {
        const queryStr = "SELECT * FROM " + input + ";";
        connection.query(queryStr, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },
    insertOne: function() {},
    updateOne: function() {}
}

module.exports = orm;