var mysql=require('mysql');
var con=mysql.createConnection({

    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"database1"
});
con.connect(function(err){
    if(err) throw err;
    console.log("database connected");

    var sql="CREATE TABLE product(id int(10) primary key auto_increment ,product VARCHAR(255))";
     con.query(sql,function(err,result1){
        if(err) throw err;
        console.log("TABLE CREATED!")

     });
});