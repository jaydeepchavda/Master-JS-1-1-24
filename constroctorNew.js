    //   -------    Constructor, operator "new"    --------

    /* 
                The regular {...} syntax allows us to create one object. 
                But often we need to create many similar objects, like multiple users or menu items and so on.

                That can be done using constructor functions and the "new" operator.
                */

    //  -------    Constructor function
    /* 
                    
                Constructor functions technically are regular functions. There are two conventions though:

                They are named with capital letter first.
                They should be executed only with "new" operator.


                */

    function User(name) {
      this.name = name;
      this.isAdmin = false;
    }

    let user = new User("Jack");

    console.log(user.name); // Jack
    console.log(user.isAdmin); // false

    /* 
                  When a function is executed with new, it does the following steps:

                A new empty object is created and assigned to this.
                The function body executes. Usually it modifies this, adds new properties to it.
                The value of this is returned.
                  */

    /* 
                Return from constructors
                Usually, constructors do not have a return statement. Their task is to write all necessary stuff into this, and it automatically becomes the result.

                But if there is a return statement, then the rule is simple:

                If return is called with an object, then the object is returned instead of this.
                If return is called with a primitive, it’s ignored.
                In other words, return with an object returns that object, in all other cases this is returned.

                For instance, here return overrides this by returning an object:

                function BigUser() {

                  this.name = "John";

                  return { name: "Godzilla" };  // <-- returns this object
                }

                alert( new BigUser().name );  // Godzilla, got that object
                */

    /* 
                Methods in constructor
                Using constructor functions to create objects gives a great deal of flexibility. The constructor function may have parameters that define how to construct the object, and what to put in it.

                Of course, we can add to this not only properties, but methods as well.

                For instance, new User(name) below creates an object with the given name and the method sayHi:

                function User(name) {
                  this.name = name;

                  this.sayHi = function() {
                    alert( "My name is: " + this.name );
                  };
                }

                let john = new User("John");

                john.sayHi(); // My name is: John

                /*
                john = {
                  name: "John",
                  sayHi: function() { ... }
                }
                */
    /*  
                Constructor functions or, briefly, constructors, are regular functions, but there’s a 
                common agreement to name them with capital letter first.
                Constructor functions should only be called using new. Such a call implies a creation of 
                empty this at the start and returning the populated one at the end.

                */

    /* 
                example

                Create new Accumulator
                importance: 5
                Create a constructor function Accumulator(startingValue).

                Object that it creates should:

                Store the “current value” in the property value. The starting value is set to the argument of the 
                constructor startingValue.
                The read() method should use prompt to read a new number and add it to value.
                */

    function Accumulator(startingValue) {
      this.value = startingValue;

      this.read = function () {
        // this.value += +prompt("How much to add?", 0);
      };
    }

    let accumulator = new Accumulator(1);
    accumulator.read();
    accumulator.read();
    // alert(accumulator.value);

    /* 
                  
                  Create new Calculator
                importance: 5
                Create a constructor function Calculator that creates objects with 3 methods:

                read() prompts for two values and saves them as object properties with names a and b respectively.
                sum() returns the sum of these properties.
                mul() returns the multiplication product of these properties.
                */

    function Calculator() {
      this.read = function () {
        // this.a = +prompt("a?", 0);
        // this.b = +prompt("b?", 0);
      };

      this.sum = function () {
        return this.a + this.b;
      };

      this.mul = function () {
        return this.a * this.b;
      };
    }

    let calculator = new Calculator();
    calculator.read();

    // alert("Sum=" + calculator.sum());
    // alert("Mul=" + calculator.mul());

    // --------------      Optional chaining '?.'

    // The optional chaining ?. is a safe way to access nested object properties,
    // even if an intermediate property doesn’t exist.

    //   let users = {}; // a user without "address" property

    // alert(users.address.street); // Error!

    // That’s the expected result. JavaScript works like this.
    // As user.address is undefined, an attempt to get user.address.street fails with an error.

    // document.querySelector('.elem') is null if there's no element
    // let html = document.querySelector('.elem').innerHTML; // error if it's null

    // The obvious solution would be to check the value using if or the conditional operator ?,
    // before accessing its property, like this:

    // let users = {};

    // alert(users.address ? users.address.street : undefined);

    // let html = document.querySelector('.elem') ? document.querySelector('.elem').innerHTML : null;

    // E.g. let’s get user.address.street.name in a similar fashion.

    // let users = {}; // user has no address

    // alert(users.address ? users.address.street ? users.address.street.name : null : null);

    // There’s a little better way to write it, using the && operator:

    // alert( user.address && user.address.street && user.address.street.name ); // undefined (no error)

    //  --------------      Optional chaining

    // Further in this article, for brevity, we’ll be saying that something “exists”
    // if it’s not null and not undefined.

    // The optional chaining ?. stops the evaluation if the value before ?.
    // is undefined or null and returns undefined.?

    /* 
                In other words, value?.prop:

                works as value.prop, if value exists,
                otherwise (when value is undefined/null) it returns undefined.
                */

    let userO = {}; // user has no address

    console.log(userO?.address?.street); // undefined (no error)

    /* The code is short and clean, there’s no duplication at all.

            Here’s an example with document.querySelector: */

    // let html = document.querySelector(".elem")?.innerHTML; // will be undefined, if there's no element

    //   -------------     Short-circuiting

    /* 
            As it was said before, the ?. immediately stops (“short-circuits”) the evaluation if the left part doesn’t exist.

    So, if there are any further function calls or operations to the right of ?., they won’t be made.

    For instance:

    
            */

    let userT = null;
    let x = 0;

    userT?.sayHi(x++); // no "user", so the execution doesn't reach sayHi call and x++

    console.log(x); // 0, value not incremented

    //  -------------  Other variants: ?.(), ?.[]
/*
 The optional chaining ?. is not an operator, but a special syntax construct,
 that also works with functions and square brackets.

For example, ?.() is used to call a function that may not exist.
 
*/

let userAdmin = {
  admin() {
    console.log("I am admin");
  }
};

let userGuest = {};

userAdmin.admin?.(); // I am admin

userGuest.admin?.(); // nothing happens (no such method)

/* 
Here, in both lines we first use the dot (userAdmin.admin) to get admin property, 
because we assume that the user object exists, so it’s safe read from it.

Then ?.() checks the left part: if the admin function exists, then it runs (that’s so for userAdmin). 
Otherwise (for userGuest) the evaluation stops without errors.

The ?.[] syntax also works, if we’d like to use brackets [] to access properties instead of dot .. 
Similar to previous cases, 
it allows to safely read a property from an object that may not exist.
*/

let key = "firstName";

let user1 = {
  firstName: "John"
};

let user2 = null;

console.log( user1?.[key] ); // John
console.log( user2?.[key] ); // undefined

// Also we can use ?. with delete:

delete user1?.firstName; // delete user.name if user exists

console.log(user1?.[key] );


// -------------     Summary

/* 
  1  obj?.prop – returns obj.prop if obj exists, otherwise undefined.
  2  obj?.[prop] – returns obj[prop] if obj exists, otherwise undefined.
  3  obj.method?.() – calls obj.method() if obj.method exists, otherwise returns undefined.
    

  As we can see, all of them are straightforward and simple to use. The ?. checks the
   left part for null/undefined and allows the evaluation to proceed if it’s not so.

A chain of ?. allows to safely access nested properties.

Still, we should apply ?. carefully, only where it’s acceptable, according to our code logic, 
that the left part doesn’t exist. So that it won’t hide programming errors from us, if they occur. 
 */

