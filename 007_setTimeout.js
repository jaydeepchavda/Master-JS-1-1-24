//   ---------   Scheduling: setTimeout and setInterval

/* 
We may decide to execute a function not right now, but at a certain time later. That’s called “scheduling a call”.

There are two methods for it:

setTimeout allows us to run a function once after the interval of time.
setInterval allows us to run a function repeatedly, starting after the interval of time, 
then repeating continuously at that interval.
These methods are not a part of JavaScript specification. But most environments have the internal 
scheduler and provide these methods. 
In particular, they are supported in all browsers and Node.js.
*/

// setTimeout
// The syntax:

// let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)


function sayHI(){
    console.log("hello22");
}
sayHI();
setTimeout(sayHI, 2000);

function sayHi(phrase, who) {
    console.log( phrase + ', ' + who );
  }
  
  setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John


  setTimeout(() => console.log('Hello'), 1000);


//   Canceling with clearTimeout
// A call to setTimeout returns a “timer identifier” timerId that we can use to cancel the execution.

// The syntax to cancel:

// let timerId = setTimeout(...);
// clearTimeout(timerId);

let timerId = setTimeout(() => console.log("never happens"), 1000);
// console.log(timerId);
clearTimeout(timerId);

// console.log(timerId)


//  ----------          setInterval
// The setInterval method has the same syntax as setTimeout:

// let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)

let setTimer =setInterval(() => console.log("ring"), 2000);

setTimeout( () => {clearInterval(setTimer); console.log("stop");}, 6010);


// Nested setTimeout
// There are two ways of running something regularly.

// One is setInterval. The other one is a nested setTimeout, like this:

/** instead of:
let timerId = setInterval(() => alert('tick'), 2000);
*/

let timerId1 = setTimeout(function tick() {
  console.log('tick');
//   timerId = setTimeout(tick, 2000); // (*)
}, 2000);

/* 
immediate asynchronous job, like setImmediate for Node.js. So this note is browser-specific.

Summary
Methods setTimeout(func, delay, ...args) and setInterval(func, delay, ...args) allow us to run the func once/regularly 
after delay milliseconds.
To cancel the execution, we should call clearTimeout/clearInterval with the value returned by setTimeout/setInterval.
Nested setTimeout calls are a more flexible alternative to setInterval, allowing us to set the time between executions 
more precisely.
Zero delay scheduling with setTimeout(func, 0) (the same as setTimeout(func)) 
is used to schedule the call “as soon as possible,
 but after the current script is complete”.
The browser limits the minimal delay for five or more nested calls of setTimeout or for 
setInterval (after 5th call) to 4ms. That’s for historical reasons.

The CPU is overloaded.
The browser tab is in the background mode.
The laptop is on battery saving mode.
*/




// ------------------      The "new Function" syntax
// There’s one more way to create a function. It’s rarely used, but sometimes there’s no alternative.

// Syntax 
// The syntax for creating a function:

// let func = new Function ([arg1, arg2, ...argN], functionBody);


let sum = new Function('a', 'b', 'return a + b');

console.log( sum(1, 2) ); // 3
