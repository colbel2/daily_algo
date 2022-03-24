// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

// when given a sum i need two numbers in my array to print if they add to the sum. If not it will have no result
// 
//use a for loop it iterate thru my array 
//assign a variable to the current value of index number of my array
//assing a variable to my target number - my value at the current index
//if my array has the value of target - value of index then return my solution


//Map object holds key-value pairs and rememmbers the original insertion order of the keys.  
//map.set(a,x) sets a to the value of x
//map.get(a) retruns the value of x
//map.has(a) returns a boolean (true, false) 


var twoSum = function (nums, target) {          //function parameters include an array (nums) and a target value (integer)
    let map = new Map();                        // create a variable(map) that equals a new Map() object. this Map object will store my key value pairs to recall for my solution
    for (let i = 0; i < nums.length; i ++){     // for loop to iterate thru array of nums
        let num1 = nums[i];                     //create a variable(num1) that equals to the value of the current index of nums array
        let num2 = target - num1;               //create a variable(num2) that equals to the value of our target integer - num1 variable
        if (map.has(num2)){                     // if loop. if map has num2 (meaning it returns true) then move to line 33. if falsue, iterate thru loop again
            return [i, map.get(num2)];          // return index number and num2 index number
        }
        map.set(num1, i);                       //set num 1 as the index position number of the current index position
    }    
};

console.log(twoSum([2,7,11,15],9)); //test case one: expected output [1,0]
console.log(twoSum([12,70,12,37],24)); //test case two: expected output [2,0]
console.log(twoSum([2,7,11,15],8)); //test case three: expected output undefined
console.log(twoSum([1,7,5,3],8)); //test case four: expected output [1,0], [3,2]? not sure if this will work. 

//writing again for practice
// var twoSum = function(nums, target) {
//     let map = new Map();
//     for( i= 0; i <nums.length; i++){
//         let num1 = nums[i];
//         let num2 = target - num1;
//         if( map.has(num2)){
//             return [i, map.get(num2)];
//         }
//         map.set(num1, i);
//     }
// };

//rewrite for practice
var twoSum = function(nums, target){        // function named twoSum has 2 parameters
    let map = new Map();                    // utilizing Map() to save keys and values
    for (i = 0; i < nums.length; i++){      // for loop begins
        let num1 = nums[i];                 // num1 equals the current index value 
        let num2 = target = num1;           // num2 equals the target value - num1 
        if (map.has(num2)){                 // if our nums array has num2 then return current index value and num2. this is our solution
            return [i, map.get(num2)];
        }
        map.set(num1, i);                   // if num2 is not in our array, set num1 as the current index value and procced to for loop
    }
};

