const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

//connect to our mongodb rate_movie databsae;
mongoose.connect("mongodb://localhost:27017/rate_movies", {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//SCHEMA SET UP: make a model "Movie" using the "movieSchema" schema
var movieSchema = new mongoose.Schema({
    title: String,
    genre: String,
    poster: String
});

var Movie = mongoose.model("Movie", movieSchema);

//example of inserting an object into the "Movie" model in the db, inserted four movies
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

app.get("/", function(req, res){
    res.render("landing");
});

// Index route - show all movies
app.get("/movies", function(req, res){
    //get all movies from the DB;
    // res.render("movies",{movies:movies});
    Movie.find({}, function(err, allMovies){
        if(err) {
            console.log(err); //will do UI handling errors later;
        } else {
            res.render("movies", {movies:allMovies});
        }
    })
});

// CREATE route, add new movie to our database
app.post("/movies", function(req, res){
    // get data from form and add to movies array
    var title = req.body.title;
    var genre = req.body.genre;
    var poster = req.body.poster;
    var newMovie = {title: title, genre: genre, poster: poster}
    //create a new movie and save to the databse
    Movie.create(newMovie, function(err, newlyCreated){
        if(err){
            //send the user to the form page again and show them a message
            console.log(err);
        } else {
            //redirect back to movies page
            res.redirect('./movies');
        }
    })
});

//NEW - show form to create a new movie

app.get("/movies/new", function(req, res){
   res.render("new.ejs");
});

//SHOW - show more info about one specific movie

app.get("/movies/:id", function(req, res){
    //find the movie with provided id
    Movie.findById(req.params.id, function(err, foundMovie){
        if(err){
            console.log(err);
        } else {
        // and render show template with that movie
          res.render("show", {movie: foundMovie});
        }
    });

})

app.listen(process.env.PORT || 3000, process.env.IP, function(){
   console.log("The view-your-movies Server Has Started!");
});