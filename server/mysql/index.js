const mysql = require('mysql');

let client = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'login'
});

function sqlFn(sql, arr, callback) {
  client.query(sql, arr, function(error, result) {
    if(error) {
      return;
    }
    callback(result);
  })
}

module.exports = sqlFn;
