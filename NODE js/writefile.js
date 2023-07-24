var fs =require('fs');
fs.writeFile('writeFile.txt','welcome to granny ',function(err){

 if (err) throw err;
 console.log('saved!');
});