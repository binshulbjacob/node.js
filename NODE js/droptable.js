var mysql = require('mysql');
var con = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"database1"

});
con.connect(function(err){
    if(err) throw err;
  var sql = "DROP TABLE customer";
  con.query(sql, function(err,result){
    if(err) throw err;
    console.log("table deleted")
  });
});