            // Object methods

            // Objects are usually created to represent entities of the real world, like users, orders and so on:

            let user = {
            name: "js",
            aga: 20,
            };
            /*
                        And, in the real world, a user can act: select something from the shopping cart, login, logout etc.

                        Actions are represented in JavaScript by functions in properties.
                        */

            // method example

            // For a start, let’s teach the user to say hello:

            user.sayHi = function () {
            console.log("hello");
            };

            user.sayHi();

            /* 
                        A function that is a property of an object is called its method.

                        So, here we’ve got a method sayHi of the object user.
                        */

            // “this” in methods

            // To access the object, a method can use the this keyword.

            let user1 = {
            name: "js",
            age: 20,
            sayHello() {
                console.log(`hello ${this.name}`);
            },
            };

            user1.sayHello();

            /* 
                        Here during the execution of user.sayHi(), the value of this will be user.

                        Technically, it’s also possible to access the object without this, by referencing it via the outer variable:

                        let user = {
                        name: "John",
                        age: 30,

                        sayHi() {
                            alert(user.name); // "user" instead of "this"
                        }

                        };
                        …But such code is unreliable. If we decide to copy user to another variable,
                        e.g. admin = user and overwrite user with something else, then it will access the wrong object.

                        That’s demonstrated below:

                        let user = {
                        name: "John",
                        age: 30,

                        sayHi() {
                            alert( user.name ); // leads to an error
                        }

                        };


                        let admin = user;
                        user = null; // overwrite to make things obvious

                        admin.sayHi(); // TypeError: Cannot read property 'name' of null
                        If we used this.name instead of user.name inside the alert, then the code would work.
                        */

            // “this” is not bound

            // In JavaScript, keyword this behaves unlike most other programming languages.
            // It can be used in any function, even if it’s not a method of an object.

            let user2 = { name: "John" };
            let admin2 = { name: "Admin" };

            function sayBye() {
            console.log(this.name);
            }

            user2.f = sayBye;
            admin2.f = sayBye;

            user2.f();
            admin2.f();

            admin2["f"]();

            // Arrow functions have no “this”
            /*             Arrow functions are special: they don’t have their “own” this.
                        If we reference this from such a function, it’s taken from the outer “normal” function. */

            let user3 = {
            firstName: "chavda",
            sayHi() {
                let arrow = () => {
                console.log(this.firstName);
                };
                arrow();
            },
            };

            user3.sayHi();

            /* 
                        Summary
            Functions that are stored in object properties are called “methods”.
            Methods allow objects to “act” like object.doSomething().
            Methods can reference the object as this.
            The value of this is defined at run-time.

            When a function is declared, it may use this, but that this has no value until the function is called.
            A function can be copied between objects.
            When a function is called in the “method” syntax: object.method(), the value of this during the call is object.
                        */

            // example
            // Create a calculator
            // importance: 5
            // Create an object calculator with three methods:

            // read() prompts for two values and saves them as object properties with names a and b respectively.
            // sum() returns the sum of saved values.
            // mul() multiplies saved values and returns the result.


            let calculator = {
                sum() {
                  return this.a + this.b;
                },
              
                mul() {
                  return this.a * this.b;
                },
              
                read() {
                  this.a = +prompt('a?', 0);
                  this.b = +prompt('b?', 0);
                }
              };
              
              calculator.read();
              alert( calculator.sum() );
              alert( calculator.mul() );


            //   exmaple 2
            
            /* 
            Chaining
importance: 2
There’s a ladder object that allows to go up and down:
            */

/* let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert( this.step );
      return this;
    }
  };
  
  ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
 */