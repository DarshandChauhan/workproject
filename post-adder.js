var Post = require('./models/Post');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/DarshanUser', {useNewUrlParser: true } );

var posts = [
    new Post({
        title: 'Annual function',
        body: '2014 annual function was the best annual function we ever had in our school',
        hashtag: ['schooldays'],
        userid : new mongoose.Types.ObjectId()
    }),
    new Post({
        title: 'orange icecreame',
        body: 'all 90s kids know about the orange icecreame which street venders used to sell',
        hashtag: ['oldmemories'],
        userid : new mongoose.Types.ObjectId()
    })
];

var done=0;
for(i=0;i<posts.length;i++){
    posts[i].save(function(err,result){
        done++;
        if(done===posts.length){
            exit();
        }
    });
}
function exit (){
    mongoose.disconnect();
}