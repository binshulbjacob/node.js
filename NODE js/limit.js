var mysql=require('mysql');
var con =mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"database1"
})
con.connect(function(err){
    if (err) throw err;
    var sql = "SELECT * FROM customeraddress LIMIT 2,5";
    con.query(sql,function(err,result){
        console.log(result);
    })

});


