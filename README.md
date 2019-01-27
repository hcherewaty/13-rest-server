![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## REST Server

### Author: Heather Cherewaty

### Links and Resources
[![Build Status](https://www.travis-ci.com/hcherewaty/13-rest-server.svg?branch=master)](https://www.travis-ci.com/hcherewaty/13-rest-server)

* [repo](https://github.com/hcherewaty/13-rest-server)
* [travis](https://www.travis-ci.com/hcherewaty/13-rest-server)
* [heroku](https://calm-hamlet-87615.herokuapp.com/)



#### Documentation
* [swagger](https://calm-hamlet-87615.herokuapp.com/docs/config/swagger.json) 
* [jsdoc](https://calm-hamlet-87615.herokuapp.com/docs/) 

### Modules
#### `index.js`

### Setup
#### `.env` requirements
* `PORT` - Defined in ENV
* `MONGODB_URI` - Defined in ENV.

#### Running the app
* `npm start`
* Endpoint: `/`
  * Routes users with get(), post(), put(), delete() requests on server (app.js).
  
#### Tests
* npm test (runs unit tests)
* npm run lint (runs linter tests)
* Test data models both memory based and mongo db based routes
