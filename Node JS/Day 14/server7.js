//For appending the text file
var fs=require('fs');

fs.appendFile('apple.txt','Hello apple',function(err) {
	if(err) throw err;
	console.log('Updated!');
});