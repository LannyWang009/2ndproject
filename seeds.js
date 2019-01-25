// const mongoose = require('mongoose')
var Movie = require('./models/movie')
var Comment = require('./models/comment')
var User = require('./models/user')
const request = require('request')

// var User = require("./models/user");
// var Cart = require("./models/cart");

var data = [
  { title: 'The Shawshank Redemption', price: 9.99, poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
  { title: 'The Godfather', price: 9.99, poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
  { title: 'The Godfather, part II', price: 9.99, poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
  { title: 'The Dark Knight', price: 9.99, poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
  { title: '12 Angry Men', price: 9.99, poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
  { title: 'Schindler\'s List', price: 9.99, poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
  { title: 'Pulp Fiction', price: 9.99, poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
  { title: 'The Lord of the Rings: The Return of the King', price: 9.99, poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
  { title: 'The Good, the Bad, and the Ugly', price: 9.99, poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
  { title: 'Fight Club', price: 9.99, poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', price: 9.99, poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
  { title: 'Forrest Gump', price: 9.99, poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
  { title: 'Star Wars: Episode V: The Empire Strikes Back ', price: 9.99, poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
  { title: 'Inception', price: 9.99, poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
  { title: 'The Lord of the Rings: The Two Towers', price: 9.99, poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
  { title: 'One Flew Over The Cuckoo\'s Nest', price: 9.99, poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
  { title: 'GoodFellas', price: 9.99, poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
  { title: 'The Matrix', price: 9.99, poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
  { title: 'Seven Samurai', price: 9.99, poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
  { title: 'Star Wars', price: 9.99, poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
  { title: 'City of God', price: 9.99, poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
  { title: 'Se7en', price: 9.99, poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
  { title: 'The Silence of the Lambs ', price: 9.99, poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
  { title: ' It\'s A Wonderful Life', price: 9.99, poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
  { title: 'Whiplash', price: 9.99, poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
  { title: 'Life is Beautiful', price: 9.99, poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
  { title: 'The Usual Suspects', price: 9.99, poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
  { title: 'Leon: The Professional', price: 9.99, poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
  { title: 'Coco', price: 9.99, poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
  { title: 'Spirited Away', price: 9.99, poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
  { title: 'Saving Private Ryan', price: 9.99, poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
  { title: 'Interstellar', price: 9.99, poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
  { title: 'Casablanca', price: 9.99, poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
  { title: 'Terminator 2', price: 9.99, poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
  { title: 'Back to the Future', price: 9.99, poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' }
]
function seedDB () {
  // First, remove all movies
  Movie.remove({}, function (err) {
    if (err) {
      console.log(err)
    }
    console.log('removed movies!')
    // remove all users
    User.remove({}, function (err) {
      if (err) {
        console.log(err)
      } console.log('removed users!')
      // remove all comments
      Comment.remove({}, function (err) {
        if (err) {
          console.log(err)
        }
        console.log('removed comments!')
      })

      data.forEach(function (element) {
        var query = element.title.replace(' ', '+')
        var url = 'https://www.omdbapi.com/?t=' + query + '&apikey=thewdb'
        request(url, function (error, response, body) {
          if (!error && response.statusCode === 200) {
            let result = JSON.parse(body)
            // console.log(result)
            element.genre = result.Genre
            if (result.Poster !== undefined) { element.poster = result.Poster }
            element.plot = result.Plot
            element.actors = result.Actors
            element.director = result.Director
            element.imdbrating = result.imdbRating
            element.awards = result.Awards
            element.runtime = result.Runtime
            element.year = result.Year
            Movie.create(element, function (err, movie) {
              if (err) {
                console.log(err)
              } else {
                // console.log("element:", element)
                // console.log("movie:", movie)

                // create a default comment
                Comment.create(
                  {
                    text: "Very classic movie. Definitely worth your 10 bucks to own it (if you haven't watched it yet).",
                    author: 'movie snob'
                  }, function (err, comment) {
                    if (err) {
                      console.log(err)
                    } else {
                      movie.comments.push(comment)
                      movie.save()
                    }
                  })
              }
            })
          } // if no error {
        }) // for request()
      }) // data foreach
    }) // comment.remove
  }) // movie.remove
}

module.exports = seedDB
