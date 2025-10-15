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

*/

// if(0){
//     console.log("hello");
    
// }else{
//     console.log("bye");
    
// }