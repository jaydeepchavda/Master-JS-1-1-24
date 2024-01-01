/* 
//     ----------------  Object.keys, values, entries



Let’s step away from the individual data structures and talk about the iterations over them.

In the previous chapter we saw methods map.keys(), map.values(), map.entries().

These methods are generic, there is a common agreement to use them for data structures.
If we ever create a data structure of our own, we should implement them too.

They are supported for:

Map
Set
Array
Plain objects also support similar methods, but the syntax is a bit different.

Object.keys, values, entries
For plain objects, the following methods are available:

Object.keys(obj) – returns an array of keys.
Object.values(obj) – returns an array of values.
Object.entries(obj) – returns an array of [key, value] pairs.
Please note the distinctions (compared to map for example):

Map	Object
Call syntax	map.keys()	Object.keys(obj), but not obj.keys()
Returns	iterable	“real” Array
The first difference is that we have to call Object.keys(obj), and not obj.keys().

Why so? The main reason is flexibility. Remember, objects are a base of all complex structures in JavaScript.
 So we may have an object of our own like data that implements its own data.values() method.
  And we still can call Object.values(data) on it.

The second difference is that Object.* methods return “real” array objects, not just an iterable. 
That’s mainly for historical reasons.
*/

let user = {
    name: "John",
    age: 30
  };

 /*  
  Object.keys(user) = ["name", "age"]
  Object.values(user) = ["John", 30]
  Object.entries(user) = [ ["name","John"], ["age",30] ] */

  
  // loop over values
  for (let value of Object.values(user)) {
    alert(value); // John, then 30
  }

  /* 
  
  Transforming objects
Objects lack many methods that exist for arrays, e.g. map, filter and others.

If we’d like to apply them, then we can use Object.entries followed by Object.fromEntries:

Use Object.entries(obj) to get an array of key/value pairs from obj.
Use array methods on that array, e.g. map, to transform these key/value pairs.
Use Object.fromEntries(array) on the resulting array to turn it back into an object.*/


let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
  };
  
  let doublePrices = Object.fromEntries(
    // convert prices to array, map each key/value pair into another pair
    // and then fromEntries gives back the object
    Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
  );
  
//   alert(doublePrices.meat); // 8



//      -------------       Destructuring assignment

/* 

Although, when we pass those to a function, it may need not be an object/array as a whole. 
It may need individual pieces.

Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables,
 as sometimes that’s more convenient.

Destructuring also works great with complex functions that have a lot of parameters, default values, and so on.
 Soon we’ll see that.*/


//  Array destructuring
// Here’s an example of how an array is destructured into variables:

// we have an array with the name and surname
let arr = ["John", "Smith"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

// alert(firstName); // John
// alert(surname);  // Smith


let [firstName1, surname1] = "John1 Smith1".split(' ');
// alert(firstName1); // John1
// alert(surname1);  // Smith1


let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// alert(name1); // Julius
// alert(name2); // Caesar
// Further items aren't assigned anywhere


// Default values

// let [firstName, surname] = [];

// alert(firstName); // undefined
// alert(surname); // undefined



// Object destructuring

/* 
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200

// changed the order in let {...}
let {height, width, title} = { title: "Menu", height: 200, width: 100 }
*/

// Nested destructuring

/* 
let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

// destructuring assignment split in multiple lines for clarity
let {
  size: { // put size here
    width,
    height
  },
  items: [item1, item2], // assign items here
  title = "Menu" // not present in the object (default value is used)
} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
alert(item1);  // Cake
alert(item2);  // Donut  */


/* 
Summary
Destructuring assignment allows for instantly mapping an object or array onto many variables.

The full object syntax:

let {prop : varName = default, ...rest} = object
This means that property prop should go into the variable varName and, if no such property exists, 
then the default value should be used.

Object properties that have no mapping are copied to the rest object.

The full array syntax:

let [item1 = default, item2, ...rest] = array
The first item goes to item1; the second goes into item2, all the rest makes the array rest.

It’s possible to extract data from nested arrays/objects, 
for that the left side must have the same structure as the right one.
*/