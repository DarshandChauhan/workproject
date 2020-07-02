var mongoose  = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    hashtag:{
        type: Array,
        required: true
    },
    userid:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.model('Post',PostSchema);

module.exports = Post;