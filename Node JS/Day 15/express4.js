var express = require('express');
var app = express();

app.get('/:id',function(req,res)
{
	res.send('The id you specified is ' + req.params.id);
});

//app.get('/:name',function(req,res){
	//res.send('the id is '+req.params.name);
//});

app.listen(3000);