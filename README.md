# Phase 2 Backend Project
#shop-your-movies

##Initial Setup
* Add Landing Page
* Add Movies Page that lists all movies

Each Movie has:
   * Title
   * Genre
   * Poster

#Layout and Basic Styling
* Create our header and footer partials
* Add in Bootstrap

#Creating New movies
* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form

#Style the movies page
* Add a better header/title
* Make movies display in a grid

#Style the Navbar and Form
* Add a navbar to all templates
* Style the new movie form

#Add Mongoose
* Install and configure Mongoose
* Setup campground model
* Use campground model inside of our routes

#Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template

#Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly!

#Add Seeds File
* Add a seeds.js file
* Run the seeds file every time the server starts

#Add the Comment model!
* Make our errors go away!
* Display comments on campground show page

#Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

#Style Show Page
* Add sidebar to show page
* Display comments nicely

#Finish Styling Show Page
* Add public directory
* Add custom stylesheet

##Auth Pt. 1 - Add User Model
* Install all packages needed for auth
* Define User model

##Auth Pt. 2 - Register
* Configure Passport
* Add register routes
* Add register template

##Auth Pt. 3 - Login
* Add login routes
* Add login template

##Auth Pt. 4 - Logout/Navbar
* Add logout route
* Prevent user from adding a comment if not signed in
* Add links to navbar

##Auth Pt. 5 - Show/Hide Links
* Show/hide auth links in navbar correctly

##Refactor The Routes
* Use Express router to reoragnize all routes

##Users + Comments
* Associate users and comments
* Save author's name to a comment automatically


##Users + Movies
* Prevent an unauthenticated user from creating a movie
* Save username+id to newly created movie


# Editing movies
* Add Method-Override
* Add Edit Route for movies
* Add Link to Edit Page
* Add Update Route

#Deleting movies
* Add Destroy Route
* Add Delete button

#Authorization Part 1: movies
* User can only edit his/her movies
* User can only delete his/her movies
* Hide/Show edit and delete buttons

#Editing Comments
* Add Edit route for comments
* Add Edit button
* Add Update route

Campground Edit Route: <!--/movies/:id/edit-->
Comment Edit Route:   <!--/movies/:id/comments/:comment_id/edit-->

#Deleting Comments
* Add Destroy route
* Add Delete button

Campground Destroy Route: /movies/:id
Comment Destroy Route:    /movies/:id/comments/:comment_id

#Authorization Part 2: Comments
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/Show edit and delete buttons
* Refactor Middleware
#Adding in Flash!
* Demo working version
* Install and configure connect-flash
* Add bootstrap alerts to header


RESTFUL ROUTES

name      url      verb    desc.
===============================================
INDEX   /dogs      GET   Display a list of all dogs
NEW     /dogs/new  GET   Displays form to make a new dog
CREATE  /dogs      POST  Add new dog to DB
SHOW    /dogs/:id  GET   Shows info about one dog

INDEX   /campgrounds
NEW     /campgrounds/new
CREATE  /campgrounds
SHOW    /campgrounds/:id

NEW     campgrounds/:id/comments/new    GET
CREATE  campgrounds/:id/comments      POST
------------------------------------------------------

This is the final project for "Phase 2" of the Flex course for [DigitalCrafts]
Houston. It is focused on backend technologies using [Node.js].

> NOTE: You must complete this project in accordance with the requirements laid out
  below in order to fulfill Texas state requirements for credit for the course. If
  you have any questions or concerns about the requirements, please see an
  instructor.

[DigitalCrafts]:https://www.digitalcrafts.com/
[Node.js]:https://nodejs.org/

## Project Description

Your task is to build a copy of an existing web application using the backend
technologies we have learned in Phase 2: [express.js], [PostgreSQL], [knex.js],
etc.

You will not be designing something "new" for this project. Pick something that
already exists and build it from scratch with your team. Examples: a Twitter
clone, a simplified Facebook clone, a basic forum, a small ecommerce website,
etc. The project scope should be well-understood and defined up-front. Please
verify your project plans with an instructor before beginning coding.

You will need some HTML + CSS in order for the application to work, but it is ok
to keep this part simple (hint: use a CSS framework). Focus on thoroughness of
the implementation using backend technologies like `GET` and `POST` requests,
database schema and queries, user authentication, form submission and
validation, HTML templates, etc.

Each team will present their project in class on **Tuesday, Jan 22nd**.

[express.js]:https://expressjs.com/
[PostgreSQL]:https://www.postgresql.org/
[knex.js]:https://knexjs.org/

## Technical Requirements

Your application **must**:

