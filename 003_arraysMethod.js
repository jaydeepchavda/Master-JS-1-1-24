// array method 
/* 
Add/remove items
We already know methods that add and remove items from the beginning or the end:

arr.push(...items) – adds items to the end,
arr.pop() – extracts an item from the end,
arr.shift() – extracts an item from the beginning,
arr.unshift(...items) – adds items to the beginning.
*/

// splice
// How to delete an element from the array?

// The arrays are objects, so we can try to use delete:

let arr = ["I", "go", "home"];

delete arr[1]; // remove "go"

console.log(arr[1]);// undefined

// now arr = ["I",  , "home"];
console.log( arr.length ); // 3

/* 
The element was removed, but the array still has 3 elements, we can see that arr.length == 3.

That’s natural, because delete obj.key removes a value by the key. It’s all it does. Fine for objects. But for
 arrays we usually want the rest of elements to shift and occupy the freed place. We expect to have a shorter array now.
*/


// So, special methods should be used.

// The arr.splice method is a swiss army knife for arrays. It can do everything: insert, remove and replace elements.

// The syntax is:

// arr.splice(start[, deleteCount, elem1, ..., elemN])

// It modifies arr starting from the index start: removes 
// deleteCount elements and then inserts elem1, ..., elemN at their place. Returns the array of removed elements.

let arr1 = ["I", "study", "JavaScript"];

arr1.splice(1 ,1) // from index 1 remove 1 element

console.log( arr1.length ); // ["I", "JavaScript"]


// Easy, right? Starting from the index 1 it removed 1 element.

// In the next example we remove 3 elements and replace them with the other two:

let arr2 = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr2.splice(0, 3 , "lets" , "dance");

console.log( arr2 ) // now ["Let's", "dance", "right", "now"]

// Here we can see that splice returns the array of removed elements:

let arr3 = ["I", "study", "JavaScript", "right", "now"];


// remove 2 first elements
let removed = arr3.splice(0, 2);

console.log( removed ); // "I", "study" <-- array of removed elements


// The splice method is also able to insert the elements without any removals. For that we need to set deleteCount to 0:

let arr4 = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");

console.log( arr4 ); // "I", "study", "complex", "language", "JavaScript"



//  -----------slice
// The method arr.slice is much simpler than similar-looking arr.splice.

// The syntax is:

// arr.slice([start], [end])


let arr5 = [ "t", "e" ," s","t",];

console.log(arr5.slice(1,3));// e,s (copy from 1 to 3)

// alert( arr.slice(-2) ); // s,t (copy from -2 till the end)

console.log(arr5.slice(-2));


/* 
concat
The method arr.concat creates a new array that includes values from other arrays and additional items.

The syntax is:

arr.concat(arg1, arg2...)
It accepts any number of arguments – either arrays or values.

The result is a new array containing items from arr, then arg1, arg2 etc.

If an argument argN is an array, then all its elements are copied. Otherwise, the argument itself is copied.

For instance:

let arr = [1, 2];

// create an array from: arr and [3,4]
alert( arr.concat([3, 4]) ); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6


let arr = [1, 2];

let arrayLike = {
  0: "something",
  length: 1
};

alert( arr.concat(arrayLike) ); // 1,2,[object Object]
*/


//    -------  Iterate: forEach

// The arr.forEach method allows to run a function for every element of the array.

// The syntax:

// arr.forEach(function(item, index, array) {
  // ... do something with item
// });
// For instance, this shows each element of the array:

// for each element call alert
// ["Bilbo", "Gandalf", "Nazgul"].forEach("add one");


["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
  });
/* 
Searching in array
Now let’s cover methods that search in an array.

indexOf/lastIndexOf and includes
The methods arr.indexOf and arr.includes have the similar syntax and do essentially the same as their string 
counterparts, but operate on items instead of characters:

arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found,
 otherwise -1.
arr.includes(item, from) – looks for item starting from index from, returns true if found.
Usually these methods are used with only one argument: the item to search. By default, the search is from the beginning.

For instance:
*/


let arr6 = [1, 0, false];

console.log( arr6.indexOf(0) ); // 1
console.log( arr6.indexOf(false) ); // 2
console.log( arr6.indexOf(null) ); // -1

console.log( arr6.includes(1) ); // true


/* 
Please note that indexOf uses the strict equality === for comparison. So, if we look for false, it finds 
exactly false and not the zero.

If we want to check if item exists in the array, and don’t need the index, then arr.includes is preferred. */

/* 
let fruits = ['Apple', 'Orange', 'Apple']

alert( fruits.indexOf('Apple') ); // 0 (first Apple)
alert( fruits.lastIndexOf('Apple') ); // 2 (last Apple)
 */


