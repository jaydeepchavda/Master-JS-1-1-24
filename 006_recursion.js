// recursion

// When a function solves a task, in the process it can call many other functions.
//  A partial case of this is when a function calls itself. That’s called recursion.

function pow(x , n){
    if(n == 1){
        return x;
    }

    else {
        return x * pow(x , n-1);
    }


}

console.log(pow( 2 , 3)) //8

/*

            if n==1  = x
             /
pow(x, n) =
             \
              else     = x * pow(x, n - 1)
 */

/* 
For example, to calculate pow(2, 4) the recursive variant does these steps:

pow(2, 4) = 2 * pow(2, 3)
pow(2, 3) = 2 * pow(2, 2)
pow(2, 2) = 2 * pow(2, 1)
pow(2, 1) = 2
*/

// another way

function pow2(x , n){
    return (n == 1) ? x :x * pow2(x , n-1);
}

console.log(pow2(2,3))


// The execution context and stack

/* 
The information about the process of execution of a running function is stored in its execution context.

The execution context is an internal data structure that contains details about the execution of a function: where the 
control flow is now, the current variables, 
the value of this (we don’t use it here) and few other internal details.
*/


 /* 
 Recursive traversals
Another great application of the recursion is a recursive traversal.
 */

/* 
Summary
Terms:

Recursion is a programming term that means calling a function from itself. 
Recursive functions can be used to solve tasks in elegant ways.

When a function calls itself, that’s called a recursion step. 
The basis of recursion is function arguments that make the task so simple that the function does not make further calls.

A recursively-defined data structure is a data structure that can be defined using itself.

For instance, the linked list can be defined as a data structure consisting of an object referencing a list (or null).

list = { value, next -> list }
Trees like HTML elements tree or the department tree from this chapter are also
 naturally recursive: they have branches and every branch can have other branches.
*/


// factorial number

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  
  console.log( factorial(5) ); // 120


//   Fibonacci numbers
// importance: 5
// The sequence of Fibonacci numbers has the formula Fn = Fn-1 + Fn-2. 
// In other words, the next number is a sum of the two preceding ones.


function fibo(n){
    return n <= 1 ? n :fibo(n-1)+fibo(n-2);
}

  
  console.log( fibo(3) ); // 2
  console.log( fibo(7) ); // 13
  // fib(77); // will be extremely slow!


//   Output a single-linked list

/* 
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {

  alert(list.value); // output the current item

  if (list.next) {
    printList(list.next); // do the same for the rest of the list
  }

}

printList(list);
*/

// Output a single-linked list in the reverse order


/* 
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printReverseList(list) {
  let arr = [];
  let tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    alert( arr[i] );
  }
}

printReverseList(list);
*/



// Rest parameters ...


function sumAll(...args) { // args is the name for the array
    let sum = 0;
  
    for (let arg of args) sum += arg;
  
    return sum;
  }
  
  console.log( sumAll(1) ); // 1
  console.log( sumAll(1, 2) ); // 3
  console.log( sumAll(1, 2, 3) ); // 6


  function showName(firstName, lastName, ...titles) {
    console.log( firstName + ' ' + lastName ); // Julius Caesar
  
    // the rest go into titles array
    // i.e. titles = ["Consul", "Imperator"]
    console.log( titles[0] ); // Consul
    console.log( titles[1] ); // Imperator
    console.log( titles.length ); // 2
  }
  
  showName("Julius", "Caesar", "Consul", "Imperator");

  /* 
  The “arguments” variable
There is also a special array-like object named arguments that contains all arguments by their index.

For instance:

function showName() {
  alert( arguments.length );
  alert( arguments[0] );
  alert( arguments[1] );

  // it's iterable
  // for(let arg of arguments) alert(arg);
}

// shows: 2, Julius, Caesar
showName("Julius", "Caesar");

// shows: 1, Ilya, undefined (no second argument)
showName("Ilya");
  */

// Spread syntax

