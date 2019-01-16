const mongoose = require("mongoose");
var Movie = require("./models/movie");
var Comment = require("./models/comment");
// var User = require("./models/user");
// var Cart = require("./models/cart");


var data = [
        {title:"Call Me by Your Name",
        genre:"Drama, Romance",
        poster:"https://m.media-amazon.com/images/M/MV5BNDk3NTEwNjc0MV5BMl5BanBnXkFtZTgwNzYxNTMwMzI@._V1_SX300.jpg"},
        {title: "California",
        genre: "Romance, Western",
        poster: "https://m.media-amazon.com/images/M/MV5BNzhhMmM4M2ItMWZhOS00NDUzLTk5ZTAtMjVkM2NiMGMyYWQwXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg"},
        { title: "Happy",
         genre: "Documentary, Drama, Family",
         poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1NTg1MzcwM15BMl5BanBnXkFtZTcwMjA2OTU4NQ@@._V1_SX300.jpg"},
         {title:"Call Me by Your Name",
        genre:"Drama, Romance",
        poster:"https://m.media-amazon.com/images/M/MV5BNDk3NTEwNjc0MV5BMl5BanBnXkFtZTgwNzYxNTMwMzI@._V1_SX300.jpg"},
        { title: "California",
        genre: "Romance, Western",
        poster: "https://m.media-amazon.com/images/M/MV5BNzhhMmM4M2ItMWZhOS00NDUzLTk5ZTAtMjVkM2NiMGMyYWQwXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg"},
        { title: "Happy",
         genre: "Documentary, Drama, Family",
         poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1NTg1MzcwM15BMl5BanBnXkFtZTcwMjA2OTU4NQ@@._V1_SX300.jpg"}

];

function seedDB (){
   //First, remove all movies
   Movie.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed movies!");
        //remove all comments
        Comment.remove({}, function(err) {
            if(err){
                console.log(err);
            }
            console.log("removed comments!");

             //add a few movies
            data.forEach(function(seed){
                Movie.create(seed, function(err, movie){
                    if(err){
                        console.log(err)
                    } else {
                        console.log("added a movie");
                        //create a comment
                        Comment.create(
                            {
                                text: "Total trash.",
                                author: "movie_potato"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    movie.comments.push(comment);
                                    movie.save();
                                    console.log("Created new comment");
                                }
                            });
                    }
                });
            });
        });
    });
}

module.exports = seedDB;