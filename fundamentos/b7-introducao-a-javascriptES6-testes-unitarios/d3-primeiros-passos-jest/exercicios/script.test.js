const {sum, myRemove} = require('./script.js');

describe('sum tests',() => { 
test('return sum value', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
});

test('return error if has string', () => {
    expect(() => sum(4, '5')).toThrowError();
});
})

describe('myRemove Tests',() => { 
    test('return expected array', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });

})