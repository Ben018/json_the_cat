const request = require('request');

const url = 'https://api.thecatapi.com/v1/breeds/search?q=';
let parsedJSON = undefined;

const fetchBreedDescription = function (breedName, callback) { // refactored main request logic into a function

  // downloads a webpage with user argument
  request(url + breedName, (error, response, body) => { // node's request code
    if (error) {
      callback('error', null);

    }

    if (response.statusCode !== 200) { // if status code from website is not all good (Code 200)
      callback(`Invalid URL or request failed with status code: ${response.statusCode}`, null);
      return;
    }

    parsedJSON = JSON.parse(body); // use json.parse to convert string to obeject for readability/reference

    if (parsedJSON.length !== 0) { // use .length to see if object is empty
      callback(null, parsedJSON[0].description);

    } else {
      callback('Breed no found', null);

    }
  });

};

module.exports = { fetchBreedDescription };
