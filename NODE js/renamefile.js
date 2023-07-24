var fs =require('fs');
fs.rename('rename.txt','renamenewfile.txt', function(err){
    if (err) throw err;
    console.log('renamed!');
})