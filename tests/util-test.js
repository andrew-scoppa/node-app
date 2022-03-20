const assert = require('assert');
const func_module = require('../src/util')

function testSum() {
  var x = 5;
  var y = 1;
  var expect = x + y;
  var actual = func_module.add_numbers([x, y]);

  console.log('addTwoNumbers() should return the sum of its two parameters.');
  console.log('Expect ' + expect + ' to equal ' + actual + '.');
  
  assert.equal(expect, actual);
}

testSum();
