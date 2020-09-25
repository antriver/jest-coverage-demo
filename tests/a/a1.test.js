const A1 = require('../../src/a/a1.js');

describe('A1', () => {
    describe('getName', () => {
        it('Should be A1', () => {
            let a1 = new A1();
            expect(a1.getName()).toBe('A1');
        })
    });
});
