/*
    Test using Mocha with Chai.
    Style using chai Assert eg:
        assert.typeOf(foo, 'string');
        assert.equal(foo, 'bar');
        assert.lengthOf(foo, 3)
        assert.property(tea, 'flavors');
        assert.lengthOf(tea.flavors, 3);
*/
const assert = require('assert'); // New comment 2
const Suminator = require('../libs/suminator');

const suminator = new Suminator();
describe('Mocha buildin assert', () => {
  describe('Array', () => {
    describe('#indexOf()', () => {
      it('should return -1 when the value is not present', () => {
        assert.equal(-1, [1, 2, 3].indexOf(4));
      });
    });
  });
  describe('suminator tests', () => {
    describe('getSum', () => {
      it('2 + 2 should return 4', () => {
        assert.equal(suminator.getSum(2, 2), 4);
      });
      it('2 + (-3) should return -1', () => {
        assert.equal(suminator.getSum(2, -3), -1);
      });
    });
    describe('getSumPlusOne', () => {
      it('2 + 2 + 1 should return 5', () => {
        assert.equal(suminator.getSumPlusOne(2, 2), 5);
      });
      it('2 + (-3) + 1 should return 0', () => {
        assert.equal(suminator.getSumPlusOne(2, -3), 0);
      });
    });

    // describe('getSumPlusTwo', () => {
    //   it('2 + 2 + 2 should return 6', () => {
    //     assert.equal(suminator.getSumPlusTwo(2, 2), 6);
    //   });
    //   it('2 + (-4) + 2 should return 0', () => {
    //     assert.equal(suminator.getSumPlusTwo(2, -4), 0);
    //   });
    // });

    // describe('getSumPlusThree', () => {
    //   it('2 + 2 + 3 should return 7', () => {
    //     assert.equal(suminator.getSumPlusTwo(2, 2), 7);
    //   });
    //   it('2 + (-5) + 3 should return 0', () => {
    //     assert.equal(suminator.getSumPlusTwo(2, -5), 0);
    //   });
    // });

    describe('getSumPlusFour', () => {
      it('2 + 2 + 4 should return 8', () => {
        assert.equal(suminator.getSumPlusFour(2, 2), 8);
      });
      it('2 + (-6) + 4 should return 0', () => {
        assert.equal(suminator.getSumPlusFour(2, -6), 0);
      });
    });

    // describe('getSumPlusFive', () => {
    //   it('2 + 2 + 5 should return 9', () => {
    //     assert.equal(suminator.getSumPlusTwo(2, 2), 7);
    //   });
    //   it('2 + (-7) + 5 should return 0', () => {
    //     assert.equal(suminator.getSumPlusTwo(2, -7), 0);
    //   });
    // });


    describe('getSumTimesTwo', () => {
      it('2 + 2 times 2 should return 8', () => {
        assert.equal(suminator.getSumTimesTwo(2, 2), 8);
      });
    });

    // describe('getSumTimesThree', () => {
    //   it('2 + 2 times 2 should return 12', () => {
    //     assert.equal(suminator.getSumTimesThree(2, 2), 12);
    //   });
    // });

    // describe('getSumTimesFour', () => {
    //   it('2 + 2 times 4 should return 16', () => {
    //     assert.equal(suminator.getSumTimesFour(2, 2), 16);
    //   });
    // });

    // describe('getSumTimesFive', () => {
    //   it('2 + 2 times 5 should return 20', () => {
    //     assert.equal(suminator.getSumTimesFive(2, 2), 20);
    //   });
    // });

    // describe('getSumTimesSix', () => {
    //   it('2 + 2 times 6 should return 24', () => {
    //     assert.equal(suminator.getSumTimesSix(2, 2), 24);
    //   });
    // });

  });
});
