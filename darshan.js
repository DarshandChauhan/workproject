var User = require('./models/User');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/DarshanUser', {useNewUrlParser: true } );
var users = [];
var done =0;
fs = require('fs');
fs.readFile('user1-data.json',(err,data)=>{
    if(err) throw err;
    let student = JSON.parse(data);
    //console.log(student[0][0]);
    console.log('length is -> ',student.length);

    for(var i=0;i<student.length;i++){
        var userdata = new User({
            fullname :student[i].fullname,
            username :student[i].username,
            email: student[i].email,
            deviceToken: student[i].deviceToken
        });
        users.push(userdata);
        userdata.save(function(err,result){
            done++;
            if(done===student.length){
                exit();
            }
        });
    }
    //console.log(users);
    //exit();
});

function exit (){
    mongoose.disconnect();
}

