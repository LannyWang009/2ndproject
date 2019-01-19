// const mongoose = require('mongoose')
var Movie = require('./models/movie')
var Comment = require('./models/comment')
// var User = require("./models/user");
// var Cart = require("./models/cart");

var data = [
  { title: 'Call Me by Your Name',
    genre: 'Drama, Romance',
    poster: 'https://m.media-amazon.com/images/M/MV5BNDk3NTEwNjc0MV5BMl5BanBnXkFtZTgwNzYxNTMwMzI@._V1_SX300.jpg' },
  { title: 'California',
    genre: 'Romance, Western',
    poster: 'https://m.media-amazon.com/images/M/MV5BNzhhMmM4M2ItMWZhOS00NDUzLTk5ZTAtMjVkM2NiMGMyYWQwXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg' },
  { title: 'Happy',
    genre: 'Documentary, Drama, Family',
    poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1NTg1MzcwM15BMl5BanBnXkFtZTcwMjA2OTU4NQ@@._V1_SX300.jpg' },
  { title:"India: Matri Bhumi", genre:"Documentary, Drama", poster:"http://dummyimage.com/333x500.jpg/ff4444/ffffff"},
  { title:"Harlem Nights", genre:"Comedy, Crime, Romance", poster:"http://dummyimage.com/333x500.jpg/ff4444/ffffff"},
  { title:"Night Crossing", genre:"Drama", poster:"http://dummyimage.com/333x500.jpg/cc0000/ffffff"},
  { title:"Blood on the Moon", genre:"Action, Drama, Western", poster:"http://dummyimage.com/333x500.jpg/5fa2dd/ffffff"},
  { title:"Glass Bottom Boat, The", genre:"Comedy, Romance", poster:"http://dummyimage.com/333x500.jpg/dddddd/000000"},
  { title:"Game of Werewolves", genre:"Comedy, Horror", poster:"http://dummyimage.com/333x500.jpg/5fa2dd/ffffff"},
  { title:"Rendez-vous", genre:"Drama", poster:"http://dummyimage.com/333x500.jpg/dddddd/000000"},
  { title:"Biggles", genre:"Adventure, Fantasy, Sci-Fi", poster:"http://dummyimage.com/333x500.jpg/ff4444/ffffff"},
  { title:"Star Wars Uncut: Director's Cut", genre:"Action, Animation, Comedy, Sci-Fi, Western", poster:"http://dummyimage.com/333x500.jpg/cc0000/ffffff"},
  { title:"Beijing Bicycle (Shiqi sui de dan che)", genre:"Drama", poster:"http://dummyimage.com/333x500.jpg/5fa2dd/ffffff"},
  { title:"Tycoon (Oligarkh)", genre:"Crime, Drama", poster:"http://dummyimage.com/333x500.jpg/5fa2dd/ffffff"},
  { title:"Texas Chainsaw Massacre, The", genre:"Horror", poster:"http://dummyimage.com/333x500.jpg/ff4444/ffffff"},
  { title:"Opportunists, The", genre:"Comedy, Crime, Drama", poster:"http://dummyimage.com/333x500.jpg/5fa2dd/ffffff"},
  { title:"Girl by the Lake, The (La ragazza del lago)", genre:"Drama, Mystery, Thriller", poster:"http://dummyimage.com/333x500.jpg/5fa2dd/ffffff"},
  { title:"Bully", genre:"Crime, Drama, Thriller", poster:"http://dummyimage.com/333x500.jpg/ff4444/ffffff"},
  { title:"Incredible Journey, The", genre:"Adventure, Children", poster:"http://dummyimage.com/333x500.jpg/ff4444/ffffff"},
  { title:"Zeitgeist: Moving Forward", genre:"Documentary", poster:"http://dummyimage.com/333x500.jpg/5fa2dd/ffffff"},
  { title:"Les modèles de 'Pickpocket'", genre:"Documentary", poster:"http://dummyimage.com/333x500.jpg/dddddd/000000"},
  { title:"Maximum Risk", genre:"Action, Adventure, Thriller", poster:"http://dummyimage.com/333x500.jpg/ff4444/ffffff"},
  { title:"Scorned", genre:"Thriller", poster:"http://dummyimage.com/333x500.jpg/dddddd/000000"},
  { title:"Nothing in Common", genre:"Comedy", poster:"http://dummyimage.com/333x500.jpg/cc0000/ffffff"},
  { title:"Dressed to Kill", genre:"Mystery, Thriller", poster:"http://dummyimage.com/333x500.jpg/ff4444/ffffff"},
  { title:"Resan Till Melonia", genre:"Adventure, Animation, Children, Fantasy", poster:"http://dummyimage.com/333x500.jpg/ff4444/ffffff"},
  { title:"Osterman Weekend, The", genre:"Action, Thriller", poster:"http://dummyimage.com/333x500.jpg/5fa2dd/ffffff"},
  { title:"Ellen DeGeneres: The Beginning", genre:"Comedy", poster:"http://dummyimage.com/333x500.jpg/ff4444/ffffff"},
  { title:"Bianca Beauchamp: All Access", genre:"Documentary", poster:"http://dummyimage.com/333x500.jpg/dddddd/000000"},
  { title:"Conquest of Space", genre:"Sci-Fi", poster:"http://dummyimage.com/333x500.jpg/dddddd/000000"},
  { title:"WALL·E", genre:"Adventure, Animation, Children, Romance, Sci-Fi", poster:"http://dummyimage.com/333x500.jpg/ff4444/ffffff"},
  { title:"Singapore Sling (Singapore sling: O anthropos pou agapise ena ptoma)", genre:"Crime, Film-Noir, Horror, Romance, Thriller", poster:"http://dummyimage.com/333x500.jpg/5fa2dd/ffffff"},
  { title:"Arrangement, The", genre:"Drama", poster:"http://dummyimage.com/333x500.jpg/ff4444/ffffff"},
  { title:"Return of the Prodigal Son, The (Návrat ztraceného syna)", genre:"Drama", poster:"http://dummyimage.com/333x500.jpg/cc0000/ffffff"},
  { title:"Unborn in the USA: Inside the War on Abortion", genre:"Documentary", poster:"http://dummyimage.com/333x500.jpg/5fa2dd/ffffff"},
  { title:"Macbeth", genre:"Drama", poster:"http://dummyimage.com/333x500.jpg/dddddd/000000"},
  { title:"Man Escaped, A (Un  condamné à mort s'est échappé ou Le vent souffle où il veut)", genre:"Adventure, Drama", poster:"http://dummyimage.com/333x500.jpg/ff4444/ffffff"},
  { title:"Foxfire", genre:"Drama", poster:"http://dummyimage.com/333x500.jpg/dddddd/000000"},
  { title:"Unbearable Lightness of Being, The", genre:"Drama", poster:"http://dummyimage.com/333x500.jpg/ff4444/ffffff"},
  { title:"Mighty Wind, A", genre:"Comedy, Musical", poster:"http://dummyimage.com/333x500.jpg/5fa2dd/ffffff"},
  { title:"Under Capricorn", genre:"Drama", poster:"http://dummyimage.com/333x500.jpg/ff4444/ffffff"},
  { title:"Brother (Brat)", genre:"Crime, Drama", poster:"http://dummyimage.com/333x500.jpg/cc0000/ffffff"},
  { title:"Dim Sum: A Little Bit of Heart", genre:"Comedy", poster:"http://dummyimage.com/333x500.jpg/dddddd/000000"},
  { title:"Carlito's Way: Rise to Power (Carlito's Way 2: Rise to Power)", genre:"Action, Crime, Drama, Thriller", poster:"http://dummyimage.com/333x500.jpg/ff4444/ffffff"},
  { title:"Jumping the Broom", genre:"Comedy", poster:"http://dummyimage.com/333x500.jpg/cc0000/ffffff"},
  { title:"Gray's Anatomy", genre:"Comedy, Drama", poster:"http://dummyimage.com/333x500.jpg/ff4444/ffffff"},
  { title:"Deathwatch", genre:"Drama, Horror, Thriller, War", poster:"http://dummyimage.com/333x500.jpg/ff4444/ffffff"},
  { title:"Riverworld", genre:"Drama, Sci-Fi", poster:"http://dummyimage.com/333x500.jpg/5fa2dd/ffffff"},
  { title:"Rapture-Palooza", genre:"Comedy, Fantasy", poster:"http://dummyimage.com/333x500.jpg/ff4444/ffffff"},
  { title:"Unbelievers, The", genre:"Documentary", poster:"http://dummyimage.com/333x500.jpg/5fa2dd/ffffff"},
  { title:"Wanted: Dead or Alive", genre:"Action", poster:"http://dummyimage.com/333x500.jpg/cc0000/ffffff"},
  { title:"When the Game Stands Tall", genre:"Drama", poster:"http://dummyimage.com/333x500.jpg/cc0000/ffffff"},
  { title:"Traffic", genre:"Crime, Drama, Thriller", poster:"http://dummyimage.com/333x500.jpg/ff4444/ffffff"},
  { title:"God's Gun", genre:"Western", poster:"http://dummyimage.com/333x500.jpg/dddddd/000000"},
  { title:"Smile", genre:"Comedy", poster:"http://dummyimage.com/333x500.jpg/cc0000/ffffff"},
  { title:"Neighbors", genre:"Comedy", poster:"http://dummyimage.com/333x500.jpg/ff4444/ffffff"},
  { title:"Firaaq", genre:"Drama", poster:"http://dummyimage.com/333x500.jpg/dddddd/000000"},
  { title:"FM", genre:"Drama", poster:"http://dummyimage.com/333x500.jpg/dddddd/000000"},
  { title:"Foxy Brown", genre:"Action, Crime, Drama", poster:"http://dummyimage.com/333x500.jpg/dddddd/000000"},
  { title:"Sabretooth", genre:"Action, Adventure, Horror, Sci-Fi, Thriller", poster:"http://dummyimage.com/333x500.jpg/cc0000/ffffff"},
  { title:"I Drink Your Blood", genre:"Horror", poster:"http://dummyimage.com/333x500.jpg/5fa2dd/ffffff"},
  { title:"Timerider: The Adventure of Lyle Swann", genre:"Action, Adventure, Sci-Fi, Western", poster:"http://dummyimage.com/333x500.jpg/cc0000/ffffff"},
  { title:"Dodes'ka-den (Clickety-Clack)", genre:"Drama, Fantasy", poster:"http://dummyimage.com/333x500.jpg/dddddd/000000"},
  { title:"Candyman", genre:"Horror, Thriller", poster:"http://dummyimage.com/333x500.jpg/5fa2dd/ffffff"},
  { title:"Travelling Salesman", genre:"Drama, Mystery, Sci-Fi, Thriller", poster:"http://dummyimage.com/333x500.jpg/dddddd/000000"},
  { title:"Big Broadcast of 1938, The", genre:"Comedy, Musical, Romance", poster:"http://dummyimage.com/333x500.jpg/cc0000/ffffff"},
  { title:"A-Team, The", genre:"Action, Comedy, Thriller", poster:"http://dummyimage.com/333x500.jpg/dddddd/000000"},
  { title:"Stand Up and Cheer!", genre:"Comedy, Musical", poster:"http://dummyimage.com/333x500.jpg/ff4444/ffffff"},
  { title:"Knight and Day", genre:"Action, Comedy, Thriller", poster:"http://dummyimage.com/333x500.jpg/5fa2dd/ffffff"},
  { title:"Last House on the Left, The", genre:"Drama, Horror, Thriller", poster:"http://dummyimage.com/333x500.jpg/dddddd/000000"},
  { title:"Comfort and Joy", genre:"Comedy", poster:"http://dummyimage.com/333x500.jpg/ff4444/ffffff"},
  { title:"Red Pony, The", genre:"Drama", poster:"http://dummyimage.com/333x500.jpg/dddddd/000000"},
  { title:"Prospero's Books", genre:"Drama, Fantasy", poster:"http://dummyimage.com/333x500.jpg/dddddd/000000"},
  { title:"Blood: The Last Vampire", genre:"Action, Animation, Horror", poster:"http://dummyimage.com/333x500.jpg/5fa2dd/ffffff"},
  { title:"White Dwarf, The (Valkoinen kääpiö)", genre:"Drama", poster:"http://dummyimage.com/333x500.jpg/cc0000/ffffff"},
  { title:"Lawless Breed, The", genre:"Action, Romance, Western", poster:"http://dummyimage.com/333x500.jpg/ff4444/ffffff"},
  { title:"Flowers of Shanghai (Hai shang hua)", genre:"Drama", poster:"http://dummyimage.com/333x500.jpg/cc0000/ffffff"},
  { title:"Saphead, The", genre:"Comedy", poster:"http://dummyimage.com/333x500.jpg/5fa2dd/ffffff"},
  { title:"The Joy of Living", genre:"Comedy", poster:"http://dummyimage.com/333x500.jpg/dddddd/000000"},
  { title:"American Wedding (American Pie 3)", genre:"Comedy", poster:"http://dummyimage.com/333x500.jpg/ff4444/ffffff"},
  { title:"Bird of the Air, A (Loop, The)", genre:"Drama, Romance", poster:"http://dummyimage.com/333x500.jpg/dddddd/000000"},
  { title:"Forever Young", genre:"Drama, Romance, Sci-Fi", poster:"http://dummyimage.com/333x500.jpg/cc0000/ffffff"},
  { title:"Journey to the Center of the Earth", genre:"Action, Adventure, Sci-Fi", poster:"http://dummyimage.com/333x500.jpg/5fa2dd/ffffff"},
  { title:"Jumpin' Jack Flash", genre:"Action, Comedy, Romance, Thriller", poster:"http://dummyimage.com/333x500.jpg/5fa2dd/ffffff"},
  { title:"Densha otoko (Train Man)", genre:"Comedy, Romance", poster:"http://dummyimage.com/333x500.jpg/ff4444/ffffff"},
  { title:"Herr Lehmann", genre:"Comedy, Drama", poster:"http://dummyimage.com/333x500.jpg/ff4444/ffffff"},
  { title:"Johnny Mnemonic", genre:"Action, Sci-Fi, Thriller", poster:"http://dummyimage.com/333x500.jpg/ff4444/ffffff"},
  { title:"En rachâchant", genre:"(no genres listed)", poster:"http://dummyimage.com/333x500.jpg/dddddd/000000"},
  { title:"Combat dans L'Ile, Le (Fire and Ice)", genre:"Drama", poster:"http://dummyimage.com/333x500.jpg/ff4444/ffffff"},
  { title:"The Phantom Light", genre:"Mystery, Thriller", poster:"http://dummyimage.com/333x500.jpg/cc0000/ffffff"},
  { title:"Shakespeare in Love", genre:"Comedy, Drama, Romance", poster:"http://dummyimage.com/333x500.jpg/cc0000/ffffff"},
  { title:"Snake Eyes", genre:"Action, Crime, Mystery, Thriller", poster:"http://dummyimage.com/333x500.jpg/cc0000/ffffff"},
  { title:"Eddie Murphy Delirious", genre:"Comedy, Documentary", poster:"http://dummyimage.com/333x500.jpg/5fa2dd/ffffff"},
  { title:"Phone (Pon)", genre:"Drama, Horror, Mystery, Sci-Fi, Thriller", poster:"http://dummyimage.com/333x500.jpg/ff4444/ffffff"},
  { title:"Halloween", genre:"Horror", poster:"http://dummyimage.com/333x500.jpg/ff4444/ffffff"},
  { title:"Ploy", genre:"Drama", poster:"http://dummyimage.com/333x500.jpg/ff4444/ffffff"},
  { title:"Diary of a Cannibal", genre:"Crime, Horror", poster:"http://dummyimage.com/333x500.jpg/cc0000/ffffff"},
  { title:"Firestorm", genre:"Action, Adventure, Thriller", poster:"http://dummyimage.com/333x500.jpg/ff4444/ffffff"},
  { title:"Ghajini", genre:"Action, Romance, Thriller", poster:"http://dummyimage.com/333x500.jpg/ff4444/ffffff"},
  { title:"Jean-Luc Cinema Godard", genre:"Documentary", poster:"http://dummyimage.com/333x500.jpg/ff4444/ffffff"},
  { title:"Collection, The", genre:"Action, Horror, Thriller", poster:"http://dummyimage.com/333x500.jpg/dddddd/000000"},
  { title:"Compulsion", genre:"Drama, Thriller", poster:"http://dummyimage.com/333x500.jpg/5fa2dd/ffffff"},
  { title:"Bag of Hammers, A", genre:"Comedy, Drama", poster:"http://dummyimage.com/333x500.jpg/cc0000/ffffff"}
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

      // add a few movies
      data.forEach(function (seed) {
        Movie.create(seed, function (err, movie) {
          if (err) {
            console.log(err)
          } else {

            // create a comment
            Comment.create(
              {
                text: 'Total trash.',
                author: 'movie_potato'
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
      })
    })
  })
}

module.exports = seedDB
