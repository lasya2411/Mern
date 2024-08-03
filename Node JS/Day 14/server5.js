//For creating a file if it doesnot exist + reading 
var fs=require('fs');

fs.open('apple.txt','w',function(err,file) {
	if(err) throw err;
	console.log('Saved!');
});