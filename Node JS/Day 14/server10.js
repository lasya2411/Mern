//For deleting the text file
var fs=require('fs');

fs.unlink('banana.txt',function(err) {
	if(err) throw err;
	console.log('File Deleted!');
});