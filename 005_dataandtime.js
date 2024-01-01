// Date and time

// Creation
// To create a new Date object call new Date() with one of the following arguments:

// new Date()

let now = new Date();

console.log( now );

// 0 means 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
console.log( Jan01_1970 );

// now add 24 hours, get 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
console.log( Jan02_1970 );

let date = new Date("2017-01-26");

console.log(date)


// new Date(year, month, date, hours, minutes, seconds, ms)

// The year should have 4 digits. For compatibility, 2 digits are also accepted and considered 19xx,
//  e.g. 98 is the same as 1998 here, but always using 4 digits is strongly encouraged.
// The month count starts with 0 (Jan), up to 11 (Dec).
// The date parameter is actually the day of month, if absent then 1 is assumed.
// If hours/minutes/seconds/ms is absent, they are assumed to be equal 0.

new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
new Date(2011, 0, 1); // the same, hours etc are 0 by default
// The maximal precision is 1 ms (1/1000 sec):

let date3 = new Date(2011, 0, 1, 2, 3, 4, 567);
console.log( date3 ); // 1.01.2011, 02:03:04.567


/* 
Access date components
There are methods to access the year, month and so on from the Date object:

getFullYear()
Get the year (4 digits)
getMonth()
Get the month, from 0 to 11.
getDate()
Get the day of month, from 1 to 31, the name of the method does look a little bit strange.
getHours(), getMinutes(), getSeconds(), getMilliseconds()
*/


/* 
Setting date components
The following methods allow to set date/time components:

setFullYear(year, [month], [date])
setMonth(month, [date])
setDate(date)
setHours(hour, [min], [sec], [ms])
setMinutes(min, [sec], [ms])
setSeconds(sec, [ms])
setMilliseconds(ms)
setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC) 
*/


//  learn about JSON

// JSON methods, toJSON
// Let’s say we have a complex object, and we’d like to convert it into a string, 
// to send it over a network, or just to output it for logging purposes.


let user = {
    name: "John",
    age: 30,
  
    toString() {
      return `{name: "${this.name}", age: ${this.age}}`;
    }
  };
  
  console.log(user); // {name: "John", age: 30}



  /* 
  JSON.stringify
The JSON (JavaScript Object Notation) is a general format to represent values and objects. 
It is described as in RFC 4627 standard. Initially it was made for JavaScript, but many other 
languages have libraries to handle it as well. So it’s easy to use JSON for data exchange when the 
client uses JavaScript and the server is written on Ruby/PHP/Java/Whatever.

JavaScript provides methods:


JSON.stringify to convert objects into JSON.
JSON.parse to convert JSON back into an object.
  */


let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
  };
  
  let json = JSON.stringify(student);
  
  console.log(typeof json); // we've got a string!
  
  console.log(json);
  /* JSON-encoded object:
  {
    "name": "John",
    "age": 30,
    "isAdmin": false,
    "courses": ["html", "css", "js"],
    "spouse": null
  }
  */


/* 
JSON.stringify can be applied to primitives as well.

JSON supports following data types:

Objects { ... }
Arrays [ ... ]
Primitives:
strings,
numbers,
boolean values true/false,
null.


// a number in JSON is just a number
alert( JSON.stringify(1) ) // 1

// a string in JSON is still a string, but double-quoted
alert( JSON.stringify('test') ) // "test"

alert( JSON.stringify(true) ); // true

alert( JSON.stringify([1, 2, 3]) ); // [1,2,3]
 */


/* 
Excluding and transforming: replacer
The full syntax of JSON.stringify is:

let json = JSON.stringify(value[, replacer, space])
*/

let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room // meetup references room
  };
  
  room.occupiedBy = meetup; // room references meetup
  
//   alert( JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );
  /*
  {
    "title":"Conference",
    "participants":[{"name":"John"},{"name":"Alice"}],
    "place":{"number":23}
  }
  */


//   Custom “toJSON”
// Like toString for string conversion, an object may provide method toJSON for to-JSON conversion. 
// JSON.stringify automatically calls it if available.

/* 
let room = {
  number: 23,
  toJSON() {
    return this.number;
  }
};

let meetup = {
  title: "Conference",
  room
};

alert( JSON.stringify(room) ); // 23

alert( JSON.stringify(meetup) );

  {
    "title":"Conference",
    "room": 23
  }

*/

/* 
JSON.parse
To decode a JSON-string, we need another method named JSON.parse.

The syntax:

let value = JSON.parse(str, [reviver]);
*/