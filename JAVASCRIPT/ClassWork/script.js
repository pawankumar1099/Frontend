/*Hoisting in JavaScript

----before execution----

console.log(x);  // Output: undefined
var x = 10;
console.log(x);  // Output: 10



----after execution----

var x;           // Hoisted (only the declaration)
console.log(x);  // undefined
x = 10;          // Assignment
console.log(x);  // 10

----type coercion----

a = (5 == "5");  // true (string is coerced to number)

b = (5 === "5"); // false (no coercion, different types

-----for-of loop----
let arr = [1,2,3,4,5];

for iteration over arrays use for-of loop

for(let num of arr){
    console.log(num);
}

-----falsy values in JavaScript:-----
false
0   
""  (empty string)
null
undefined
NaN

*/

let arr = [1,2,3,4,5];

