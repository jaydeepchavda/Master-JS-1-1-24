/*
  JavaScript is not a class-based object-oriented language. 
But it still has ways of using object oriented programming (OOP).


The most popular model of OOP is class-based.

But as I mentioned, JavaScript isn't a classed-based langauge – it's is a prototype-based langauge.


*/


//   -----------  The __proto__ property

/* 
This points to the object which is used as a prototype.

This is the property on every object that gives it access to the Object prototype property.

Every object has this property by default, which refers to the Object Protoype except when configured
 otherwise (that is, when the object's __proto__ is pointed to another prototype).

 Modifying the __proto__ property
This property can be modified by explicitly stating that it should refer to another prototype.
 The following methods are used to achieve this:
 */

//  ----   Object.create()
function DogObject(name, age) {
    let dog = Object.create(constructorObject);
    dog.name = name;
    dog.age = age;
    return dog;
}
let constructorObject = {
    speak: function(){
        return "I am a dog"
    }
}
let bingo = DogObject("Bingo", 54);
console.log(bingo);

// Notice the __proto__ property and the speak method?

// Object.create uses the argument passed to it to become the prototype.



//   ---------------      new keyword

function DogObjectOne(name, age) {
    this.name = name;
    this.age = age;
}
DogObjectOne.prototype.speak = function() {
    return "I am a dog";
}
let john = new DogObjectOne("John", 45);

console.log(john);

/* 
john's __proto__ property is directed to DogObject's prototype. But remember, 
DogObject's prototype is an object (key and value pair), hence it also has a __proto__ property which refers
 to the global Object protoype.

This technique is referred to as PROTOTYPE CHAINING.

Note that: the new keyword approach does the same thing as Object.create() but only makes it easier as
 it does some things automatically for you.


 And so...
Every object in Javascript has access to the Object's prototype by default. If configured to use another prototype, 
say prototype2, then prototype2 would also have
 access to the Object's prototype by default, and so on.
*/



/* 
Object + Function Combination
You are probably confused by the fact that DogObject is a function (function DogObject(){})
 and it has properties accessed with a dot notation. This is referred to as a function object combination.

When functions are declared, by default they are given a lot of properties attached to it.
 Remember that functions are also objects in JavaScript data types.
*/


//  ------------------      class

/* 
Now, Class
JavaScript introduced the class keyword in ECMAScript 2015. It makes JavaScript seem like an OOP language.
 But it is just syntatic sugar over the existing prototyping technique. It continues its prototyping in the 
background but makes the outer body look like OOP. We'll now look at how that's possible.
*/

class animal {
     constructor(name, specie) {
        this.name = name;
        this.specie = specie;
    }

    sing(){
        return `${this.name} can sing `;
    }
    dance(){
        return `${this.name} can dance`;
    }
}
let bingp  = new animal("TOM" , "cat");
console.log(bingp.sing());

class Animals {
    constructor(name, specie) {
        this.name = name;
        this.specie = specie;
    }
    sing() {
        return `${this.name} can sing`;
    }
    dance() {
        return `${this.name} can dance`;
    }
}
let bingo1 = new Animals("Bingo", "Hairy");
console.log(bingo1.sing());


/* 
The __proto__ references the Animals prototype (which in turn references the Object prototype).

From this, we can see that the constructor defines the major features while 
everything outside the constructor (sing() and dance()) are the bonus features (prototypes).
*/