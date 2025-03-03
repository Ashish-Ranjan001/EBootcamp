var add = function (a, b) { return (a + b); };
console.log("The sum is".concat(add(4, 8)));
/*
Typescript is the super set of javascript.
when ever the code is compiled it convert it into the olain javascript file.

typescript-->typescript compiler-->javascript

all javascript program is typescript program

TypeScript is a superset of JavaScript.
TypeScript adds type to the JavaScript and helps you avoid potential bugs that occur at runtime.
TypeScript also implements the future features of JavaScript.

-->Why TypeScript
JavaScript is dynamically typed

*/
var message = 'Hello, World!';
console.log(message);
var box;
console.log(typeof (box)); // undefined
box = "Hello";
console.log(typeof (box)); // string
box = 100;
console.log(typeof (box)); // number
