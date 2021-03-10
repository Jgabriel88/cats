const assert = require('chai').assert;
const breedDetails = require('../syncBreeds');

describe('#breedDetails', () => {
  it('returns breed details for the Bombay breed', () => {
    const bombay = breedDetails('Bombay');

  });

  it('return breed details for the Balinese breed', () => {
    const balinese = breedDetails('Balinese')
  })
});