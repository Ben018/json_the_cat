const request = require('request');

const breed = process.argv[2];
const url = 'https://api.thecatapi.com/v1/breeds/search?q=';
let parsedJSON = undefined;

// downloads a webpage with user argument
const breedFetcher = function () {
  request(url + breed, (error, response, body) => { // node's request code
    if (error) {
      console.log('error', error);
      return;
    }

    if (response.statusCode !== 200) { // if status code from website is not all good (Code 200)
      console.log('Invalid URL or request failed with status code:', response.statusCode);
      return;
    }

    parsedJSON = JSON.parse(body); // use json.parse to convert string to obeject for readability/reference

    if (parsedJSON.length !== 0) { // use .length to see if object is empty
      console.log(parsedJSON[0].description);

    } else {
      console.log('Breed no found');
    }
  });

};

// calls the function when file is run

breedFetcher(breed);