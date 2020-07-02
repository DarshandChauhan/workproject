var Hashtag = require('./models/Hashtag');
var User = require('./models/User');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/DarshanUser', {useNewUrlParser: true } );
var db = mongoose.connection;

//console.log(db.users.distinct("userid"));

User.find({},{"userid" : 1},
function(res,result){
    //console.log(result);
    var hashtags = [
        new Hashtag({
            hashtag: 'schooldays',
            follower: result
        }),
        new Hashtag({
            hashtag: 'oldmemories',
            follower: result
        })
    ];
    var done=0;
for(i=0;i<hashtags.length;i++){
    hashtags[i].save(function(err,result){
        done++;
        if(done===hashtags.length){
            exit();
        }
    });
}
    
})



function exit (){
    mongoose.disconnect();
}
