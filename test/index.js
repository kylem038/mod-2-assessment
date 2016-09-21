const assert = require('chai').assert;
const scoreWord = require('../lib/index.js');

describe('test bundle', function () {
  it('should work', function () {
    assert(true);
  });

  it('has a function scoreWord', function() {
    assert.isFunction(scoreWord, true);
  });

  it('should take the first argument and set it as the word', function() {
    assert.equal(scoreWord('hello', 1), 8);
  });

  it('should take the second argument and set it as the multipler', function() {
    assert.equal(scoreWord('hello', 2), 16);
  });

  it('should return 0 for empty string or null', function() {
    assert.equal(scoreWord(''), 0);
    assert.equal(scoreWord(null), 0);
  });

  it('should strip away any whitespace', function() {
    let word = " hello ";
    assert.equal(scoreWord(word, 1), 8);
  });
});
