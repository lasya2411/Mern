const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
mongoose.pluralize(null)

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/emptable', {});

const empSchema = new mongoose.Schema({
  eid: Number,
  ename: String,
  eage: Number,
  esalary: Number
});


const Empinfo = mongoose.model('Employee', empSchema);

app.get('/Empinfo',async (req, res) => {
	const getitems = await Empinfo.find();
	res.send(getitems);
});

app.get('/Empinfo/:id',async (req, res) => {
	const getitem = await Empinfo.findOne({_id:req.params.id});
	res.send(getitem);
});

app.post('/Empinfo',async (req, res) => {
	const postitem = new Empinfo(req.body);
	await postitem.save();
	res.send(postitem);
});

app.put('/Empinfo/:id',async(req,res) => {
	const putitem = await Empinfo.findByIdAndUpdate(req.params.id, req.body,{new: true});
	res.send(putitem);
});

app.delete('/Empinfo/:id',async(req,res) => {
	await Empinfo.findByIdAndDelete(req.params.id);
	res.send({message: 'Emp details deleted'});
});

app.listen(5000, () => {
	console.log('Server is running on port 5000');
});