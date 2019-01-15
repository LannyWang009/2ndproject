var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var movies = [
        {"title":"Call Me by Your Name",
        "genre":"Drama, Romance",
        "poster":"https://m.media-amazon.com/images/M/MV5BNDk3NTEwNjc0MV5BMl5BanBnXkFtZTgwNzYxNTMwMzI@._V1_SX300.jpg"},
        { "title": "California",
        "genre": "Romance, Western",
        "poster": "https://m.media-amazon.com/images/M/MV5BNzhhMmM4M2ItMWZhOS00NDUzLTk5ZTAtMjVkM2NiMGMyYWQwXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg"},
        { "title": "Happy",
         "genre": "Documentary, Drama, Family",
         "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1NTg1MzcwM15BMl5BanBnXkFtZTcwMjA2OTU4NQ@@._V1_SX300.jpg"},
                 {"title":"Call Me by Your Name",
        "genre":"Drama, Romance",
        "poster":"https://m.media-amazon.com/images/M/MV5BNDk3NTEwNjc0MV5BMl5BanBnXkFtZTgwNzYxNTMwMzI@._V1_SX300.jpg"},
        { "title": "California",
        "genre": "Romance, Western",
        "poster": "https://m.media-amazon.com/images/M/MV5BNzhhMmM4M2ItMWZhOS00NDUzLTk5ZTAtMjVkM2NiMGMyYWQwXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg"},
        { "title": "Happy",
         "genre": "Documentary, Drama, Family",
         "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1NTg1MzcwM15BMl5BanBnXkFtZTcwMjA2OTU4NQ@@._V1_SX300.jpg"},
                 {"title":"Call Me by Your Name",
        "genre":"Drama, Romance",
        "poster":"https://m.media-amazon.com/images/M/MV5BNDk3NTEwNjc0MV5BMl5BanBnXkFtZTgwNzYxNTMwMzI@._V1_SX300.jpg"},
        { "title": "California",
        "genre": "Romance, Western",
        "poster": "https://m.media-amazon.com/images/M/MV5BNzhhMmM4M2ItMWZhOS00NDUzLTk5ZTAtMjVkM2NiMGMyYWQwXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg"},
        { "title": "Happy",
         "genre": "Documentary, Drama, Family",
         "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1NTg1MzcwM15BMl5BanBnXkFtZTcwMjA2OTU4NQ@@._V1_SX300.jpg"},
                {"title":"Call Me by Your Name",
        "genre":"Drama, Romance",
        "poster":"https://m.media-amazon.com/images/M/MV5BNDk3NTEwNjc0MV5BMl5BanBnXkFtZTgwNzYxNTMwMzI@._V1_SX300.jpg"},
        { "title": "California",
        "genre": "Romance, Western",
        "poster": "https://m.media-amazon.com/images/M/MV5BNzhhMmM4M2ItMWZhOS00NDUzLTk5ZTAtMjVkM2NiMGMyYWQwXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg"},
        { "title": "Happy",
         "genre": "Documentary, Drama, Family",
         "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1NTg1MzcwM15BMl5BanBnXkFtZTcwMjA2OTU4NQ@@._V1_SX300.jpg"}
    
];
    
app.get("/", function(req, res){
    res.render("landing");
});

app.get("/movies", function(req, res){
    res.render("movies",{movies:movies});
});

app.post("/movies", function(req, res){
    // get data from form and add to campgrounds array
    var title = req.body.title;
    var genre = req.body.genre;
    var poster = req.body.poster;
    var newMovie = {title: title, genre: genre, poster: poster}
    movies.push(newMovie);
    //redirect back to movies page
    res.redirect("/movies");
});

app.get("/movies/new", function(req, res){
   res.render("new.ejs"); 
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
   console.log("The view-your-movies Server Has Started!");
});