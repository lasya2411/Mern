const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    phone: String,
    is_active:  { type: Boolean, default: false },
    is_verified:  { type: Boolean, default: false },
    is_deleted:  { type: Boolean, default: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
/* UserSchema is a object name 
Schema = tables and columns 
model() is present in mongoose package
User = table name 
timestamps = can tells when it is created and when it is updated */