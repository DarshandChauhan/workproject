var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/DarshanCHauhan', {useNewUrlParser: true } );
var products = [
    new Product({
    imagePath: "https://n3.sdlcdn.com/imgs/a/m/b/GTA-V-PS4-SDL656667419-1-f433a.jpg",
    title: 'Gothic Video Game',
    description: 'Awesome Game!!!!!',
    price: 20
    }),
    new Product({
        imagePath: "https://n3.sdlcdn.com/imgs/a/m/b/GTA-V-PS4-SDL656667419-1-f433a.jpg",
        title: 'Gothic Video Game',
        description: 'Awesome Game!!!!!',
        price: 10
    }),
    new Product({
        imagePath: "https://n3.sdlcdn.com/imgs/a/m/b/GTA-V-PS4-SDL656667419-1-f433a.jpg",
        title: 'Gothic Video Game',
        description: 'Awesome Game!!!!!',
        price: 30
    }),
    new Product({
        imagePath: "https://n3.sdlcdn.com/imgs/a/m/b/GTA-V-PS4-SDL656667419-1-f433a.jpg",
        title: 'Gothic Video Game',
        description: 'Awesome Game!!!!!',
        price: 40
    })
];
var done=0;
for(i=0;i<products.length;i++){
    products[i].save(function(err,result){
        done++;
        if(done===products.length){
            exit();
        }
    });
}
function exit (){
    mongoose.disconnect();
}