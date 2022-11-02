const utils = require('./utils');

test('shuffleArray returns an array', () => {
    expect(utils.shuffleArray([1,2,3,4])).typeOf.toBe("array")
});

test('shuffleArray length is the same as arguments passed in', () => {
expect(utils.shuffleArray([1,2,3,4])).count.toBe(3);
});

test('shuffleArray contains the same items that were passed in', () => {
    expect(utils.shuffleArray([1,2,3,4])).not.toBe([1,2,3,4]);
});


test('shuffleArray items have been shuffled', () => {
    expect(utils.shuffleArray([1,2,3,4])).not.toMatch([1,2,3,4]);
});