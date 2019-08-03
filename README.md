# Feed Reader Web App including Testing Suite
#### using [Jasmine Testing Framework](https://github.com/jasmine/jasmine)

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Getting started](#getting-started)
* [Useful Links](#useful-links)
* [Additional information](#additional-information)

## Description

This is a web-based Feedreader Application that reads RSS Feeds.

## Installation

Download the `https://github.com/cintogia/feedreader-test/archive/master.zip` to your computer and unzip it. Go to the unzipped folder and open the `index.html` file in your browser.

You can also clone this repository using Git `$ git clone https://github.com/cintogia/feedreader-test.git`. Go to the directory where you cloned the repository and open the `index.html` file in your browser.

## Getting started

#### This site is using [jQuery](https://github.com/jquery/jquery) and [Handlebars.js](https://github.com/wycats/handlebars.js/)

You can find the Feedreader Testing Suite by opening the `/jasmine/spec/feedreader.js` file.
RSS Feeds are stored in the `/js/app.js` file. Additional URLs can be added to the `allFeeds` array by passing a name and url.

#### default URLs are:

```javascript
var allFeeds = [
    {
        name: 'Udacity Blog',
        url: 'http://blog.udacity.com/feed'
    }, {
        name: 'CSS Tricks',
        url: 'http://feeds.feedburner.com/CssTricks'
    }, {
        name: 'HTML5 Rocks',
        url: 'http://feeds.feedburner.com/html5rocks'
    }, {
        name: 'Linear Digressions',
        url: 'http://feeds.feedburner.com/udacity-linear-digressions'
    }
];
```

## Testing Overview

The `feedreader.js` file contains four Testing Suites:

##### RSS Feeds
###### `are defined`
    * Test runs by checking that array.length is not equal to 0

  ###### `URLs are defined`
    * Test runs by checking that value.length of `url` property is not equal to 0

  ###### `names are defined`
    * Test runs by checking that value.length of `url` property is not equal to 0

##### The menu
###### `is hidden by default`
    * Test checks if ```html <body>``` contains `.menu-hidden`

###### `displays and hides onclick`
    * Test checks if menu shows and hides on click by using `click()` jQuery function
    * `click()` on `.menu-icon-link` -> check if ```html <body>``` contains `.menu-hidden`

##### Initial Entries
###### `have loaded`
    * Test checks if URLs have been loaded
    * loads URL using `beforeEach`, looks then if `.entry` classes are greater than 0

##### New Feed Selection
###### `actually changes content`
    * Test checks if loaded Feed Content changes
    * loads two URLs using `beforeEach`, compares then content of both loaded feeds using `.innerText` method

## Useful Links

 * [Jasmine Home](https://jasmine.github.io/)
 * [Jasmine cheatsheet](https://devhints.io/jasmine)
 * [Handlebar.js Home](https://handlebarsjs.com/)
 * [jQuery Home](https://jquery.com/)

## Additional information

This project is part of my @udacity Front-End Web Developer Nanodegree. Original repository can be found [here](https://github.com/udacity/frontend-nanodegree-feedreader)