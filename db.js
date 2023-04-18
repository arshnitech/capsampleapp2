const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'mysampledb.cuceurst1z3t.us-east-1.rds.amazonaws.com', //Copy AWS RDS EndPoint here
  user: 'admin',
  password: 'aA123456',
  database: 'product'
});

module.exports = connection;
