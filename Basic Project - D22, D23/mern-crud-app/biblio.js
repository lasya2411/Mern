const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
mongoose.pluralize(null);

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/biography', {});

const chiefSchema = new mongoose.Schema({
    cmid: {
        type: Number,
        required: true
    },
    cmname: {
        type: String,
        required: true
    },
    cmdob: {
        type: Date,
        required: true
    },
    mstatus: {
        type: Boolean,
        required: true
    },
    cmsalary: {
        type: Number,
        required: true
    },
    address: {
        type: [{
            city: {
                type: String,
                required: true
            },
            pincode: {
                type: Number,
                required: true
            }
        }],
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    } 
});

const Cmdata = mongoose.model('Cminfo', chiefSchema);

app.get('/Cmdata', async (req, res) => {
    const getitems = await Cmdata.find();
    res.send(getitems);
});

app.get('/Cmdata/:id', async (req, res) => {
    const getitem = await Cmdata.findOne({ _id: req.params.id });
    res.send(getitem);
});

app.post('/Cmdata', async (req, res) => {
    const postitem = new Cmdata(req.body);
    await postitem.save();
    res.send(postitem);
});

app.put('/Cmdata/:id', async (req, res) => {
    const putitem = await Cmdata.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(putitem);
});

app.delete('/Cmdata/:id', async (req, res) => {
    await Cmdata.findByIdAndDelete(req.params.id);
    res.send({ message: 'Item deleted' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});