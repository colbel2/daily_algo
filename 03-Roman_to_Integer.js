// Given a roman numeral, convert it to an integer.

// i need to save teh roman numeral value as an integer. 
//i obviusly can not go thru every single number to save it. 
//there are 7 different roman numerals, i can save those seven values



// /**
//  * @param {string} s
//  * @return {number}
//  */





var romanToInt = function (s) {                             //function is named romanToInt and has a parameter of a string
    let romanToInt = {                                      // initializing an object, romanToInt with key values
        I: 1,                                               //key values are roman numerals and their associated integer value
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let total = 0;                                          //creating a variable, total, and setting it equal to zero
    for (let i = 0; i < s.length; i++) {                    // simple for loop to get started
        let currentInt = romanToInt[s.charAt(i)];           // currentInt is set to a value using our map. so whatever the current int roman numeral value is will be mapped to its key integer. for test case 1: first int would be M = 1000
        let nextInt = romanToInt[s.charAt(i + 1)];          // next int uses the same logic but adds 1 to view the next int. this will be used for comparison
        if (nextInt) {                                      // if statement for next int begins here if there is another int. if not proceed to else statement
            if (currentInt >= nextInt) {                    // if currentInt is greater than nextInt, proceed to next line
                total += currentInt;                            // if true then add currentInt to total
            } else {                                        // if not then proceed to next 2 lines
                total += (nextInt - currentInt);                // add difference between next int and current int and add too total
                i++;                                            // increment i plue 1. this ends up moving our index 2 spaces when the loop initializes again
            }
        } else {                                            
            total += currentInt;                            // add currentInt to total
        }
    }
    return total;                                           // return our total number which should be our solution
};

console.log(romanToInt("MCMXCVI")); //test case 1
console.log(romanToInt("MMMVI")); //test case 2
console.log(romanToInt("XXXI")); //test case 3

// name function romanToInt and set it with a parameter of a string (s)
// use mapping to save roman numerals and their values with the use of : 
// set variable total at 0 to start
//use a for loop
// us an if statement for when there is a nextInt
    //if currentInt is greater than nextInt add currentInt to total
    // else take the difference between nextInt and currentInt and add to total
    //increment position by 1 here so that we actually move 2 spaces once the for loop is ran thru again
//if there is no nextInt then add current int to total
//return total

