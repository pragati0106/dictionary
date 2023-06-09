
const assert = require('chai').assert;

// Import the function to be tested
const aggregateByDay = require('./demo.js'); 

// Write the unit tests
describe('aggregateByDay', () => {
  it('should return the aggregated values by day', () => {
    const input1 = {
        "2020-01-01":6,
        "2020-01-04":12,
        "2020-01-07":4,
         "2020-01-05": 14,
          "2020-01-06": 2
    };

    const expectedOutput1 = {
        Mon: 2, Tue: 4, Wed: 6, Thu: 8, Fri: 10, Sat: 12, Sun: 14
    };

    const input2 = {
        "2020-01-01":4,
        "2020-01-02":4,
        "2020-01-03":6,
        "2020-01-04":8,
         "2020-01-05":2,
          "2020-01-06":-6,
          "2020-01-07":2,
          "2020-01-08":-2,
      };
      const expectedOutput2 = {
        Mon: -6, Tue: 2, Wed: 2, Thu: 4, Fri: 6, Sat: 8, Sun: 2
      };

      let result = aggregateByDay(input1);

    assert.deepEqual(result, expectedOutput1);

   result = aggregateByDay(input2);
    assert.deepEqual(result, expectedOutput2);
  });
});

