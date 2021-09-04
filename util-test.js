const assert = require('assert');
const func_module = require('./util')

function testSum() {
  var x = 5;
  var y = 1;
  var sum1 = x + y;
  var sum2 = func_module.add_numbers([5, 6]);

  console.log('addTwoNumbers() should return the sum of its two parameters.');
  console.log('Expect ' + sum1 + ' to equal ' + sum2 + '.');
  
  assert.equal(sum1, sum2);
}

testSum();
