// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

// /**
//  * @param {number} x
//  * @return {boolean}
//  */

// i need to input a number and have it return true or false if it is a palindrome
//i can try a for loop to iterate thru an integer to see if the number is a palindrome.
//i may need to store the numbers in some way to check what they are


// change my input number(x) to a string and save that as a variable
// reverse the string 
// the string needs to be split to individual characters, reversed then rejoined
// convert my number to a string and compare it to my reversed variable via === for a true false return





// Solution #1
var isPalindrome = function (x) {
    let reversed = x.toString().split('').reverse().join('');
    // console.log(reversed); log for testing purpposes to make sure my reversed is a string and that it outputes correctly.
    return (x.toString() === reversed);
};
console.log(isPalindrome(1313131)); //test case 1
console.log(isPalindrome(1222545)); //test case 2
console.log(isPalindrome(22222)); //test case 3


// x is our input. x is a number. 
// reversed is a variable that will hold our number as a string that is also reveresed. 
// i then return x (my number that was inputed to a string and compare it to my reversed variable) 
// using === will return a true or false 
// console log my function with my number input

// rewrite for practice
var isPalindrome = function(x){
    let reverse = x.toString().split('').reverse().join('');
    return (x.string() === reverse);
};