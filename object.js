// Object 

// object syntax 

// let user = new Object(); // "object constructor" syntax
// let user = {};  // "object literal" syntax

// creating object  with values immediately
let user = {
    name: "jaydip",
    age: 20
};

/*
1 We can add, remove and read files from it at any time.

2 Property values are accessible using the dot notation: 
*/

console.log(user);
console.log(user.name);
console.log(user.age);

/* 
The value can be of any type. Let’s add a boolean one:

user.isAdmin = true; 
*/
/* 
To remove a property, we can use the delete operator:
 */

delete user.age;
console.log(user);

/* 
We can also use multiword property names, but then they must be quoted:

let user = {
  name: "John",
  age: 30,
  "likes birds": true  // multiword property name must be quoted
};
 */
/* 
Square brackets
For multiword properties, the dot access doesn’t work:

 */
// set 

user['birds likes to fly'] = true;

console.log(user);

// get

console.log(user['birds likes to fly']);


// delete

delete user['birds likes to fly'];

console.log(user);

/* let key = "likes birds";

// same as user["likes birds"] = true;
user[key] = true; */

/* 
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"
The meaning of a computed property is simple: [fruit] means that the property name should be taken from fruit.

So, if a visitor enters "apple", bag will become {apple: 5}. 

Essentially, that works the same as:

let fruit = prompt("Which fruit to buy?", "apple");
let bag = {};

// take property name from the fruit variable
bag[fruit] = 5;
…But looks nicer.
*/


function makeUser(name ,age){
    return {
        name,
        age,
    };
}

let userThree = makeUser("jaydipchavda" , 25);

console.log(userThree);

console.log(userThree.name);

/* 
Property value shorthand
In real code, we often use existing variables as values for property names.

For instance:

function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let user = makeUser("John", 30);
alert(user.name); // John

 */

/* 
let obj = {
    0: "test" // same as "0": "test"
  };
  
  // both alerts access the same property (the number 0 is converted to string "0")
  alert( obj["0"] ); // test
  alert( obj[0] ); // test (same property) */





// ************
//  There’s also a special operator "in" for that.

//   --------    "key" in object  ------


// for instance
// to check key is available in object or not
let users = {name: "jaydip" , age:24 , job:"dev",};

console.log("name" in users); //true name is exist in users , users.name

console.log("age" in users); //true age is exists in users, users.age

console.log("bablelel" in users) //false not exists in users.

/* 
Why does the in operator exist? Isn’t it enough to compare against undefined?

Well, most of the time the comparison with undefined works fine. 
But there’s a special case when it fails, but "in" works correctly.
 */

let obj = {
    test: undefined
  };
  
  console.log( obj.test ); // it's undefined, so - no such property?
  
  console.log( "test" in obj ); // true, the property does exist!



//   ------------  for in loop in object   -----------

// for in loop is different from for loop 

/* 
syntax :

for(key in user){
    // executes the body for each key among object properties
}
*/

let Customer ={
    name: "jaydip",
    type:"regular",
    isBuy:true
}


for(let key in Customer){
    // keys 
    console.log(key); //name , type, isBuy
   

}

for(let key in Customer){
     // values for the  key
    console.log(Customer[key]);//jaydip , regular, true
}



// Ordered like an object

let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
  };
  
  for (let code in codes) {
    console.log(code);
    console.log(codes[code]) // 1, 41, 44, 49
  }


  let CustomerOne ={
    name:"jaysgio",
    surname:"aesvurgf",
  }

  CustomerOne.age = 20;

  for(let prop in CustomerOne){
    console.log(prop);
  }


//   -------     END      -------- 

/* 
example
We have an object storing salaries of our team:


Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0.


*/
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

  let sum = 0;

  for(let key in salaries){
    sum += salaries[key];
  }
  console.log(sum)


//   example 2
//   Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
// solution
  function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof obj[key] == 'number'){
            obj[key] *= 2;
        }
    }
  }
  multiplyNumeric(menu);
  console.log(menu);



//   topic 2
// Object references and copying

/* 
One of the fundamental differences of objects versus primitives is that objects are stored and copied
 “by reference”, whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.
*/


let message = "Hello!";
let phrase = message;

// As a result we have two independent variables, each one storing the string "Hello!".
/* 
A variable assigned to an object stores not the object itself, but its “address in memory” –
 in other words “a reference” to it.

 */


 let userId = {
    name: "John"
  };

  /* 
  The object is stored somewhere in memory (at the right of the picture), 
  while the user variable (at the left) has a “reference” to it.
  */


let userFive = { name: 'John' };

let admin = userFive;

admin.name = 'Pete'; // changed by the "admin" reference

console.log(userFive.name); // 'Pete', changes are seen from the "user" reference


// Cloning and merging, Object.assign
let userS = {
    name: "John",
    age: 30
  };
  
  let clone = {}; // the new empty object
  
  // let's copy all user properties into it
  for (let key in userS) {
    clone[key] = userS[key];
  }
  
  // now clone is a fully independent object with the same content
  clone.name = "Pete"; // changed the data in it
  
  console.log("cloning example result " +userS.name ); // still John in the original object


//   We can also use the method Object.assign.


/* 
Object.assign(dest, ...sources)
The first argument dest is a target object.
Further arguments is a list of source objects.


It copies the properties of all source objects into the target dest, and then returns it as the result.

*/

let userSe = { name: "John" };

let permission1 = {canView: true};
let permission2 = {canEdit: true};

Object.assign(userSe, permission1 , permission2);

console.log(userSe);

// If the copied property name already exists, it gets overwritten:


Object.assign(userSe, { name: "Pete" });

console.log(userSe.name); // now userSe = { name: "Pete" }

// We also can use Object.assign to perform a simple object cloning:

let cloneSe = Object.assign({}, userSe);

console.log( cloneSe);

// Nested cloning
// Until now we assumed that all properties of user are primitive. But properties can be references to other objects.

// Like this:

let userE = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

console.log( userE.sizes.height ); // 182


let userN = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let cloneN = Object.assign({}, userN);
  
  console.log( userN.sizes === cloneN.sizes ); // true, same object
  
  // userN and cloneN share sizes
  userN.sizes.width = 60;    // change a property from one place
  console.log(cloneN.sizes.width); // 60, get the result from the other one


//   structuredClone 

/* 
It deep cloning that copy data and not reference of the object data in memory
The structuredClone method can clone most data types, such as objects, arrays, primitive values.

It also supports circular references, when an object property references the object itself 
(directly or via a chain or references).

// error
structuredClone({
  f: function() {}
});
Function properties aren’t supported.

let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = structuredClone(user);

alert( user.sizes === clone.sizes ); // false, different objects

// user and clone are totally unrelated now
user.sizes.width = 60;    // change a property from one place
alert(clone.sizes.width); // 50, not related
*/