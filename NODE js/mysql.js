var mysql =require('mysql');

var con =mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: ""
});

con.connect(function (err){
    if (err) throw err;
    console.log("connected!");

con.query("CREATE DATABASE database1",function(err,result){
    if(err) throw err;
    console.log("database created");

});
});