const mongoose = require('mongoose')

// SCHEMA SET UP: make a model "Movie" using the "movieSchema" schema
var movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  poster: String,
  price: Number,
  plot: String,
  actors: String,
  director: String,
  imdbrating: Number,
  awards: String,
  runtime: String,
  year: String,
  comments: [ {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }] // this is to do an object ref between Comment Collection and Movie Collection. This is to create data association
})

module.exports = mongoose.model('Movie', movieSchema)

  // example of inserting an object into the "Movie" model in the db, inserted four movies
  // Movie.create(
  //     {title: "Happy",
  //          genre: "Documentary, Drama, Family",
  //          poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1NTg1MzcwM15BMl5BanBnXkFtZTcwMjA2OTU4NQ@@._V1_SX300.jpg" }, function(err, movie){
  //         if(err){
  //             console.log(err);
  //         } else {
  //             console.log("newly created movie :");
  //             console.log(movie);
  //         }
  //     });

  // var movies = [
  //         {title:"Call Me by Your Name",
  //         genre:"Drama, Romance",
  //         poster:"https://m.media-amazon.com/images/M/MV5BNDk3NTEwNjc0MV5BMl5BanBnXkFtZTgwNzYxNTMwMzI@._V1_SX300.jpg"},
  //         {title: "California",
  //         genre: "Romance, Western",
  //         poster: "https://m.media-amazon.com/images/M/MV5BNzhhMmM4M2ItMWZhOS00NDUzLTk5ZTAtMjVkM2NiMGMyYWQwXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg"},
  //         { title: "Happy",
  //          genre: "Documentary, Drama, Family",
  //          poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1NTg1MzcwM15BMl5BanBnXkFtZTcwMjA2OTU4NQ@@._V1_SX300.jpg"},
  //          {title:"Call Me by Your Name",
  //         genre:"Drama, Romance",
  //         poster:"https://m.media-amazon.com/images/M/MV5BNDk3NTEwNjc0MV5BMl5BanBnXkFtZTgwNzYxNTMwMzI@._V1_SX300.jpg"},
  //         { title: "California",
  //         genre: "Romance, Western",
  //         poster: "https://m.media-amazon.com/images/M/MV5BNzhhMmM4M2ItMWZhOS00NDUzLTk5ZTAtMjVkM2NiMGMyYWQwXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg"},
  //         { title: "Happy",
  //          genre: "Documentary, Drama, Family",
  //          poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1NTg1MzcwM15BMl5BanBnXkFtZTcwMjA2OTU4NQ@@._V1_SX300.jpg"},
  //         {title:"Call Me by Your Name",
  //         genre:"Drama, Romance",
  //         poster:"https://m.media-amazon.com/images/M/MV5BNDk3NTEwNjc0MV5BMl5BanBnXkFtZTgwNzYxNTMwMzI@._V1_SX300.jpg"},
  //         { title: "California",
  //         genre: "Romance, Western",
  //         poster: "https://m.media-amazon.com/images/M/MV5BNzhhMmM4M2ItMWZhOS00NDUzLTk5ZTAtMjVkM2NiMGMyYWQwXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg"},
  //         { title: "Happy",
  //          genre: "Documentary, Drama, Family",
  //          poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1NTg1MzcwM15BMl5BanBnXkFtZTcwMjA2OTU4NQ@@._V1_SX300.jpg"},
  //          {title:"Call Me by Your Name",
  //         genre:"Drama, Romance",
  //         poster:"https://m.media-amazon.com/images/M/MV5BNDk3NTEwNjc0MV5BMl5BanBnXkFtZTgwNzYxNTMwMzI@._V1_SX300.jpg"},
  //         { title: "California",
  //         genre: "Romance, Western",
  //         poster: "https://m.media-amazon.com/images/M/MV5BNzhhMmM4M2ItMWZhOS00NDUzLTk5ZTAtMjVkM2NiMGMyYWQwXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg"},
  //         { title: "Happy",
  //          genre: "Documentary, Drama, Family",
  //          poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1NTg1MzcwM15BMl5BanBnXkFtZTcwMjA2OTU4NQ@@._V1_SX300.jpg"}

  // ];
