// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".



// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

// /**
//  * @param {string[]} strs
//  * @return {string}
//  */

//when i have my 3 words in an array i need to iterate thru each letter in a word to map them and each word
//maybe something with saving index 0 as the first letter of the first word as that letter and move on from there to each one




var longestCommonPrefix = function (strs) {
    if (strs.length == 0){                                          //if the length of the string is equal to zero then move to next line. if not then proceed outside of this if statement
        return "";                                                  // return empty string
    }
    let prefix = strs[0];                                           // assign a variable named prefix to index zero of strs
    for (let i = 1; i < strs.length; i++){                          //for loop that starts i at 1. will run as long as i is less than the length of strs and add 1 each time thru the loop. i is set to one because prefix is already 0. we need to compare string 0 with string 1
        while (strs[i].indexOf(prefix) != 0){                       // while loop. use indexOf method which returns the first index at which a given element can be found in the array, or -1 if not present. so strs at current index(which is 1 the first time thru) is not equal to zero move to next line. basiocally continues while the string is not zero o
            console.log(strs[i].indexOf(prefix));
            prefix = prefix.substring(0, prefix.length - 1);        //this removes the last character of the the string
            console.log('Prefix is currently ' + prefix);           //testing purposes
        }
        // console.log('Prefix is currently ' + prefix);
    }
    return prefix
};

console.log(longestCommonPrefix(["flower","flow","flight"])); //test case 1
// console.log(longestCommonPrefix(["tan","trap","truck"])); //test case 2
// console.log(longestCommonPrefix(["liberty","freedom","america"])); //test case 3
// console.log(longestCommonPrefix(["flowers","flower","flowering"])); //test case 4


//longestCommonPrefix is my function saved as a variable with strs as a parameter (meaning it takes strings in an array)
//if my list of string is zero then return an empty string or no solution
//make a variable named prefix and set it as the 0 index value of strs
//use a for loop to iterate thru the strs input, starting at 1 since prefix is 0
//use a while loop inside of the for loop to loop