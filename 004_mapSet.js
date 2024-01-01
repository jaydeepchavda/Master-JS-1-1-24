// first learn iterables

// Iterables

// Iterable objects are a generalization of arrays. That’s a concept that allows us to make any
//  object useable in a for..of loop.

// Symbol.iterator

let range = {
    from: 1,
    to: 5
  };

  
  // 1. call to for..of initially calls this
range[Symbol.iterator] = function() {

    // ...it returns the iterator object:
    // 2. Onward, for..of works only with the iterator object below, asking it for next values
    return {
      current: this.from,
      last: this.to,
  
      // 3. next() is called on each iteration by the for..of loop
      next() {
        // 4. it should return the value as an object {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  };
  
  // now it works!
  for (let num of range) {
    // alert(num); // 1, then 2, 3, 4, 5
  }



//   String is iterable
// Arrays and strings are most widely used built-in iterables.

// For a string, for..of loops over its characters:

for (let char of "test") {
  // triggers 4 times: once for each character
//   alert( char ); // t, then e, then s, then t
}


// Calling an iterator explicitly

let str = "Hello";

// does the same as
// for (let char of str) alert(char);

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
//   alert(result.value); // outputs characters one by one
}


// Array.from

let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
  };
  
  let arr = Array.from(arrayLike); // (*)
//   alert(arr.pop()); // World (method works)



  /* 
  Summary
Objects that can be used in for..of are called iterable.

Technically, iterables must implement the method named Symbol.iterator.
The result of obj[Symbol.iterator]() is called an iterator. It handles further iteration process.
An iterator must have the method named next() that returns an object {done: Boolean, value: any}, 
here done:true denotes the end of the iteration process, otherwise the value is the next value.
The Symbol.iterator method is called automatically by for..of, but we also can do it directly.
Built-in iterables like strings or arrays, also implement Symbol.iterator.
String iterator knows about surrogate pairs.
  */

//  -------------- map and set


/* 
Objects are used for storing keyed collections.
Arrays are used for storing ordered collections.

*/

/* 
Map
Map is a collection of keyed data items, just like an Object. But the main difference 
is that Map allows keys of any type.

Methods and properties are:

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the element (the key/value pair) by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.
*/


let map = new Map();

map.set("1" , "str1");
map.set(1 , "num1");
map.set(true , "bool1")

console.log(map.get(1));

console.log(map);
console.log(map.size);
console.log(map.delete(1));

console.log(map);


let john = { name: "John" };

// for every user, let's store their visits count
let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john, 123);

// alert( visitsCountMap.get(john) ); // 123

/* 
Iteration over Map
For looping over a map, there are 3 methods:

map.keys() – returns an iterable for keys,
map.values() – returns an iterable for values,
map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
*/


let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);

  for(let vag of recipeMap.keys()){
    console.log(vag);
  }

  for(let vag of recipeMap.values()){
    console.log(vag);
  }

  for(let vag of recipeMap.entries()){
    console.log(vag)
  }

  /* 
  Object.entries: Map from Object
When a Map is created, we can pass an array (or another iterable) with key/value pairs for initialization, like this:

// array of [key, value] pairs
let map = new Map([
  ['1',  'str1'],
  [1,    'num1'],
  [true, 'bool1']
]);

alert( map.get('1') ); // str1
  */

/* 

If we have a plain object, and we’d like to create a Map from it, then we can use built-in method Object.entries(obj) that returns an array of key/value pairs for an object exactly in that format.

So we can create a map from an object like this:

let obj = {
  name: "John",
  age: 30
};

let map = new Map(Object.entries(obj));

alert( map.get('name') ); // John
Here, Object.entries returns the array of key/value pairs: [ ["name","John"], ["age", 30] ]. That’s what Map needs.

Object.fromEntries: Object from Map
We’ve just seen how to create Map from a plain object with Object.entries(obj).

There’s Object.fromEntries method that does the reverse: given an array of [key, value] pairs, it creates an object from them:

let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);

// now prices = { banana: 1, orange: 2, meat: 4 }

alert(prices.orange); // 2*/



//    ----------  set 

/* 

Set
A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

Its main methods are:

new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), 
copies values from it into the set.
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.*/


// The main feature is that repeated calls of set.add(value) with the same value don’t do anything. 
// That’s the reason why each value appears in a Set only once.


let set = new Set();

let johnny = { name: "Johnny" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(johnny);
set.add(pete);
set.add(mary);
set.add(johnny);
set.add(mary);

// set keeps only unique values
console.log( set.size ); // 3

for (let user of set) {
  console.log(user.name); // John (then Pete and Mary)

}

// Iteration over Set
// We can loop over a set either with for..of or using forEach:

let set1 = new Set(["oranges", "apples", "bananas"]);

for (let value of set1) console.log(value);

// the same with forEach:
set1.forEach((value, valueAgain, set) => {
  console.log(value);
});

/* 
set.keys() – returns an iterable object for values,
set.values() – same as set.keys(), for compatibility with Map,
set.entries() – returns an iterable object for entries [value, value], exists for compatibility with Map.

*/

/* 
Summary
Map – is a collection of keyed values.

Methods and properties:

new Map([iterable]) – creates the map, with optional iterable (e.g. array) of [key,value] pairs for initialization.
map.set(key, value) – stores the value by the key, returns the map itself.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the element by the key, returns true if key existed at the moment of the call, otherwise false.
map.clear() – removes everything from the map.
map.size – returns the current element count.
The differences from a regular Object:

Any keys, objects can be keys.
Additional convenient methods, the size property.
Set – is a collection of unique values.

Methods and properties:

new Set([iterable]) – creates the set, with optional iterable (e.g. array) of values for initialization.
set.add(value) – adds a value (does nothing if value exists), returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.
Iteration over Map and Set is always in the insertion order, so we can’t say that these collections are unordered, 
but we can’t reorder elements or directly get an element by its number.

*/