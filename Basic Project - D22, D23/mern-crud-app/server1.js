const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
mongoose.pluralize(null)

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/tajmahal', {});

const storySchema = new mongoose.Schema({
	sname: String,
	author: String,
	dob: Date,
	address: String
});

const Details = mongoose.model('Story', storySchema);

app.get('/details',async (req, res) => {
	const getitems = await Details.find();
	res.send(getitems);
});

app.get('/details/:id',async (req, res) => {
	const getitem = await Details.findOne({_id:req.params.id});
	res.send(getitem);
});

app.post('/details',async (req, res) => {
	const postitem = new Details(req.body);
	await postitem.save();
	res.send(postitem);
});

app.put('/details/:id',async(req,res) => {
	const putitem = await Details.findByIdAndUpdate(req.params.id, req.body,{new: true});
	res.send(putitem);
});

app.delete('/details/:id',async(req,res) => {
	await Details.findByIdAndDelete(req.params.id);
	res.send({message: 'Item deleted'});
});

app.listen(5000, () => {
	console.log('Server is running on port 5000');
});