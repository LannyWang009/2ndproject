const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const LocalStrategy = require('passport-local')
// const LocalStrategy = require('passport-local').Strategy

var User = require('./models/user')
var seedDB = require('./seeds')
var Movie = require('./models/movie')
var Comment = require('./models/comment')
// var Cart = require("./models/cart");


// connect to our mongodb rate_movie databsae;
mongoose.connect('mongodb://localhost:27017/rate_movies', { useNewUrlParser: true })
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
// standardjs reccommended version of 'app.use(express.static(__dirname + '/public'))'
app.use('/static', express.static(path.join(__dirname, '/public')))
seedDB();

// PASSPORT CONFIGURATION
app.use(require('express-session')({
  secret: "I don't even like movies!",
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

// login through username
passport.use(new LocalStrategy(User.authenticate()))
// // to login through email
// passport.use(new LocalStrategy({
//   usernameField:'useremail',
//   passwordField:'password'
//   },
//   function(useremail, password, done) {
//     User.findOne({useremail:useremail}, function(err, user){
//       if (err) {return done(err);}
//       if (!user){
//         console.log('bad email')
//         return done(null, false, {message:'Incorrect email'})
//         }
//       if (!user.validPassword(password)) {
//         // it says user.validPassword is not a function
//             return done(null, false, { message: 'Incorrect password.' });
//           }
//             return done(null, user)
//     })
//   }
// ));
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use(function(req, res, next){
  res.locals.currentUser=req.user;
  next();
})


app.get('/', function (req, res) {
  res.render('landing')
})

// Index route - show all movies
app.get('/movies', function (req, res) {
  console.log(req.user)
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
  // find the movie comments with provided id, .populate() can reference documents in other collections, .populate('collection').exec() is
  // to fetch data embedded in the collection
  Movie.findById(req.params.id).populate('comments').exec(function (err, foundMovie) {
    if (err) {
      console.log(err)
    } else {
      console.log(foundMovie)
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

app.get('/movies/:id/comments/new', isLoggedIn, function (req, res) {
  // find movie by id
  Movie.findById(req.params.id, function (err, movie) {
    if (err) {
      console.log(err)
    } else {
      res.render('new-comment', { movie: movie })
    }
  })
})

app.post('/movies/:id/comments', isLoggedIn, function (req, res) {
  // lookup the movie by ID
  Movie.findById(req.params.id, function (err, movie) {
    if (err) {
      console.log(err)
      // redirect to movies show page
      res.redirect('/movies')
    } else {
      // create new comment
      // console.log(req.body.comments)
      Comment.create(req.body.comment, function (err, comment) {
        if (err) {
          console.log(err)
        } else {
          movie.comments.push(comment)
          movie.save()
          res.redirect('/movies/' + movie._id)
        }
      })
      // connet new comment to movie
      // redirect to the movie/show page
    }
  })
})

// ==================
// AUTH ROUTES
// ==================
// show register form
app.get('/register', function(req, res) {
  res.render('register')
})

// send registration info to the server and login
app.post('/register', function(req, res) {
  var newUser = new User({
    username: req.body.username,
    useremail: req.body.useremail
  })

  User.register(newUser, req.body.password, function(err, user) {
    if (err) {
      console.log(err)
      // here we should add an error message in UI
      return res.render('register')
    }
    // res.redirect('/login')
    passport.authenticate('local')(req, res, function() {
      res.redirect('/movies')
    })
  })
})

// show login form
app.get('/login', function (req, res) {
  res.render('login')
})

// app.post("/login", middleware, callback)
app.post('/login', passport.authenticate("local",
  {
    successRedirect: "/movies",
    failureRedirect: "/login"
  }), function(req, res){
  })

// logout route
app.get('/logout', function (req, res) {
  req.logout()
  res.redirect('/movies')
})

app.get('/test', function (req, res) {
  User.find()
    .then(function (user) {
      console.log('users', user)
    })
    .catch(function (err) {
      console.log(err)
    })
})

app.get('/failure', function (req, res) {
  res.render('failure')
})

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/login')
}

app.listen(process.env.PORT || 3000, process.env.IP, function () {
  console.log('The view-your-movies Server Has Started!')
})