console.log(Math.max(3,5,6));

let arr = [3, 5, 1];

console.log( Math.max(arr) ); // NaN


// let arr = [3, 5, 1];

console.log(Math.max(...arr)); // 5 (spread turns array into a list of arguments)

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];


console.log( Math.max(...arr1, ...arr2) );


// let arr1 = [1, -2, 3, 4];
// let arr2 = [8, 3, -8, 1];

 console.log( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25


//  Copy an array/object

/* 
let arr = [1, 2, 3];

let arrCopy = [...arr]; // spread the array into a list of parameters
                        // then put the result into a new array

// do the arrays have the same contents?
alert(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true

// are the arrays equal?
alert(arr === arrCopy); // false (not same reference)

// modifying our initial array does not modify the copy:
arr.push(4);
alert(arr); // 1, 2, 3, 4
alert(arrCopy); // 1, 2, 3

let obj = { a: 1, b: 2, c: 3 };

let objCopy = { ...obj }; // spread the object into a list of parameters
                          // then return the result in a new object

// do the objects have the same contents?
alert(JSON.stringify(obj) === JSON.stringify(objCopy)); // true

// are the objects equal?
alert(obj === objCopy); // false (not same reference)

// modifying our initial object does not modify the copy:
obj.d = 4;
alert(JSON.stringify(obj)); // {"a":1,"b":2,"c":3,"d":4}
alert(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}
*/


/* 
Summary
When we see "..." in the code, it is either rest parameters or the spread syntax.

There’s an easy way to distinguish between them:

When ... is at the end of function parameters, it’s “rest parameters” and gathers the rest of the list
 of arguments into an array.
When ... occurs in a function call or alike, it’s called a “spread syntax” and expands an array into a list.
Use patterns:

Rest parameters are used to create functions that accept any number of arguments.
The spread syntax is used to pass an array to functions that normally require a list of many arguments.
Together they help to travel between a list and an array of parameters with ease.

All arguments of a function call are also available in “old-style” arguments: array-like iterable object.
*/

// Variable scope, closure
// JavaScript is a very function-oriented language. It gives us a lot of freedom. A function can be created at any moment,
//  passed as an argument to another function, and then called from a totally different place of code later.



// Code blocks
// If a variable is declared inside a code block {...}, it’s only visible inside that block.

// For example:

{
  // do some job with local variables that should not be seen outside

  let message = "Hello"; // only visible in this block

//   alert(message); // Hello
}

// alert(message); // Error: message is not defined
// We can use this to isolate a piece of code that does its own task, with variables that only belon

// Nested functions
// A function is called “nested” when it is created inside another function.

// It is easily possible to do this with JavaScript.

function sayHiBye(firstName, lastName) {

    // helper nested function to use below
    function getFullName() {
      return firstName + " " + lastName;
    }
  
    // alert( "Hello, " + getFullName() );
    // alert( "Bye, " + getFullName() );
  
  }

/* 
Garbage collection
Usually, a Lexical Environment is removed from memory with all the variables after the function call finishes. 
That’s because there are no references to it. As any JavaScript object, it’s only kept in memory while it’s reachable.
*/


/* 
“var” has no block scope
“var” tolerates redeclarations
“var” variables can be declared below their use
*/

// iife
// “immediately-invoked function expressions”

(function() {

    var message = "Hello";
  
    // alert(message); // Hello
  
  })();



  //syntax error because of parentheses below
// function go() {

// }(); // <-- can't call Function Declaration immediately



// Ways to create IIFE

(function() {
    // alert("Parentheses around the function");
  })();
  
  (function() {
    // alert("Parentheses around the whole thing");
  }());
  
  !function() {
    // alert("Bitwise NOT operator starts the expression");
  }();
  
  +function() {
    // alert("Unary plus starts the expression");
  }();


//   Global object
// The global object provides variables and functions that are available anywhere.
//  By default, those that are built into the language or the environment.


// alert("Hello");
// is the same as
// window.alert("Hello");

var gVar = 5;

console.log(globalThis.gVar); // 5 (became a property of the global object)


// n a browser it is named window, for Node.js it is global, for other environments it may have another name.

// Recently, globalThis was added to the language, as a standardized name for a global object, 
// that should be supported across all environments. It’s supported in all major browsers.

/* 

Summary
The global object holds variables that should be available everywhere.

That includes JavaScript built-ins, such as Array and environment-specific values,
 such as window.innerHeight – the window height in the browser.

The global object has a universal name globalThis.

…But more often is referred by “old-school” environment-specific names, such as window (browser) and global (Node.js).

We should store values in the global object only if they’re truly global for our project. And keep their number at minimum.

In-browser, unless we’re using modules, global functions and variables declared with var become a property of the global 
object.

To make our code future-proof and easier to understand, we should access properties of the global object directly, 
as window.x.*/

// Lexical Environment'

/* 
Step 1. Variables
In JavaScript, every running function, code block {...}, and the script as a whole have an internal
 (hidden) associated object known as the Lexical Environment.

The Lexical Environment object consists of two parts:

Environment Record – an object that stores all local variables as its properties 
(and some other information like the value of this).
A reference to the outer lexical environment, the one associated with the outer code.
A “variable” is just a property of the special internal object, Environment Record.
 “To get or change a variable” means “to get or change
 a property of that object”.
When the script starts, the Lexical Environment is pre-populated with all declared variables.
Initially, they are in the “Uninitialized” state. That’s a special internal state, 
it means that the engine knows about the variable, but it cannot be referenced until
 it has been declared with let. It’s almost the same as if the variable didn’t exist.
Then let phrase definition appears. There’s no assignment yet, so its value is undefined.
 We can use the variable from this point forward.
phrase is assigned a value.
phrase changes the value.


Step 2. Function Declarations
A function is also a value, like a variable.

The difference is that a Function Declaration is instantly fully initialized.

When a Lexical Environment is created, a Function Declaration immediately 
becomes a ready-to-use function (unlike let, that is unusable till the declaration).

Step 3. Inner and outer Lexical Environment
When a function runs, at the beginning of the call, a new Lexical Environment is created
 automatically to store local variables and parameters of the call.


 When the code wants to access a variable – the inner Lexical Environment is searched first,
  then the outer one, then the more outer one and so on until the global one.


  Step 4. Returning a function
Let’s return to the makeCounter example.

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();


A variable is updated in the Lexical Environment where it lives.
*/

/* 
Closure
There is a general programming term “closure”, that developers generally should know.

A closure is a function that remembers its outer variables and can access them. In some languages, that’s not possible, 
or a function should be written in a special way to make it happen. But as explained above, in JavaScript, 
all functions are naturally closures (there is only one exception, to be covered in The "new Function" syntax).

That is: they automatically remember where they were created using a hidden [[Environment]] property, 
and then their code can access outer variables.

When on an interview, a frontend developer gets a question about “what’s a closure?”, a valid answer would be
 a definition of the closure and an explanation that all functions in JavaScript are closures, and maybe a few
  more words about technical details: the [[Environment]] property and how Lexical Environments work.
*/


/* 

//  ---------------     The "new Function" syntax
There’s one more way to create a function. It’s rarely used, but sometimes there’s no alternative.

Syntax
The syntax for creating a function:

let func = new Function ([arg1, arg2, ...argN], functionBody);



*/

let sum = new Function('a', 'b', 'return a + b');

alert( sum(1, 2) ); // 3

/* 
Summary
The syntax:

let func = new Function ([arg1, arg2, ...argN], functionBody);
For historical reasons, arguments can also be given as a comma-separated list.

These three declarations mean the same:

new Function('a', 'b', 'return a + b'); // basic syntax
new Function('a,b', 'return a + b'); // comma-separated
new Function('a , b', 'return a + b'); // comma-separated with spaces
*/