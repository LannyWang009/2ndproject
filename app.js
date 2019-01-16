const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
var seedDB = require('./seeds');
var Movie = require('./models/movie');
var Comment = require("./models/comment");
// var Cart = require("./models/cart");

//set it to initial state every time we run the server;
seedDB();
//connect to our mongodb rate_movie databsae;
mongoose.connect("mongodb://localhost:27017/rate_movies", {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");



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