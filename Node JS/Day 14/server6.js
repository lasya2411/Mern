//For writing the text into file
var fs=require('fs');

fs.writeFile('apple.txt','I am apple',function(err) {
	if(err) throw err;
	console.log('Saved!');
});