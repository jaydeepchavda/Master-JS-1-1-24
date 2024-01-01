// Arrays

/* 
Objects allow you to store keyed collections of values. That’s fine.

But quite often we find that we need an ordered collection, where we have a 1st, a 2nd, a 3rd element and so on. 
For example, we need that to store a list of something: users, goods, HTML elements etc.

It is not convenient to use an object here, because it provides no methods to manage the order of elements. 
We can’t insert a new property “between” the existing ones. Objects are just not meant for such use.

There exists a special data structure named Array, to store ordered collections.
*/

//   Declaration

let arr = [];

let arrTwo = new Array();


let fruits = ["Apple", "Orange", "Plum"];

// Array elements are numbered, starting with zero.

// We can get an element by its number in square brackets:

// let fruits = ["Apple", "Orange", "Plum"];

console.log( fruits[0] ); // Apple

console.log( fruits[1] ); // Orange
console.log( fruits[2] ); // Plum

// We can replace an element:

fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]

fruits[3] = 'lemon';

console.log(fruits);


//    -------   length 

console.log(fruits.length);


// An array can store elements of any type.

// For instance:

// mix of values

let arrTh = ['apple' , {name: "jaydip"} , 40  , true , function hello(){console.log("hello world")}];

console.log(arrTh);

console.log(arrTh[1].name);
console.log("function execution : "+arrTh[4]());


// last element in array

console.log("last element in array :"+fruits[fruits.length-1]);

console.log("another method : "+fruits.at(-1));


//  -----   Methods pop/push, shift/unshift


/* 
A queue is one of the most common uses of an array. In computer science, this means an ordered collection of 
elements which supports two operations:

 1  push appends an element to the end.
 2  shift get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.

Arrays support both operations.

In practice we need it very often. For example, a queue of messages that need to be shown on-screen.

There’s another use case for arrays – the data structure named stack.

It supports two operations:

1  push adds an element to the end.
2  pop takes an element from the end.\


So new elements are added or taken always from the “end”.

A stack is usually illustrated as a pack of cards: new cards are added to the top or taken from the top:


For stacks, the latest pushed item is received first, that’s also called LIFO (Last-In-First-Out) principle. 
For queues, we have FIFO (First-In-First-Out).

Arrays in JavaScript can work both as a queue and as a stack. They allow you to add/remove elements, 
both to/from the beginning or the end.

In computer science, the data structure that allows this, is called deque.

*/

//  method that works ending of the array
// push() pop()

// pop()

// Extracts the last element of the array and returns it:

let fruitsOne = ["Apple", "Orange", "Pear"];

console.log(fruitsOne.pop(1));

console.log(fruitsOne)


//  push()

// add element in the last


fruitsOne.push("orange");
console.log(fruitsOne);


// Methods that work with the beginning of the array:

// shift()


// Extracts the first element of the array and returns it:

// fruitsOne.shift();
// let fruitsOne = ["Apple", "Orange", "Pear"];

console.log("first element of array with shift : "+fruitsOne.shift());// remove Apple and alert it

console.log(fruitsOne)// Orange, Pear

// unshift()

fruitsOne.unshift("apple");
console.log("after unshift array : ");

console.log( fruitsOne ); // Apple, Orange, Pear

// Methods push and unshift can add multiple elements at once:

// let fruitsOne = ["Apple"];

fruitsOne.push("Orange", "Peach");
fruitsOne.unshift("Pineapple", "Lemon");

console.log(fruitsOne)


/* 
Internals
An array is a special kind of object. The square brackets used to access a property arr[0] actually
 come from the object syntax.
 That’s essentially the same as obj[key], where arr is the object, while numbers are used as keys.

They extend objects providing special methods to work with ordered collections of data and also the length property. 
But at the core it’s still an object.

Remember, there are only eight basic data types in JavaScript (see the Data types chapter for more info). 
 is an object and thus behaves like an object.
*/


