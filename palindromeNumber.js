//Palindrome Number

//Given an integer x, return true if x is a palindrome, and false otherwise.

var isPalindrome = function(x) {
    if (x === Number(x.toString().split('').reverse().join(''))) {
      return true
    } else {
      return false
    }
}
  
  
// isPalindrome(121)
// isPalindrome(-121)
// isPalindrome(10)