- You must use some form of HTML templating
  - Pure JavaScript functions that return strings, or use [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
  - [mustache](http://mustache.github.io/), [handlebars](https://handlebarsjs.com/), [ejs](https://ejs.co/), [pug](https://pugjs.org/api/getting-started.html), etc

- Your project must be able to swap between database types by using a config file.
  - In other words, your database should not be tied to just PostgresQL
  - Hint: use an abstraction layer like [knex.js](https://knexjs.org/) or [Sequelize](http://docs.sequelizejs.com/)

- Your project must support database [schema migrations](https://en.wikipedia.org/wiki/Schema_migration).

- User actions should trigger [CRUD operations](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) against the database.
  - You must have at least **two** `<form>` submissions that insert or edit data in a database.
  - The forms should handle input validation and show errors in the UI (if necessary)
  - Do not use AJAX for form submission; use a native HTML `<form>` element
  - This [Working with forms](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/forms) tutorial might be helpful

- Have at least one AJAX-based GET endpoint that powers a dynamic dropdown or type-ahead component
  - This part will require some client-side JavaScript
  - Example components:
    - http://autocompletejs.com/examples#2000
    - https://jqueryui.com/autocomplete/#remote

- Have user authentication using [passport.js](http://www.passportjs.org/)
  - must support at least one OAuth provider (Twitter, Facebook, GitHub, etc)
  - must support passport.js "local strategy" backed with a database

- Your project must be hosted somewhere publicly reachable via `https`
  - Note that you do not need to purchase a domain name for your project. But it
    should be reachable via a public URL somewhere.
  - Examples: [Zeit Now](https://zeit.co/now), [Heroku](https://www.heroku.com/), [DigitalOcean](https://www.digitalocean.com/)

- Client-side JavaScript should be less than 200 lines of code.
  - Note: this does not include libraries
  - No cheating by writing all of your JS on one line, etc
  - The focus is backend, not frontend. But you will need some client-side code in some circumstances

- Your project must have a `README.md` file written using [Markdown] with at least the following:
  - Explanation of what the project is / what it does.
  - What technologies you used.
  - List of team members.

- Your repo must be connected to [Travis CI](https://travis-ci.org/):
  - You must have at least one test of an API endpoint that touches the database
  - This tutorial might be helpful: [Test Driven Development with Node](https://mherman.org/blog/test-driven-development-with-node/)
  - Put a build status badge in your `README.md` that links to your latest build
  - Hint: don't forget to test for [StandardJS]!

- Code must follow some organization scheme.
  - Everything cannot be in one super long file.
  - Break different parts of the code into different files / modules.
  - No "spaghetti code".
  - Bonus / optional: consider using a build system with [npm scripts]

[Markdown]:https://guides.github.com/features/mastering-markdown/
[StandardJS]:https://standardjs.com/
[npm scripts]:https://deliciousbrains.com/npm-build-script/

## Workflow Requirements

- Teams will either be solo or groups of 3-5 students and assigned by instructors.

- Create one GitHub repo and add all group members as collaborators.

- Collaborate using Pull Requests (PRs):
  - No one should commit to the master branch directly.
  - Every PR should be reviewed and approved by at least one team member (not the person who originated the PR).
  - PRs should not be merged by the person who opened it (no self-merging).
  - See below for [suggested PR rejection criteria](#suggested-pr-rejection-criteria)

- Project features and bugs should be tracked using GitHub Issues.
  - Use of additional project management tooling (Trello, JIRA, etc) is at your team's discretion

## Suggested PR Rejection Criteria

It's ok to reject a PR or have a PR rejected - that is what the PR process is
for! Remember if your PR is rejected that doesn't mean you are a bad person and
stink at life. It just means that your teammate(s) see something that could be
improved. The PR process is more about sharing knowledge than "you did something
wrong".

Any of the following are valid reasons to reject a PR:

- Breaks the build (Travis CI breaks)
- Does not fulfill feature
- Breaks other feature
- Does not follow team coding style / standards
- Too much to review / large code diff (ie: should be broken up into smaller PRs)
- Code in the PR does not match up with commit message
- Commit message is vague

## Learning Objectives

> TODO: write this section

--------------------------------------------------------------------------------

This requirements document is licensed as [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/):

> You can copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission.
# Example Build System [![Build Status](https://travis-ci.org/oakmac/example-build-system.svg?branch=master)](https://travis-ci.org/oakmac/example-build-system)

This repo contains a simple build + [Travis CI] setup appropriate for a simple website.

It uses [npm scripts] (located in the `package.json` file under the `"scripts"` key) with
some basic tools like [UglifyJS], [StandardJS] and [onchange].

#### First-time Setup

```sh
npm install
```

#### Create a build

The build uses [UglifyJS] to concatenate and then minify all of the files located
in the `src-js/` folder. It creates the `public/js/app.js` file (which is ignored by git).

```sh
npm run build
```

#### Test System

Tests for [StandardJS] compliance for all files located in `src-js/`. A simple `travis.yml`
file is included to run your tests on [Travis CI].

```sh
npm run test
```

#### Watch files for development

Watch for file changes in the `src-js/` folder while developing and automatically
build `public/js/app.js`.

```sh
npm run watch
```

## License

[ISC License](LICENSE.md)

[npm scripts]:https://scotch.io/tutorials/using-npm-as-a-build-tool
[Travis CI]:https://travis-ci.org/
[UglifyJS]:https://github.com/mishoo/UglifyJS2/tree/harmony
[StandardJS]:https://standardjs.com/
[onchange]:https://github.com/Qard/onchange
