var mysql = require(`mysql`);

var connection = mysql.createConnection({
  host: `e764qqay0xlsc4cz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com`,
  port: 3306,
  user: `syfu01o2xzuz5bdn`,
  password: `z1fdw37r7y4jtjol`,
  database: `u4djr46070sps0m8`
});

connection.connect(function(err) {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;