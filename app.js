const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
var seedDB = require('./seeds')
var Movie = require('./models/movie')
var Comment = require('./models/comment')
// var Cart = require("./models/cart");

// set it to initial state every time we run the server;
seedDB()
// connect to our mongodb rate_movie databsae;
mongoose.connect('mongodb://localhost:27017/rate_movies', { useNewUrlParser: true })

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
  res.render('landing')
})

// Index route - show all movies
app.get('/movies', function (req, res) {
  // get all movies from the DB;
  // res.render("movies",{movies:movies});
  Movie.find({}, function (err, allMovies) {
    if (err) {
      console.log(err) // will do UI handling errors later;
    } else {
      res.render('movies', { movies: allMovies })
    }
  })
})

// CREATE route, add new movie to our database
app.post('/movies', function (req, res) {
  // get data from form and add to movies array
  var title = req.body.title
  var genre = req.body.genre
  var poster = req.body.poster
  var newMovie = { title: title, genre: genre, poster: poster }
  // create a new movie and save to the databse
  Movie.create(newMovie, function (err, newlyCreated) {
    if (err) {
      // send the user to the form page again and show them a message
      console.log(err)
    } else {
      // redirect back to movies page
      res.redirect('./movies')
    }
  })
})

// NEW - show form to create a new movie

app.get('/movies/new', function (req, res) {
  res.render('new-movie.ejs')
})

// SHOW - show more info about one specific movie

app.get('/movies/:id', function (req, res) {
  // find the movie comments with provided id, .populate() can reference documents in other collections
  Movie.findById(req.params.id).populate("comments").exec(function(err, foundMovie) {
    if (err) {
      console.log(err)
    } else { console.log(foundMovie)
      // and render show template with that movie
      res.render('show-movie', { movie: foundMovie })
    }
  })
})

// before data association
// app.get('/movies/:id', function (req, res) {
//   // find the movie with provided id
//   Movie.findById(req.params.id, function (err, foundMovie) {
//     if (err) {
//       console.log(err)
//     } else {
//       // and render show template with that movie
//       res.render('show', { movie: foundMovie })
//     }
//   })
// })

// ---------------------------------------
// COMMENTS ROUTES
// ---------------------------------------

app.get("/movies/:id/comments/new", function(req, res){
  // find movie by id
  Movie.findById(req.params.id, function(err, movie){
    if(err){
      console.log(err)
    } else {
      res.render("new-comment", {movie:movie})
  }
  })
})

app.post("/movies/:id/comments", function(req, res){
  //lookup the movie by ID
  Movie.findById(req.params.id, function(err, movie){
    if(err){
      console.log(err);
      //redirect to movies show page
      res.redirect('/movies')
    } else {
      //create new comment
      // console.log(req.body.comments)
      Comment.create(req.body.comment, function(err, comment){
        if(err){
          console.log(err)
        } else {
          movie.comments.push(comment);
          movie.save();
          res.redirect('/movies/' + movie._id);
        }
      })
      //connet new comment to movie
      //redirect to the movie/show page
    }
  })

})





app.listen(process.env.PORT || 3000, process.env.IP, function () {
  console.log('The view-your-movies Server Has Started!')
})
