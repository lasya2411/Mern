const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/merncrud', {});

const itemSchema = new mongoose.Schema({
	name: String
});

const Item = mongoose.model('Things', itemSchema);

app.get('/items',async (req, res) => {
	const getitems = await Item.find();
	res.send(getitems);
});

app.get('/items/:id',async (req, res) => {
	const getitem = await Item.findOne({_id:req.params.id});
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

app.listen(5000, () => {
	console.log('Server is running on port 5000');
});