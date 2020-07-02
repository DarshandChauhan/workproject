var mongoose  = require('mongoose');
var Schema = mongoose.Schema;


var HashtagSchema = new Schema({
    hashtag:{
        type: String,
        required: true
    },
    postid:{
        type: [Schema.Types.ObjectId],
        ref: 'Post'
    },
    follower:{
        type:[Schema.Types.ObjectId],
        ref: 'User'
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

const Hashtag = mongoose.model('Hashtag',HashtagSchema);

module.exports = Hashtag;