/* 
let fruits = ["Banana"]

let arr = fruits; // copy by reference (two variables reference the same array)

alert( arr === fruits ); // true

arr.push("Pear"); // modify the array by reference

alert( fruits ); // Banana, Pear - 2 items now
*/


//   ---------    Performance
// Methods push/pop r un fast, 
// while shift/unshift are slow.


//  ---------       Loops

for (let index = 0; index < fruitsOne.length; index++) {
    // console.log(fruitsOne[index]);
    
}

// But for arrays there is another form of loop, for..of:


for(let fruit of fruitsOne){
    // console.log(fruit);
}


// Technically, because arrays are objects, it is also possible to use for..in:

// for of is used to get the value in array

// while  for in used for  key in object which get the index in array in js 

for(let key in fruitsOne){
    console.log("for in in array: " +fruitsOne[key]);
}

/* 
The loop for..in iterates over all properties, not only the numeric ones.

There are so-called “array-like” objects in the browser and in other environments, that look like arrays. That is,
 they have length and indexes properties, but they may also have other non-numeric properties and methods,
  which we usually don’t need. The for..in loop will list them though. So if we need to work with array-like objects,
   then these “extra” properties can become a problem.

The for..in loop is optimized for generic objects, not arrays, and thus is 10-100 times slower. 
Of course, it’s still very fast. The speedup may only matter in bottlenecks. 
But still we should be aware of the difference.

Generally, we shouldn’t use for..in for arrays.
*/

// A word about “length”

// The length property automatically updates when we modify the array.
//  To be precise, it is actually not the count of values in the array, but the greatest numeric index plus one.

fruits[123] = "Apple";

console.log( fruits.length ); // 124


let arrOne = [1, 2, 3, 4, 5];

arrOne.length = 2; // truncate to 2 elements
console.log( arr ); // [1, 2]

arrOne.length = 5; // return length back
console.log(arrOne.length)
console.log( arr[3] ); // undefined: the values do not return


// new Array()
// There is one more syntax to create an array:

let arrFr= new Array("Apple", "Pear", "etc");


// Multidimensional arrays

// Arrays can have items that are also arrays. We can use it for multidimensional arrays, for example to store matrices:

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log( matrix ); // 5, the central element


// toString

// Arrays have their own implementation of toString method that returns a comma-separated list of elements.

console.log(arrFr.toString());

/* 
Arrays do not have Symbol.toPrimitive, neither a viable valueOf,
 they implement only toString conversion, so here [] becomes an empty string, [1] becomes "1" and [1,2] becomes "1,2".
*/


/* 
Don’t compare arrays with ==
Arrays in JavaScript, unlike some other programming languages, shouldn’t be compared with operator ==.

This operator has no special treatment for arrays, it works with them as with any objects.

Let’s recall the rules:

Two objects are equal == only if they’re references to the same object.
If one of the arguments of == is an object, and the other one is a primitive,
 then the object gets converted to primitive, as explained in the chapter Object to primitive conversion.
…With an exception of null and undefined that equal == each other and nothing else.

The strict comparison === is even simpler, as it doesn’t convert types.
*/



/* 
Summary
Array is a special kind of object, suited to storing and managing ordered data items.

The declaration:

// square brackets (usual)
let arr = [item1, item2...];

// new Array (exceptionally rare)
let arr = new Array(item1, item2...);
The call to new Array(number) creates an array with the given length, but without elements.

The length property is the array length or, to be precise, its last numeric index plus one.
 It is auto-adjusted by array methods.
If we shorten length manually, the array is truncated.
Getting the elements:

we can get element by its index, like arr[0]
also we can use at(i) method that allows negative indexes. For negative values of i, 
it steps back from the end of the array. If i >= 0, it works same as arr[i].
We can use an array as a deque with the following operations:

push(...items) adds items to the end.
pop() removes the element from the end and returns it.
shift() removes the element from the beginning and returns it.
unshift(...items) adds items to the beginning.
To loop over the elements of the array:

for (let i=0; i<arr.length; i++) – works fastest, old-browser-compatible.
for (let item of arr) – the modern syntax for items only,
for (let i in arr) – never use.
*/