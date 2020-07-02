var mongoose  = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    fullname:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    deviceToken:{
        type: String,
        default: null
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User',UserSchema);

module.exports = User;