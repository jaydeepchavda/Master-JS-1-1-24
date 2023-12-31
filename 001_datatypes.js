//   -----------        Methods of primitives

/*  

JavaScript allows us to work with primitives (strings, numbers, etc.) as if they were objects. 
They also provide methods to call as such. We will study those soon, but first we’ll see how it works because, 
of course, primitives are not objects (and here we will make it even clearer).


Is a value of a primitive type.
There are 7 primitive types: string, number, bigint, boolean, symbol, null and undefined.

An object

Is capable of storing multiple values as properties.
Can be created with {}, for instance: {name: "John", age: 30}. 
There are other kinds of objects in JavaScript: functions, for example, are objects.

*/


let john = {
    name: "John",
    sayHi: function() {
      console.log("Hi buddy!");
    }
  };
  
  john.sayHi(); // Hi buddy!


  /* 
//   
A primitive as an object
Here’s the paradox faced by the creator of JavaScript:

There are many things one would want to do with a primitive, like a string or a number.
It would be great to access them using methods.
Primitives must be as fast and lightweight as possible.
  */


let str = "Hello";

console.log( str.toUpperCase() ); // HELLO


let n = 1.23456;

console.log( n.toFixed(2) ); // 1.23



//     ------------        data types     -------------

//  1 Numbers

/* 
Regular numbers in JavaScript are stored in 64-bit format IEEE-754, 
also known as “double precision floating point numbers”.

let billion = 1_000_000_000;
Here the underscore _ plays the role of the “syntactic sugar”, it makes the number more readable. 
The JavaScript engine simply ignores _ between digits, so it’s exactly the same one billion as above.

let billion = 1000000000;
*/

let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes

console.log( 7.3e9 );  // 7.3 billions (same as 7300000000 or 7_300_000_000)


// -3 divides by 1 with 3 zeroes
1e-3 === 1 / 1000; // 0.001

// -6 divides by 1 with 6 zeroes
1.23e-6 === 1.23 / 1000000; // 0.00000123

// an example with a bigger number
1234e-2 === 1234 / 100; // 12.34, decimal point moves 2 times

/* 
Hex, binary and octal numbers
Hexadecimal numbers are widely used in JavaScript to represent colors, encode characters, and for many other things.
 So naturally, there exists a shorter way to write them: 0x and then the number.
  */


 console.log( 0xff ); // 255
console.log( 0xFF ); // 255 (the same, case doesn't matter)


//     ---------   Rounding
// One of the most used operations when working with numbers is rounding.

/* 


Math.floor
Rounds down: 3.1 becomes 3, and -1.1 becomes -2.
Math.ceil
Rounds up: 3.1 becomes 4, and -1.1 becomes -1.
Math.round
Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4, the middle case: 3.5 rounds up to 4 too.
Math.trunc (not supported by Internet Explorer)
Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1.
 
*/
/* 


      Math.floor	Math.ceil	Math.round	Math.trunc
3.1	     3	         4	        3	        3
3.6	     3 	         4	        4	        3
-1.1	-2	        -1	        -1	        -1
-1.6	-2	        -1	        -2	        -1

*/

let num = 1.23456;

console.log( Math.round(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23


//   ---------      parseInt   and     parseFloat    ----------


//  Numeric conversion using a plus + or Number() is strict. If a value is not exactly a number, it fails:


console.log( +"100px" ); // NaN

console.log( parseInt('100px') ); // 100

console.log( parseFloat('12.5em') ); // 12.5


console.log( parseInt('12.3') ); // 12, only the integer part is returned

console.log( parseFloat('12.3.4') ); // 12.3, the second point stops the reading

// Other math functions
// JavaScript has a built-in Math object which contains a small library of smathematical functions and constants.

console.log( Math.random() ); // 0.1234567894322
console.log( Math.random() ); // 0.5435252343232

// Math.max(a, b, c...) and Math.min(a, b, c...)
// Returns the greatest and smallest from the arbitrary number of arguments.


console.log(Math.max(10 ,33, 45));

console.log(Math.min(10 ,34, 34635))

// Math.pow(n, power)
// Returns n raised to the given power.

console.log( Math.pow(2, 10) ); // 2 in power 10 = 1024


/* 
Summary
To write numbers with many zeroes:

Append "e" with the zeroes count to the number. Like: 123e6 is the same as 123 with 6 zeroes 123000000.
A negative number after "e" causes the number to be divided by 1 with given zeroes. E.g. 123e-6 means 0.000123 
(123 millionths).
For different numeral systems:

Can write numbers directly in hex (0x), octal (0o) and binary (0b) systems.
parseInt(str, base) parses the string str into an integer in numeral system with given base, 2 ≤ base ≤ 36.
num.toString(base) converts a number to a string in the numeral system with the given base.
For regular number tests:

isNaN(value) converts its argument to a number and then tests it for being NaN
Number.isNaN(value) checks whether its argument belongs to the number type, and if so, tests it for being NaN
isFinite(value) converts its argument to a number and then tests it for not being NaN/Infinity/-Infinity
Number.isFinite(value) checks whether its argument belongs to the number type, and if so, 
tests it for not being NaN/Infinity/-Infinity

For converting values like 12pt and 100px to a number:

Use parseInt/parseFloat for the “soft” conversion, which reads a number from a string and then returns the value
 they could read before the error.
For fractions:

Round using Math.floor, Math.ceil, Math.trunc, Math.round or num.toFixed(precision).
Make sure to remember there’s a loss of precision when working with fractions.
*/