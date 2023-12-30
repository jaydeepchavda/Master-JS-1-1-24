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