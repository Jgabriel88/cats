// asyncBreeds.js
const fs = require('fs');
const breedDetails = require('./syncBreeds');

const breedDetailsFromFile = function (breed, printOutCatBreed) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) printOutCatBreed(data);
    else {
      printOutCatBreed(undefined)
    }
  });
};

const printOutCatBreed = breed => {
  console.log('Return Value: ', breed) // => print out details correctly.
};
// breedDetailsFromFile('bombay', printOutCatBreed);

module.exports = breedDetailsFromFile