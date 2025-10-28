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

-----functions----

3-types
1) function declaration        (Hoisting)
function sum (a,b){
return a+b;
}


2)function expression
const sum = function(a,b){
return a+b;
}

3)arrow functions

const sum = (a,b)=>{
    return a+b;
    }


if you call a function without a parameter when it is required than 
it will not give any error . it will take it as "undefined"

----when you dont know number of arguments than use "...rest" arguements

const sum = function(a,b,...rest) {
    console.log(a+b);  
}

rest = this will give an array


const sum = function(a,b,...rest) {
    let sum = a+b;
   for(let ele of rest){
        sum+=ele;
   }
   return sum;
    
}
console.log(sum(1,2,3,4,5,6,7,8,9,10));

*/

const greet =  function () {
  console.log("Hello, world!");
}
greet(); 



