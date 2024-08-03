var express  = require('express')
var app = express();
app.get('/lasya',function(req,res) {
	res.send("Welcome to express js");
});
app.listen(3000);