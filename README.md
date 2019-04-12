# Shop-your-movies
[![Build Status](https://travis-ci.com/LannyWang009/Shop-Your-Movies.svg?branch=master)](https://travis-ci.com/LannyWang009/Shop-Your-Movies)

## Project Description
Shop-your-movies is a suedo e-commerce website for movie lovers to buy classic movie and share anonymous reviews. 

# About

Author: Lanny Wang (lanzhenwang9@gmail.com)

## Tech used

This project used
- Some form of HTML templating
  -  [ejs](https://ejs.co/)

- Some form of data config and schema migration tool
  - Mongoose

- User actions should trigger [CRUD operations](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) against the database.
  - Add new movie, add new comment to movie, add and delete movie to and from user's cart
  - Filter's movies by genre

- Have user authentication using [passport.js](http://www.passportjs.org/) and [passport-local-mongoose](https://www.npmjs.com/package/passport-local-mongoose)

- used cloud c9 to be hosted somewhere publicly reachable via `https`

- Your project must have a `README.md` file written using [Markdown] with at least the following:

- Your repo must be connected to [Travis CI](https://travis-ci.org/):
  - You must have at least one test of an API endpoint that touches the database
  - This tutorial might be helpful: [Test Driven Development with Node](https://mherman.org/blog/test-driven-development-with-node/)
  - Put a build status badge in your `README.md` that links to your latest build
  - Hint: don't forget to test for [StandardJS]!

# Special credit: 
I first followed the YelpCamp example in Colt Steel's Web Dev Udemy course to learn its logic and framework of segmenting a more complicated task. Then I created new routes and built views for the shopping cart. 
 movies
