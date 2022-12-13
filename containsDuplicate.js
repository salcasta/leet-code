//Contains Duplicate

/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

var containsDuplicate = function(nums) {
    let sortAscend = nums.sort((a,b) => a - b)
    let sortDecend = nums.sort((a,b) => b - a)
  
    if (nums.length === 1){
      return false 
    }
  
    for(let i = 0; i < nums.length; i++){
      if (sortAscend[i] === sortAscend[i+1]) {
          return true
      }
    }
  
    for(let i = 0; i < nums.length; i++){
      if (sortDecend[i] === sortDecend[i+1]) {
          return true
      } else {
          return false
      }
    }
}