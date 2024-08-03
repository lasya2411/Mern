const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose');
const Country = new Schema({
	cname: {
		type: String
	},
	cpassword: {
		type: String
	},
	cid: {
		type: Number
	},
	
	caddress: {
		type: String
	}
});

Country.plugin(passportLocalMongoose);

module.exports = mongoose.model('Country',Country)
