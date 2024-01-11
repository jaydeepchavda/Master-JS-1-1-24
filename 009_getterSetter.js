// Property flags

/* 
writable – if true, the value can be changed, otherwise it’s read-only.
enumerable – if true, then listed in loops, otherwise not listed.
configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.
*/

/*
First, let’s see how to get those flags.

The method Object.getOwnPropertyDescriptor allows to query the full information about a property.

The syntax is:

let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
obj
The object to get information from.
propertyName
The name of the property.

 */

let user = {
    name: "John"
  };
  
  let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
  
  console.log( JSON.stringify(descriptor, null, 2 ) );
  /* property descriptor:
  {
    "value": "John",
    "writable": true,
    "enumerable": true,
    "configurable": true
  }
  */


//   To change the flags, we can use Object.defineProperty.

// Object.defineProperty(obj, propertyName, descriptor)

// let user = {};

// Object.defineProperty(user, "name", {
//   value: "John"
// });

// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

// alert( JSON.stringify(descriptor, null, 2 ) );
/*
{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
 */


// Non-writable
// Let’s make user.name non-writable (can’t be reassigned) by changing writable flag:

let userOne = {
  name: "John"
};

Object.defineProperty(userOne, "name", {
  writable: false
});

userOne.name = "Pete"; // Error: Cannot assign to read only property 'name'

console.log(userOne.name);

// Non-enumerable properties are also excluded from Object.keys:

// alert(Object.keys(user)); // name

//           Non-configurable
// The non-configurable flag (configurable:false) is sometimes preset for built-in objects and properties.

// A non-configurable property can’t be deleted, its attributes can’t be modified.

// For instance, Math.PI is non-writable, non-enumerable and non-configurable:

let descriptorOne = Object.getOwnPropertyDescriptor(Math, 'PI');

console.log( JSON.stringify(descriptorOne, null, 2 ) );
/*
{
  "value": 3.141592653589793,
  "writable": false,
  "enumerable": false,
  "configurable": false
}
*/

/* 
Math.PI = 3; // Error, because it has writable: false

// delete Math.PI won't work either
 */

 /* 
 So, we can set many properties at once.

Object.getOwnPropertyDescriptors
To get all property descriptors at once, we can use the method Object.getOwnPropertyDescriptors(obj).

Together with Object.defineProperties it can be used as a “flags-aware” way of cloning an object:

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
Normally when we clone an object, we use an assignment to copy properties, like this:

for (let key in user) {
  clone[key] = user[key]
}
 */


//    ----------       Property getters and setters

/* 
Getters and setters
Accessor properties are represented by “getter” and “setter” methods. 
In an object literal they are denoted by get and set:

let obj = {
  get propName() {
    // getter, the code executed on getting obj.propName
  },

  set propName(value) {
    // setter, the code executed on setting obj.propName = value
  }
};
*/


/* 
The getter works when obj.propName is read, the setter – when it is assigned.

For instance, we have a user object with name and surname:

let user = {
  name: "John",
  surname: "Smith"
};
Now we want to add a fullName property, that should be "John Smith". 
    Of course, we don’t want to copy-paste existing information, so we can implement it as an accessor:

let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

alert(user.fullName); // John Smith */


/* 
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};

// set fullName is executed with the given value.
user.fullName = "Alice Cooper";

alert(user.name); // Alice
alert(user.surname); // Cooper
*/