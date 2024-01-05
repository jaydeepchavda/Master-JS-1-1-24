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

  /* 
  let user = {
  firstName: "John"
};

function func(phrase) {
  alert(phrase + ', ' + this.firstName);
}

// bind this to user
let funcUser = func.bind(user);

funcUser("Hello"); // Hello, John (argument "Hello" is passed, and this=user)


let user = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  }
};

let sayHi = user.sayHi.bind(user); // (*)

// can run it without an object
sayHi(); // Hello, John!

setTimeout(sayHi, 1000); // Hello, John!

// even if the value of user changes within 1 second
// sayHi uses the pre-bound value which is reference to the old user object
user = {
  sayHi() { alert("Another user in setTimeout!"); }
};
  */


/* 
Partial functions
Until now we have only been talking about binding this. Let’s take it a step further.

We can bind not only this, but also arguments. That’s rarely done, but sometimes can be handy.

The full syntax of bind:

let bound = func.bind(context, [arg1], [arg2], ...);
It allows to bind context as this and starting arguments of the function.

For instance, we have a multiplication function mul(a, b):

function mul(a, b) {
  return a * b;
}


Let’s use bind to create a function double on its base:

function mul(a, b) {
  return a * b;
}

let double = mul.bind(null, 2);

alert( double(3) ); // = mul(2, 3) = 6
alert( double(4) ); // = mul(2, 4) = 8
alert( double(5) ); // = mul(2, 5) = 10
*/


/* 
Summary
Method func.bind(context, ...args) returns a “bound variant” of function func that fixes
 the context this and first arguments if given.

Usually we apply bind to fix this for an object method, so that we can pass it somewhere.
 For example, to setTimeout.

When we fix some arguments of an existing function, the resulting (less universal) function
 is called partially applied or partial.

Partials are convenient when we don’t want to repeat the same argument over and over again. 
Like if we have a send(from, to) function, and from should always be the same for our task,
 we can get a partial and go on with it.
*/