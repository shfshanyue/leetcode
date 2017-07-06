/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const numMap = {}
  const len = nums.length

  for (let i=0; i<len; i++) {
    numMap[nums[i]] = i
  }
  for (let i=0; i<len; i++) {
    if (numMap[target-nums[i]]) {
      return [i, numMap[target-nums[i]]]
    }
  }
};

const { assertArrayEqual } = require('./assert')
assertArrayEqual(twoSum([1, 2, 3, 4], 6), [1, 3])
