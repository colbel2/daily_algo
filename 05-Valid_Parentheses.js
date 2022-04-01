// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.


// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false


// Constraints:

// 1 <= s.length <= 104


// /**
//  * @param {string} s
//  * @return {boolean}
//  */



var isValid = function (s) {
    if (s ===""){
        return true;
    }

    if (s.length < 2){
        return false;
    }

    const pairBrkts = {
        "(":")",
        "{":"}",
        "[":"]"
    }

    let stk =[];
    let arr = s.toString().split("");

    for (let i = 0; i < arr.length; i++){
        let br = arr[i];
        if (pairBrkts[br]){
            stk.push(br);
        }
        else{ 
            let chkBr = stk.pop();
            if (pairBrkts[chkBr] != br)
            return false;
        }
    }
    
    if (stk.length > 0){
        return false;
    }
    return true;
};

console.log(isValid("()")); //test case 1
console.log(isValid("(}")); //test case 2
console.log(isValid("{}")); //test case 3
console.log(isValid("[])}")); //test case 4