/* 

find and findIndex/findLastIndex
Imagine we have an array of objects. How do we find an object with the specific condition?

Here the arr.find(fn) method comes in handy.

The syntax is:

let result = arr.find(function(item, index, array) {
  // if true is returned, item is returned and iteration is stopped
  // for falsy scenario returns undefined
});
The function is called for elements of the array, one after another:

item is the element.
index is its index.
array is the array itself.
If it returns true, the search is stopped, the item is returned. If nothing found, undefined is returned.

For example, we have an array of users, each with the fields id and name. Let’s find the one with id == 1:



*/

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  
  let user = users.find(item => item.id == 1);
  
  console.log(user.name); // John


  /* 
  
  In real life arrays of objects is a common thing, so the find method is very useful.

Note that in the example we provide to find the function item => item.id == 1 with one argument. 
That’s typical, other arguments of this function are rarely used.

The arr.findIndex method has the same syntax, but returns the index where the element was found instead 
of the element itself. The value of -1 is returned if nothing is found.

The arr.findLastIndex method is like findIndex, but searches from right to left, similar to lastIndexOf.

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
  {id: 4, name: "John"}
];

// Find the index of the first John
alert(users.findIndex(user => user.name == 'John')); // 0

// Find the index of the last John
alert(users.findLastIndex(user => user.name == 'John')); // 3

*/


/* 

filter
The find method looks for a single (first) element that makes the function return true.

If there may be many, we can use arr.filter(fn).

The syntax is similar to find, but filter returns an array of all matching elements:

let results = arr.filter(function(item, index, array) {
  // if true item is pushed to results and the iteration continues
  // returns empty array if nothing found
});
For instance:

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);

alert(someUsers.length); // 2

*/


/* 
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);

alert(someUsers.length); // 2
Transform an array
Let’s move on to methods that transform and reorder an array.

map
The arr.map method is one of the most useful and often used.

It calls the function for each element of the array and returns the array of results.

The syntax is:

let result = arr.map(function(item, index, array) {
  // returns the new value instead of item
});
For instance, here we transform each element into its length:

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6


*/


/* 
sort(fn)
The call to arr.sort() sorts the array in place, changing its element order.

It also returns the sorted array, but the returned value is usually ignored, as arr itself is modified.

For instance:

let arr = [ 1, 2, 15 ];

// the method reorders the content of arr
arr.sort();

alert( arr );  // 1, 15, 2
Did you notice anything strange in the outcome?

The order became 1, 15, 2. Incorrect. But why?

The items are sorted as strings by default.

Literally, all elements are converted to strings for comparisons. For strings,
 lexicographic ordering is applied and indeed "2" > "15".

To use our own sorting order, we need to supply a function as the argument of arr.sort().
*/


/* 
reverse
The method arr.reverse reverses the order of elements in arr.

For instance:

let arr = [1, 2, 3, 4, 5];
arr.reverse();

alert( arr ); // 5,4,3,2,1
It also returns the array arr after the reversal.

split and join
Here’s the situation from real life. We are writing a messaging app, and the person enters the 
comma-delimited list of receivers: John, Pete, Mary. But for us an array of names would be much 
more comfortable than a single string. How to get it?

The str.split(delim) method does exactly that. It splits the string into an array by the given delimiter delim.

In the example below, we split by a comma followed by space:

let names = 'Bilbo, Gandalf, Nazgul';

let arr = names.split(', ');

for (let name of arr) {
  alert( `A message to ${name}.` ); // A message to Bilbo  (and other names)
}
The split method has an optional second numeric argument – a limit on the array length. If it is provided, 
then the extra elements are ignored. In practice it is rarely used though:

let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);

alert(arr); // Bilbo, Gandalf
*/


/* 

reduce/reduceRight
When we need to iterate over an array – we can use forEach, for or for..of.

When we need to iterate and return the data for each element – we can use map.

The methods arr.reduce and arr.reduceRight also belong to that breed, but are a little bit more intricate. 
They are used to calculate a single value based on the array.

The syntax is:

let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);
The function is applied to all array elements one after another and “carries on” its result to the next call.

Arguments:

accumulator – is the result of the previous function call, equals initial the first time (if initial is provided).
item – is the current array item.
index – is its position.
array – is the array.
So, the first argument is essentially the accumulator that stores the combined result of all previous executions. 
And at the end it becomes the result of reduce.

Sounds complicated?

The easiest way to grasp that is by example.

Here we get a sum of an array in one line:

let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

alert(result); // 15
*/


/* 
Array.isArray
Arrays do not form a separate language type. They are based on objects.

So typeof does not help to distinguish a plain object from an array:

alert(typeof {}); // object
alert(typeof []); // object (same)
…But arrays are used so often that there’s a special method for that: Array.isArray(value). 
It returns true if the value is an array, and false otherwise.

alert(Array.isArray({})); // false

alert(Array.isArray([])); // true
*/