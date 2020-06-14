const connection = require(`./connection`);

const orm = {
    selectAll: function (input, cb) {
        const queryStr = `SELECT * FROM ${input};`;
        connection.query(queryStr, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },

    insertOne: function (table, cols, vals, cb) {
        const queryStr = `INSERT INTO ${table} (${cols.toString()}) VALUES (?)`;

        connection.query(queryStr, vals, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },

    updateOne: function (table, objColVals, condition, cb) {
        const queryStr = `UPDATE ${table} SET devoured = ${objColVals} WHERE ${condition}`;

        connection.query(queryStr, (err, res) => {
            if (err) throw err;
            cb(res);
        })
    }
}

module.exports = orm;