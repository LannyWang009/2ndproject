// const mongoose = require('mongoose')
var Movie = require('./models/movie')
var Comment = require('./models/comment')
const request = require('request')
// var User = require("./models/user");
// var Cart = require("./models/cart");

// var data = [
//   { title: 'Call Me by Your Name',
//     price: 9.99,
//     genre: 'Drama, Romance',
//     poster: 'https://m.media-amazon.com/images/M/MV5BNDk3NTEwNjc0MV5BMl5BanBnXkFtZTgwNzYxNTMwMzI@._V1_SX300.jpg' },
//   { title: 'California',
//     price: 9.99,
//     genre: 'Romance, Western',
//     poster: 'https://m.media-amazon.com/images/M/MV5BNzhhMmM4M2ItMWZhOS00NDUzLTk5ZTAtMjVkM2NiMGMyYWQwXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg' },
//   { title: 'Happy',
//     price: 9.99,
//     genre: 'Documentary, Drama, Family',
//     poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1NTg1MzcwM15BMl5BanBnXkFtZTcwMjA2OTU4NQ@@._V1_SX300.jpg' },
//   { title: 'India: Matri Bhumi', price: 9.99, genre: 'Documentary, Drama', poster: 'http://dummyimage.com/333x500.jpg/ff4444/ffffff' },
//   { title: 'Harlem Nights', price: 9.99, genre: 'Comedy, Crime, Romance', poster: 'http://dummyimage.com/333x500.jpg/ff4444/ffffff' },
//   { title: 'Night Crossing', price: 9.99, genre: 'Drama', poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
//   { title: 'Blood on the Moon', price: 9.99, genre: 'Action, Drama, Western', poster: 'http://dummyimage.com/333x500.jpg/5fa2dd/ffffff' },
//   { title: 'Glass Bottom Boat, The', price: 9.99, genre: 'Comedy, Romance', poster: 'http://dummyimage.com/333x500.jpg/dddddd/000000' },
//   { title: 'Game of Werewolves', price: 9.99, genre: 'Comedy, Horror', poster: 'http://dummyimage.com/333x500.jpg/5fa2dd/ffffff' },
//   { title: 'Rendez-vous', price: 9.99, genre: 'Drama', poster: 'http://dummyimage.com/333x500.jpg/dddddd/000000' },
//   { title: 'Biggles', price: 9.99, genre: 'Adventure, Fantasy, Sci-Fi', poster: 'http://dummyimage.com/333x500.jpg/ff4444/ffffff' },
//   { title: "Star Wars Uncut: Director's Cut", price: 9.99, genre: 'Action, Animation, Comedy, Sci-Fi, Western', poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
//   { title: 'Beijing Bicycle (Shiqi sui de dan che)', price: 9.99, genre: 'Drama', poster: 'http://dummyimage.com/333x500.jpg/5fa2dd/ffffff' },
//   { title: 'Tycoon (Oligarkh)', price: 9.99, genre: 'Crime, Drama', poster: 'http://dummyimage.com/333x500.jpg/5fa2dd/ffffff' },
//   { title: 'Texas Chainsaw Massacre, The', price: 9.99, genre: 'Horror', poster: 'http://dummyimage.com/333x500.jpg/ff4444/ffffff' },
//   { title: 'Opportunists, The', price: 9.99, genre: 'Comedy, Crime, Drama', poster: 'http://dummyimage.com/333x500.jpg/5fa2dd/ffffff' },
//   { title: 'Girl by the Lake, The (La ragazza del lago)', price: 9.99, genre: 'Drama, Mystery, Thriller', poster: 'http://dummyimage.com/333x500.jpg/5fa2dd/ffffff' },
//   { title: 'Bully', price: 9.99, genre: 'Crime, Drama, Thriller', poster: 'http://dummyimage.com/333x500.jpg/ff4444/ffffff' },
//   { title: 'Incredible Journey, The', price: 9.99, genre: 'Adventure, Children', poster: 'http://dummyimage.com/333x500.jpg/ff4444/ffffff' },
//   { title: 'Zeitgeist: Moving Forward', price: 9.99, genre: 'Documentary', poster: 'http://dummyimage.com/333x500.jpg/5fa2dd/ffffff' },
//   { title: "Les modèles de 'Pickpocket'", price: 9.99, genre: 'Documentary', poster: 'http://dummyimage.com/333x500.jpg/dddddd/000000' },
//   { title: 'Maximum Risk', price: 9.99, genre: 'Action, Adventure, Thriller', poster: 'http://dummyimage.com/333x500.jpg/ff4444/ffffff' },
//   { title: 'Scorned', price: 9.99, genre: 'Thriller', poster: 'http://dummyimage.com/333x500.jpg/dddddd/000000' },
//   { title: 'Nothing in Common', price: 9.99, genre: 'Comedy', poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
//   { title: 'Dressed to Kill', price: 9.99, genre: 'Mystery, Thriller', poster: 'http://dummyimage.com/333x500.jpg/ff4444/ffffff' },
//   { title: 'Resan Till Melonia', price: 9.99, genre: 'Adventure, Animation, Children, Fantasy', poster: 'http://dummyimage.com/333x500.jpg/ff4444/ffffff' },
//   { title: 'Osterman Weekend, The', price: 9.99, genre: 'Action, Thriller', poster: 'http://dummyimage.com/333x500.jpg/5fa2dd/ffffff' },
//   { title: 'Ellen DeGeneres: The Beginning', price: 9.99, genre: 'Comedy', poster: 'http://dummyimage.com/333x500.jpg/ff4444/ffffff' },
//   { title: 'Bianca Beauchamp: All Access', price: 9.99, genre: 'Documentary', poster: 'http://dummyimage.com/333x500.jpg/dddddd/000000' },
//   { title: 'Conquest of Space', price: 9.99, genre: 'Sci-Fi', poster: 'http://dummyimage.com/333x500.jpg/dddddd/000000' },
//   { title: 'WALL·E', price: 9.99, genre: 'Adventure, Animation, Children, Romance, Sci-Fi', poster: 'http://dummyimage.com/333x500.jpg/ff4444/ffffff' },
//   { title: 'Singapore Sling (Singapore sling: O anthropos pou agapise ena ptoma)', price: 9.99, genre: 'Crime, Film-Noir, Horror, Romance, Thriller', poster: 'http://dummyimage.com/333x500.jpg/5fa2dd/ffffff' },
//   { title: 'Arrangement, The', price: 9.99, genre: 'Drama', poster: 'http://dummyimage.com/333x500.jpg/ff4444/ffffff' },
//   { title: 'Return of the Prodigal Son, The (Návrat ztraceného syna)', price: 9.99, genre: 'Drama', poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
//   { title: 'Unborn in the USA: Inside the War on Abortion', price: 9.99, genre: 'Documentary', poster: 'http://dummyimage.com/333x500.jpg/5fa2dd/ffffff' },
//   { title: 'Macbeth', price: 9.99, genre: 'Drama', poster: 'http://dummyimage.com/333x500.jpg/dddddd/000000' },
//   { title: "Man Escaped, A (Un  condamné à mort s'est échappé ou Le vent souffle où il veut)", price: 9.99, genre: 'Adventure, Drama', poster: 'http://dummyimage.com/333x500.jpg/ff4444/ffffff' },
//   { title: 'Foxfire', price: 9.99, genre: 'Drama', poster: 'http://dummyimage.com/333x500.jpg/dddddd/000000' },
//   { title: 'Unbearable Lightness of Being, The', price: 9.99, genre: 'Drama', poster: 'http://dummyimage.com/333x500.jpg/ff4444/ffffff' },
//   { title: 'Mighty Wind, A', price: 9.99, genre: 'Comedy, Musical', poster: 'http://dummyimage.com/333x500.jpg/5fa2dd/ffffff' },
//   { title: 'Under Capricorn', price: 9.99, genre: 'Drama', poster: 'http://dummyimage.com/333x500.jpg/ff4444/ffffff' },
//   { title: 'Brother (Brat)', price: 9.99, genre: 'Crime, Drama', poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
//   { title: 'Dim Sum: A Little Bit of Heart', price: 9.99, genre: 'Comedy', poster: 'http://dummyimage.com/333x500.jpg/dddddd/000000' },
//   { title: "Carlito's Way: Rise to Power (Carlito's Way 2: Rise to Power)", price: 9.99, genre: 'Action, Crime, Drama, Thriller', poster: 'http://dummyimage.com/333x500.jpg/ff4444/ffffff' },
//   { title: 'Jumping the Broom', price: 9.99, genre: 'Comedy', poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
//   { title: "Gray's Anatomy", price: 9.99, genre: 'Comedy, Drama', poster: 'http://dummyimage.com/333x500.jpg/ff4444/ffffff' },
//   { title: 'Deathwatch', price: 9.99, genre: 'Drama, Horror, Thriller, War', poster: 'http://dummyimage.com/333x500.jpg/ff4444/ffffff' },
//   { title: 'Riverworld', price: 9.99, genre: 'Drama, Sci-Fi', poster: 'http://dummyimage.com/333x500.jpg/5fa2dd/ffffff' },
//   { title: 'Rapture-Palooza', price: 9.99, genre: 'Comedy, Fantasy', poster: 'http://dummyimage.com/333x500.jpg/ff4444/ffffff' },
//   { title: 'Unbelievers, The', price: 9.99, genre: 'Documentary', poster: 'http://dummyimage.com/333x500.jpg/5fa2dd/ffffff' },
//   { title: 'Wanted: Dead or Alive', price: 9.99, genre: 'Action', poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
//   { title: 'When the Game Stands Tall', price: 9.99, genre: 'Drama', poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
//   { title: 'Traffic', price: 9.99, genre: 'Crime, Drama, Thriller', poster: 'http://dummyimage.com/333x500.jpg/ff4444/ffffff' },
//   { title: "God's Gun", price: 9.99, genre: 'Western', poster: 'http://dummyimage.com/333x500.jpg/dddddd/000000' },
//   { title: 'Smile', price: 9.99, genre: 'Comedy', poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
//   { title: 'Neighbors', price: 9.99, genre: 'Comedy', poster: 'http://dummyimage.com/333x500.jpg/ff4444/ffffff' },
//   { title: 'Firaaq', price: 9.99, genre: 'Drama', poster: 'http://dummyimage.com/333x500.jpg/dddddd/000000' },
//   { title: 'FM', price: 9.99, genre: 'Drama', poster: 'http://dummyimage.com/333x500.jpg/dddddd/000000' },
//   { title: 'Foxy Brown', price: 9.99, genre: 'Action, Crime, Drama', poster: 'http://dummyimage.com/333x500.jpg/dddddd/000000' },
//   { title: 'Sabretooth', price: 9.99, genre: 'Action, Adventure, Horror, Sci-Fi, Thriller', poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
//   { title: 'I Drink Your Blood', price: 9.99, genre: 'Horror', poster: 'http://dummyimage.com/333x500.jpg/5fa2dd/ffffff' },
//   { title: 'Timerider: The Adventure of Lyle Swann', price: 9.99, genre: 'Action, Adventure, Sci-Fi, Western', poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
//   { title: "Dodes'ka-den (Clickety-Clack)", price: 9.99, genre: 'Drama, Fantasy', poster: 'http://dummyimage.com/333x500.jpg/dddddd/000000' },
//   { title: 'Candyman', price: 9.99, genre: 'Horror, Thriller', poster: 'http://dummyimage.com/333x500.jpg/5fa2dd/ffffff' },
//   { title: 'Travelling Salesman', price: 9.99, genre: 'Drama, Mystery, Sci-Fi, Thriller', poster: 'http://dummyimage.com/333x500.jpg/dddddd/000000' },
//   { title: 'Big Broadcast of 1938, The', price: 9.99, genre: 'Comedy, Musical, Romance', poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
//   { title: 'A-Team, The', price: 9.99, genre: 'Action, Comedy, Thriller', poster: 'http://dummyimage.com/333x500.jpg/dddddd/000000' },
//   { title: 'Stand Up and Cheer!', price: 9.99, genre: 'Comedy, Musical', poster: 'http://dummyimage.com/333x500.jpg/ff4444/ffffff' },
//   { title: 'Knight and Day', price: 9.99, genre: 'Action, Comedy, Thriller', poster: 'http://dummyimage.com/333x500.jpg/5fa2dd/ffffff' },
//   { title: 'Last House on the Left, The', price: 9.99, genre: 'Drama, Horror, Thriller', poster: 'http://dummyimage.com/333x500.jpg/dddddd/000000' },
//   { title: 'Comfort and Joy', price: 9.99, genre: 'Comedy', poster: 'http://dummyimage.com/333x500.jpg/ff4444/ffffff' },
//   { title: 'Red Pony, The', price: 9.99, genre: 'Drama', poster: 'http://dummyimage.com/333x500.jpg/dddddd/000000' },
//   { title: "Prospero's Books", price: 9.99, genre: 'Drama, Fantasy', poster: 'http://dummyimage.com/333x500.jpg/dddddd/000000' },
//   { title: 'Blood: The Last Vampire', price: 9.99, genre: 'Action, Animation, Horror', poster: 'http://dummyimage.com/333x500.jpg/5fa2dd/ffffff' },
//   { title: 'White Dwarf, The (Valkoinen kääpiö)', price: 9.99, genre: 'Drama', poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
//   { title: 'Lawless Breed, The', price: 9.99, genre: 'Action, Romance, Western', poster: 'http://dummyimage.com/333x500.jpg/ff4444/ffffff' },
//   { title: 'Flowers of Shanghai (Hai shang hua)', price: 9.99, genre: 'Drama', poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
//   { title: 'Saphead, The', price: 9.99, genre: 'Comedy', poster: 'http://dummyimage.com/333x500.jpg/5fa2dd/ffffff' },
//   { title: 'The Joy of Living', price: 9.99, genre: 'Comedy', poster: 'http://dummyimage.com/333x500.jpg/dddddd/000000' },
//   { title: 'American Wedding (American Pie 3)', price: 9.99, genre: 'Comedy', poster: 'http://dummyimage.com/333x500.jpg/ff4444/ffffff' },
//   { title: 'Bird of the Air, A (Loop, The)', price: 9.99, genre: 'Drama, Romance', poster: 'http://dummyimage.com/333x500.jpg/dddddd/000000' },
//   { title: 'Forever Young', price: 9.99, genre: 'Drama, Romance, Sci-Fi', poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
//   { title: 'Journey to the Center of the Earth', price: 9.99, genre: 'Action, Adventure, Sci-Fi', poster: 'http://dummyimage.com/333x500.jpg/5fa2dd/ffffff' },
//   { title: "Jumpin' Jack Flash", price: 9.99, genre: 'Action, Comedy, Romance, Thriller', poster: 'http://dummyimage.com/333x500.jpg/5fa2dd/ffffff' },
//   { title: 'Densha otoko (Train Man)', price: 9.99, genre: 'Comedy, Romance', poster: 'http://dummyimage.com/333x500.jpg/ff4444/ffffff' },
//   { title: 'Herr Lehmann', price: 9.99, genre: 'Comedy, Drama', poster: 'http://dummyimage.com/333x500.jpg/ff4444/ffffff' },
//   { title: 'Johnny Mnemonic', price: 9.99, genre: 'Action, Sci-Fi, Thriller', poster: 'http://dummyimage.com/333x500.jpg/ff4444/ffffff' },
//   { title: 'En rachâchant', price: 9.99, genre: '(no price: 9.99, genres listed)', poster: 'http://dummyimage.com/333x500.jpg/dddddd/000000' },
//   { title: "Combat dans L'Ile, Le (Fire and Ice)", price: 9.99, genre: 'Drama', poster: 'http://dummyimage.com/333x500.jpg/ff4444/ffffff' },
//   { title: 'The Phantom Light', price: 9.99, genre: 'Mystery, Thriller', poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
//   { title: 'Shakespeare in Love', price: 9.99, genre: 'Comedy, Drama, Romance', poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
//   { title: 'Snake Eyes', price: 9.99, genre: 'Action, Crime, Mystery, Thriller', poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
//   { title: 'Eddie Murphy Delirious', price: 9.99, genre: 'Comedy, Documentary', poster: 'http://dummyimage.com/333x500.jpg/5fa2dd/ffffff' },
//   { title: 'Phone (Pon)', price: 9.99, genre: 'Drama, Horror, Mystery, Sci-Fi, Thriller', poster: 'http://dummyimage.com/333x500.jpg/ff4444/ffffff' },
//   { title: 'Halloween', price: 9.99, genre: 'Horror', poster: 'http://dummyimage.com/333x500.jpg/ff4444/ffffff' },
//   { title: 'Ploy', price: 9.99, genre: 'Drama', poster: 'http://dummyimage.com/333x500.jpg/ff4444/ffffff' },
//   { title: 'Diary of a Cannibal', price: 9.99, genre: 'Crime, Horror', poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' },
//   { title: 'Firestorm', price: 9.99, genre: 'Action, Adventure, Thriller', poster: 'http://dummyimage.com/333x500.jpg/ff4444/ffffff' },
//   { title: 'Ghajini', price: 9.99, genre: 'Action, Romance, Thriller', poster: 'http://dummyimage.com/333x500.jpg/ff4444/ffffff' },
//   { title: 'Jean-Luc Cinema Godard', price: 9.99, genre: 'Documentary', poster: 'http://dummyimage.com/333x500.jpg/ff4444/ffffff' },
//   { title: 'Collection, The', price: 9.99, genre: 'Action, Horror, Thriller', poster: 'http://dummyimage.com/333x500.jpg/dddddd/000000' },
//   { title: 'Compulsion', price: 9.99, genre: 'Drama, Thriller', poster: 'http://dummyimage.com/333x500.jpg/5fa2dd/ffffff' },
//   { title: 'Bag of Hammers, A', price: 9.99, genre: 'Comedy, Drama', poster: 'http://dummyimage.com/333x500.jpg/cc0000/ffffff' }
// ]

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
    // remove all comments
    Comment.remove({}, function (err) {
      if (err) {
        console.log(err)
      }
      console.log('removed comments!')

      data.forEach(function (element) {
        var query = element.title.replace(' ', '+')
        var url = 'https://www.omdbapi.com/?t=' + query + '&apikey=thewdb'
        request(url, function (error, response, body) {
          if (!error && response.statusCode === 200) {
            let result = JSON.parse(body)
            console.log(result)
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
