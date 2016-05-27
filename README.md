# Programme Listings

What's on BBC? Find out on https://programme-listings.herokuapp.com/.

## About :tv:

This is a single-page web app that lists all the content fetched from the BBC HTTP API and displays an A-Z listing of programmes with their titles and images.

## Approach :arrow_right:

I decided to go fully JavaScript and solve the problem with an AngularJS front-end and Node.js back-end.

I used a service within Angular to make API calls to the Node server endpoint, which will trigger external API calls to the BBC HTTP API. The server will then receive and parse data from the JSON file, and return a list of programme information to the front-end.

The application has been deployed to Heroku: https://programme-listings.herokuapp.com/.


## Testing :white_check_mark:

The code was written in a TDD manner and has been tested with Karma, Protractor and Mocha.

To run the tests, first of all clone this repo and add dependencies:
```
$ git clone git@github.com:junyuanxue/programmeListings.git
$ cd programmeListings
$ npm install

```

To run Mocha tests for the server:
```
$ npm run mocha
```

To run Karma unit tests:
```
$ npm run karma
```

To run Protractor e2e tests, have 3 tabs open in your terminal under root directory of the project. In the first tab, run:
```
$ webdriver-manager start
```
In the second tab:
```
$ npm start
```
Then finally, in the third tab:
```
$ npm run protractor
```


## Tools :wrench:
* AngularJS
* Node.js
* Express
* jQuery
* Protractor
* Karma
* Mocha
* Chai
* Sinon
* HTML5 & CSS


## Author :cat:
You're not supposed to know who I am as this is a 'blind audition'.

But as no one really wants a zip file, it's hard to stay anonymous with Github, right? Technologies.
