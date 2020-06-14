const orm = require(`../config/orm`);
const { updateOne } = require(`../config/orm`);

var burger = {
    selectAll: function(cb) {
        orm.selectAll(`burgers`, function(res) {
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne(`burgers`, cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function() {
        orm.updateOne();
    }
}

module.exports = burger;