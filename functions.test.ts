const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('returns an array', () => {
        expect(typeof shuffleArray([1,2,3,4])).toBe("array")
    });
    
    test('length is the same as arguments passed in', () => {
    expect(shuffleArray([1,2,3,4])).toHaveLength(4);
    });
    
    test('contains the same items that were passed in', () => {
        expect(shuffleArray([1,2,3,4])).toContain([1,2,3,4]);
    });
    
    test('items have been shuffled', () => {
        expect(shuffleArray([1,2,3,4])).not.toBe([1,2,3,4]);
    });
})