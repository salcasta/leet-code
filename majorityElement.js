// Majority Element

/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/


var majorityElement = function(nums) {
    let numMap = {},
    count = 0,
    maxNum = null
  
    for(const num of nums){
      numMap[num] = numMap[num] + 1 || 1
    }
  
    for(const num in numMap){
      if(numMap[num] > count){
        count = numMap[num]
        maxNum = num
      }
    }
    return Number(maxNum)
}