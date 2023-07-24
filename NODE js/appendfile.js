
var fs = require('fs');
fs.appendFile('appendfile.text', 'welcome to GRanny', function(err){

    if (err) throw err;
    console.log('saved!');
});



///if we run ones more will add content///