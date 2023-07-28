
var mysql=require('mysql');
var con =mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"database1"

});
con.connect(function(err){
    if(err) throw err;
    console.log("connected!");


    var sql="INSERT INTO product(id, product) VALUES ?";
    var values=[
        ['1','choclate'],
        ['2','biriyani'],
        ['3','icecream'],
        ['4','cakes'],
        

    ];
    con.query(sql,[values], function(err,result){
        if (err) throw err;
        console.log("number of records inserted:"+ result.affectedRows)
    });
});
