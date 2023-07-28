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

    var sql="CREATE TABLE user1(id int(10) primary key auto_increment ,name VARCHAR(255),favourite_product VARCHAR(255))";
     con.query(sql,function(err,result1){
        if(err) throw err;
        console.log("TABLE CREATED!")

     });
});