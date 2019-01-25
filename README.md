# Phase 2 Backend Project - Rate-your-movies
[![Build Status](https://travis-ci.com/LannyWang009/2ndproject.svg?branch=master)](https://travis-ci.com/LannyWang009/2ndproject)

## Project Description
Rate-your-movies is a website for movie lovers to share anonymous reviews and to shop movies. Users can check IMDB info of movies, add new movies to database, share their comments anonymously, and shop movies.

# Project requirements

This is the final project for "Phase 2" of the Flex course for [DigitalCrafts]
Houston. It is focused on backend technologies using [Node.js].

# About

Author: Lanny Wang (lanzhenwang9@gmail.com)

I built this backend project to fulfill the DC course requirement.

Special credit: I refered to contents from the YelpCamp example in Colt Steel's Web Dev Udemy course.

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


# Building Procedure

# Initial Setup
* Add Landing Page
* Add Movies Page that lists all movies

Each Movie has:
   * Title
   * Genre
   * Year
   * Poster
   -------------
   * Actors
   * Director
   * Awards
   * Runtime
   * imdbRating

# Layout and Basic Styling
* Create our header and footer partials
* Add in Bootstrap

# Creating New movies
* Setup new movie POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form

# Style the movies page
* Add a better header/title
* Make movies display in a grid

# Style the Navbar and Form
* Add a navbar to all templates
* Style the new movie form

# Add Mongoose (branch db1)
* Install and configure Mongoose
* Setup movie model
* Use movie model inside of our routes

# Show Page
* Review the RESTful routes we've seen so far
* Add description to our movie model
* Show db.collection.drop()
* Add a show route/template

# Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly!

# Add Seeds File
* Add a seeds.js file
* Run the seeds file every time the server starts

# Add the Comment model!
* Make our errors go away!
* Display comments on movie show page

# Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form


## RESTFUL ROUTES

name      url      verb    desc.
===============================================
INDEX   /movies
NEW     /movies/new
CREATE  /movies
SHOW    /movies/:id

nested routes:
NEW     movies/:id/comments/new    GET
CREATE  movies/:id/comments      POST

SHOW     users/:id
SHOW     users/:id/cart
CREATE   movies/:id/add     POST  (add movie to cart)
UPDATE   movies/:id/delete  POST (delete movie from cart)
------------------------------------------------------

# Style Show Page
* Add sidebar to show page
* Display comments nicely

# Finish Styling Show Page
* Add public directory
* Add custom stylesheet

## Auth Pt. 1 - Add User Model
* Install all packages needed for auth
* Define User model

## Auth Pt. 2 - Register
* Configure Passport
* Add register routes
* Add register template

## Auth Pt. 3 - Login
* Add login routes
* Add login template

## Auth Pt. 4 - Logout/Navbar
* Add logout route
* Prevent user from adding a comment if not signed in
* Add links to navbar

## Auth Pt. 5 - Show/Hide Links
* Show/hide auth links in navbar correctly

-------------
Haven't done the rest yet.

## Refactor The Routes
* Use Express router to reoragnize all routes

## Users + Comments
* Associate users and comments
* Save author's name to a comment automatically


## Users + Movies
* Prevent an unauthenticated user from creating a movie
* Save username+id to newly created movie


# Editing movies
* Add Method-Override
* Add Edit Route for movies
* Add Link to Edit Page
* Add Update Route

# Deleting movies
* Add Destroy Route
* Add Delete button

# Authorization Part 1: movies
* User can only edit his/her movies
* User can only delete his/her movies
* Hide/Show edit and delete buttons

# Editing Comments
* Add Edit route for comments
* Add Edit button
* Add Update route

Campground Edit Route: <!--/movies/:id/edit-->
Comment Edit Route:   <!--/movies/:id/comments/:comment_id/edit-->

# Deleting Comments
* Add Destroy route
* Add Delete button

Campground Destroy Route: /movies/:id
Comment Destroy Route:    /movies/:id/comments/:comment_id

# Authorization Part 2: Comments
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/Show edit and delete buttons
* Refactor Middleware

# Adding in Flash!
* Demo working version
* Install and configure connect-flash
* Add bootstrap alerts to header

