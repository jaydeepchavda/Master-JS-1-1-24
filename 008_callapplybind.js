// Decorators and forwarding, call/apply





/* 
//  --------Function binding
When passing object methods as callbacks, for instance to setTimeout, there’s a known problem: "losing this".

In this chapter we’ll see the ways to fix it.

Losing “this”
We’ve already seen examples of losing this. Once a method is passed somewhere separately from the object – this is lost.

Here’s how it may happen with setTimeout:

let user = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  }
};

setTimeout(user.sayHi, 1000); // Hello, undefined!
*/


// Solution 1: a wrapper
// The simplest solution is to use a wrapping function:

let user = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  }
};

setTimeout(function() {
  user.sayHi(); // Hello, John!
}, 1000);
// Now it works, because it receives user from the outer lexical environment, and then calls the method normally.


// The same, but shorter:

setTimeout(() => user.sayHi(), 1000); // Hello, John!


// solution 2 :Bind

 
/* 
Functions provide a built-in method bind that allows to fix this.

The basic syntax is:

// more complex syntax will come a little later
let boundFunc = func.bind(context);
The result of func.bind(context) is a special function-like “exotic object”, that is callable as function and transparently passes the call to func setting this=context.

In other words, calling boundFunc is like func with fixed this.

For instance, here funcUser passes a call to func with this=user:
*/

let userOne = {
    firstName: "John"
  };
  
  function func() {
    console.log(this.firstName);
  }
  
  let funcUser = func.bind(userOne);
  funcUser(); // John