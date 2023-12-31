//  ----------        Symbol type  ---------


/* 
By specification, only two primitive types may serve as object property keys:

string type, or
symbol type.

Otherwise, if one uses another type, such as number, it’s autoconverted to string.
 So that obj[1] is the same as obj["1"], and obj[true] is the same as obj["true"].

*/




//   ----------         Symbols 

// A “symbol” represents a unique identifier.

// A value of this type can be created using Symbol():

/* Symbols are guaranteed to be unique. Even if we create many symbols with exactly the same description,
 they are different values.
 The description is just a label that doesn’t affect anything. */

let id = Symbol();

let id1 = Symbol("Id");

let id2 = Symbol("Id");

console.log(id1 == id2);


//  -------  “Hidden” properties
// Symbols allow us to create “hidden” properties of an object, 
// that no other part of code can accidentally access or overwrite.


let user = { // belongs to another code
    name: "John"
  };

  let id3 = Symbol("id");

  user[id3] = 3;

  console.log(user[id3]); //we can access the data using the symbol as the key




  /* 
  Symbols in an object literal
If we want to use a symbol in an object literal {...}, we need square brackets around it.

Like this:

let id = Symbol("id");

let user = {
  name: "John",
  [id]: 123 // not "id": 123
};
  */


/* 
Symbols are skipped by for…in
Symbolic properties do not participate in for..in loop.

For instance:

let id = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id]: 123
};

for (let key in user) alert(key); // name, age (no symbols)

// the direct access by the symbol works
alert( "Direct: " + user[id] ); // Direct: 123
*/


/* 
//    -------------            global symbol       --------
Global symbols
As we’ve seen, usually all symbols are different, even if they have the same name. 
But sometimes we want same-named symbols to be same entities. For instance, different parts of our
 application want to access symbol "id" meaning exactly the same property.

 In order to read (create if absent) a symbol from the registry, use Symbol.for(key).

 That call checks the global registry, and if there’s a symbol described as key, then returns it, 
 otherwise creates a new symbol Symbol(key) and stores it in the registry by the given key.
 */

 // read from the global registry
let id4 = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");

// the same symbol
console.log( id4 === idAgain ); // true  


//  -------------  Symbol.keyFor

/* 
We have seen that for global symbols, Symbol.for(key) returns a symbol by name. 
To do the opposite – return a name by global symbol – we can use: Symbol.keyFor(sym):

For instance:

*/


// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by symbol
console.log( Symbol.keyFor(sym) ); // name
console.log( Symbol.keyFor(sym2) ); // id


let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

console.log( Symbol.keyFor(globalSymbol) ); // name, global symbol
console.log( Symbol.keyFor(localSymbol) ); // undefined, not global

console.log( localSymbol.description ); // name

/* 
System symbols
There exist many “system” symbols that JavaScript uses internally, and we can use them to fine-tune various aspects of our objects.

They are listed in the specification in the Well-known symbols table:

Symbol.hasInstance
Symbol.isConcatSpreadable
Symbol.iterator
Symbol.toPrimitive
…and so on.
For instance, Symbol.toPrimitive allows us to describe object to primitive conversion. We’ll see its use very soon.
*/



//  ------------         summary

/* 
Summary
Symbol is a primitive type for unique identifiers.

Symbols are created with Symbol() call with an optional description (name).

Symbols are always different values, even if they have the same name. If we want same-named symbols to be equal, 
then we should use the global registry: Symbol.for(key) returns (creates if needed) a global symbol with 
key as the name. Multiple calls of Symbol.for with the same key return exactly the same symbol.

Symbols have two main use cases:

“Hidden” object properties.

If we want to add a property into an object that “belongs” to another script or a library,
 we can create a symbol and use it as a property key. A symbolic property does not appear in for..in,
  so it won’t be accidentally processed together with other properties. Also it won’t be accessed directly, 
  because another script does not have our symbol. So the property will be protected from accidental use or overwrite.

So we can “covertly” hide something into objects that we need, but others should not see, using symbolic properties.

There are many system symbols used by JavaScript which are accessible as Symbol.*. We can use them to alter 
some built-in behaviors. For instance, later in the tutorial we’ll use Symbol.iterator for iterables, Symbol.toPrimitive 
to setup object-to-primitive conversion and so on.


*/


//  -----------------            object to primitive conversion        ------------------

