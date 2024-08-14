/*server.js = database connection, schema creation, api creation - model,controller,router*/
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

/*Use - these packages are used in both front end and backend and all the packages are joined together. */
app.use(cors());
app.use(express.json());

/*12th line establishes connection between nodejs and mongodb */
mongoose.connect('mongodb://localhost:27017/merncrud', {});

/*After establishing the connection, we can write here the schema what was written in user.model.js before */
const itemSchema = new mongoose.Schema({
	name: String
});

/*2nd Item - collection name and itemSchema - variable */
const Item = mongoose.model('Things', itemSchema);

/*After user.model.js, controller.js and routes.js can be written here aswell */
//CRUD OPERATIONS
/* we can keep any name instead of /items and also we can give /items seperately for every method */
/* Base API - localhost:3000/items */
app.get('/items',async (req, res) => {
	const getitems = await Item.find();
	res.send(getitems);
});

app.get('/items/:id',async (req, res) => {
	const getitem = await Item.findOne();
	res.send(getitem);
}); 

app.post('/items',async (req, res) => {
	const postitem = new Item(req.body);
	await postitem.save();
	res.send(postitem);
});

app.put('/items/:id',async(req,res) => {
	const putitem = await Item.findByIdAndUpdate(req.params.id, req.body,{new: true});
	res.send(putitem);
});

app.delete('/items/:id',async(req,res) => {
	await Item.findByIdAndDelete(req.params.id);
	res.send({message: 'Item deleted'});
});

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});