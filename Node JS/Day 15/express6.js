var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();

app.get('/',function(req,res) {
	res.render('index');
});

app.set('view engine','ejs');
app.set('view','./views')

//for parsing application/json
app.use(bodyParser.json());

//foraprsing application/xww