/* 
What happens when objects are added obj1 + obj2, subtracted obj1 - obj2 or printed using alert(obj)?

JavaScript doesn’t allow you to customize how operators work on objects. Unlike some other programming languages,
 such as Ruby or C++, we can’t implement a special object method to handle addition (or other operators).

 That’s an important limitation: the result of obj1 + obj2 (or another math operation) can’t be another object!

 */

/* 
------------------           Conversion rules
In the chapter Type Conversions we’ve seen the rules for numeric, string and boolean conversions of primitives. 
But we left a gap for objects. Now, as we know about methods and symbols it becomes possible to fill it.

  1   There’s no conversion to boolean. All objects are true in a boolean context, as simple as that. 
There exist only numeric and string conversions.
  2   The numeric conversion happens when we subtract objects or apply mathematical functions. For instance, 
Date objects (to be covered in the chapter Date and time) can be subtracted, and the result of date1 - date2 is
 the time difference between two dates.
  3   As for the string conversion – it usually happens when we output an object with alert(obj) and in similar contexts.
We can implement string and numeric conversion by ourselves, using special object methods.
*/

/* 
"string"

// output
alert(obj);

// using object as a property key
anotherObj[obj] = 123;
*/

/* 
"number"

// explicit conversion
let num = Number(obj);

// maths (except binary plus)
let n = +obj; // unary plus
let delta = date1 - date2;

// less/greater comparison
let greater = user1 > user2;
*/


/* 

default
ccurs in rare cases when the operator is “not sure” what type to expect.

For instance, binary plus + can work both with strings (concatenates them) and numbers (adds them).
 So if a binary plus gets an object as an argument, it uses the "default" hint to convert it.

 // binary plus uses the "default" hint
let total = obj1 + obj2;

// obj == number uses the "default" hint
if (user == 1) { ... };
*/


/* 
important

 1    Call obj[Symbol.toPrimitive](hint) – the method with the symbolic key Symbol.toPrimitive (system symbol), 
if such method exists,
 2    Otherwise if hint is "string"
try calling obj.toString() or obj.valueOf(), whatever exists.
 3   Otherwise if hint is "number" or "default"
try calling obj.valueOf() or obj.toString(), whatever exists.
*/


//  -------      Symbol.toPrimitive

let userOne = {
    name: "John",
    money: 1000,
    [Symbol.toPrimitive](hint){
        return hint == "string" ? `{name :"${this.name}"}` : this.money;
     }
    };

    console.log(userOne);

    console.log(+userOne);

    console.log(userOne + 1000);

    /* 
    toString/valueOf
If there’s no Symbol.toPrimitive then JavaScript tries to find methods toString and valueOf:

For the "string" hint: call toString method, and if it doesn’t exist or if it
 returns an object instead of a primitive value, 
then call valueOf (so toString has the priority for string conversions).

For other hints: call valueOf, and if it doesn’t exist or if it returns an object instead of a primitive value,
 then call toString (so valueOf has the priority for maths).

 let user = {name: "John"};

alert(user); // [object Object]
alert(user.valueOf() === user); // true


let user = {
  name: "John",
  money: 1000,

  // for hint="string"
  toString() {
    return `{name: "${this.name}"}`;
  },

  // for hint="number" or "default"
  valueOf() {
    return this.money;
  }

};

alert(user); // toString -> {name: "John"}
alert(+user); // valueOf -> 1000
alert(user + 500); // valueOf -> 1500

    */


/* 
//   ------     Further conversions


The object is converted to a primitive (using the rules described above).
If necessary for further calculations, the resulting primitive is also converted.

let obj = {
  // toString handles all conversions in the absence of other methods
  toString() {
    return "2";
  }
};

alert(obj * 2); // 4, object converted to primitive "2", then multiplication made it a number



let obj = {
  toString() {
    return "2";
  }
};

alert(obj + 2); // 22 ("2" + 2), conversion to primitive returned a string => concatenation

*/




/* 
Summary
The object-to-primitive conversion is called automatically by many built-in functions and operators that expect a primitive as a value.

There are 3 types (hints) of it:

"string" (for alert and other operations that need a string)
"number" (for maths)
"default" (few operators, usually objects implement it the same way as "number")
The specification describes explicitly which operator uses which hint.

The conversion algorithm is:

Call obj[Symbol.toPrimitive](hint) if the method exists,
Otherwise if hint is "string"
try calling obj.toString() or obj.valueOf(), whatever exists.
Otherwise if hint is "number" or "default"
try calling obj.valueOf() or obj.toString(), whatever exists.

*/

