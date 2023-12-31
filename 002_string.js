// string

// In JavaScript, the textual data is stored as strings. There is no separate type for a single character.

let single = 'single-quoted';
let double = "double-quoted";

let backticks = `backticks`;


function sum(a, b) {
    return a + b;
  }
  
  console.log(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

  
  let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

console.log(guestList); // a list of guests, multiple lines

let str1 = "Hello\nWorld"; // two lines using a "newline symbol"

// two lines using a normal newline and backticks
let str2 = `Hello
World`;

console.log(str1 == str2); // true

console.log(str1);

console.log(str2)


// String length

let str = "hello developers";

let result = str.length;

console.log(result);

// Accessing characters

// first character
console.log(str[0]);
console.log(str.at(0));


console.log(str.at(2));


// last character

console.log(str[str.length - 1]);

console.log(str.at(-1));

/* As you can see, the .at(pos) method has a benefit of allowing negative position.
 If pos is negative, then it’s counted from the end of the string. */


 for(let ch of "jaydip"){
    console.log(ch);
 }

// strings are immutable

//  Strings can’t be changed in JavaScript. It is impossible to change a character.


let str3 = "hi"

str3[0] = 'j'; // error
console.log( str3[0] ); // doesn't work


// Changing the case
// Methods toLowerCase() and toUpperCase() change the case:

console.log( 'Interface'.toUpperCase() ); // INTERFACE

console.log( 'Interface'.toLowerCase() ); // interface

// Or, if we want a single character lowercased:

console.log( 'Interface'[0].toLowerCase() ); // 'i'


// Searching for a substring
// There are multiple ways to look for a substring within a string.

/* 
str.indexOf
The first method is str.indexOf(substr, pos).

It looks for the substr in str, starting from the given position pos, 
and returns the position where the match was found or -1 if nothing can be found.
*/

let str5 = 'Widget with id';

console.log( str5.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning

console.log( str5.indexOf('widget') ); // -1, not found, the search is case-sensitive


console.log( str5.indexOf("id") );

// The optional second parameter allows us to start searching from a given position.

// For instance, the first occurrence of "id" is at position 1. To look for the next occurrence, 
// let’s start the search from position 2:

let str6 = 'Widget with id';

console.log( str6.indexOf('id', 2) ) // 12


let str11 = 'As sly as a fox, as strong as an ox';

let target = 'as'; // let's look for it

let pos = 0;
while (true) {
  let foundPos = str11.indexOf(target, pos);
  if (foundPos == -1) break;

  console.log( `Found at ${foundPos}` );
  pos = foundPos + 1; // continue the search from the next position
}

// includes, startsWith, endsWith
// The more modern method str.includes(substr, pos) returns true/false depending on whether str contains substr within.

console.log( "Widget with id".includes("Widget") ); // true

console.log( "Hello".includes("Bye") ); // false

console.log( "Widget".includes("id") ); // true

console.log( "Widget".includes("id", 3) ); // false, from position 3 there is no "id"

console.log( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
console.log( "Widget".endsWith("get") ); // true, "Widget" ends with "get"


/* Getting a substring
There are 3 methods in JavaScript to get a substring: substring, substr and slice.

str.slice(start [, end])
Returns the part of the string from start to (but not including) end. */


let str12 = "stringify";
console.log( str12.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)

console.log( str12.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at 0


let str13 = "stringify";
console.log( str13.slice(2) ); // 'ringify', from the 2nd position till the end

let str14 = "stringify";

// start at the 4th position from the right, end at the 1st from the right
console.log( str14.slice(-4, -1) ); // 'gif'


// str.substring(start [, end])
// Returns the part of the string between start and end (not including end).

// This is almost the same as slice, but it allows start to be greater than end 
// (in this case it simply swaps start and end values).


// let str = "stringify";

// these are same for substring
console.log( str13.substring(2, 6) ); // "ring"
console.log( str13.substring(6, 2) ); // "ring"


// ...but not for slice:
console.log( str13.slice(2, 6) ); // "ring" (the same)

console.log( str13.slice(6, 2) ); // "" (an empty string)

// str.substr(start [, length])
// Returns the part of the string from start, with the given length.

// let str = "stringify";
// alert( str.substr(2, 4) ); // 'ring', from the 2nd position get 4 characters


// Comparing strings
// As we know from the chapter Comparisons, strings are compared character-by-character in alphabetical order.


// A lowercase letter is always greater than the uppercase:

// alert( 'a' > 'Z' ); // true
console.log( 'a' > 'Z' ); // true

// Letters with diacritical marks are “out of order”:

console.log('Österreich' > 'Zealand') //true


// str.codePointAt(pos)
// Returns a decimal number representing the code for the character at position pos:

console.log( "Z".codePointAt(0) ); // 90)
console.log( "z".codePointAt(0) ); // 90

console.log("z".codePointAt(0).toString(16))// Z (we can also use a hex value as an argument)


let str15 = '';

for (let i = 65; i <= 220; i++) {
  str15 += String.fromCodePoint(i);
}
console.log( str15 );
// Output:
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ


/* 

Correct comparisons
The “right” algorithm to do string comparisons is more complex than it may seem, because alphabets are different for different languages.

So, the browser needs to know the language to compare.

Luckily, modern browsers support the internationalization standard ECMA-402.

It provides a special method to compare strings in different languages, following their rules.

The call str.localeCompare(str2) returns an integer indicating whether str is less, equal or greater than str2 according to the language rules:

Returns a negative number if str is less than str2.
Returns a positive number if str is greater than str2.
Returns 0 if they are equivalent.

*/

console.log( 'Österreich'.localeCompare('Zealand') ); // -1)


// summary

/* 
Summary
There are 3 types of quotes. Backticks allow a string to span multiple lines and embed expressions ${…}.
We can use special characters, such as a line break \n.
To get a character, use: [] or at method.
To get a substring, use: slice or substring.
To lowercase/uppercase a string, use: toLowerCase/toUpperCase.
To look for a substring, use: indexOf, or includes/startsWith/endsWith for simple checks.
To compare strings according to the language, use: localeCompare, otherwise they are compared by character codes.
There are several other helpful methods in strings:

str.trim() – removes (“trims”) spaces from the beginning and end of the string.
str.repeat(n) – repeats the string n times.
…and more to be found in the manual.
Strings also have methods for doing search/replace with regular expressions. But that’s big topic, so it’s explained in a separate tutorial section Regular expressions.

Also, as of now it’s important to know that strings are based on Unicode encoding, and hence there’re issues with comparisons. There’s more about Unicode in the chapter Unicode, String internals.

Tasks
*/