        // Garbage collection
        /* 
        Memory management in JavaScript is performed automatically and invisibly to us. 
        We create primitives, objects, functions… All that takes memory.
        */

        // Reachability

        /* 
        Simply put, “reachable” values are those that are accessible or usable somehow. 
        They are guaranteed to be stored in memory.

        There’s a base set of inherently reachable values, that cannot be deleted for obvious reasons.

        For instance:

        The currently executing function, its local variables and parameters.
        Other functions on the current chain of nested calls, their local variables and parameters.
        Global variables.
        (there are some other, internal ones as well)
        These values are called roots.

        Any other value is considered reachable if it’s reachable from a root by a reference or
        by a chain of references.

        For instance, if there’s an object in a global variable, 
        and that object has a property referencing another object,
        that object is considered reachable. And those that it references are also reachable.
        Detailed examples to follow.
        */

        // A simple example
        // Here’s the simplest example:

        // user has a reference to the object
        let user = {
        name: "John",
        };
        /* 
        Here the arrow depicts an object reference. The global variable "user" references the object {name: "John"} 
        (we’ll call it John for brevity). The "name" property of John stores a primitive, 
        so it’s painted inside the object.

        If the value of user is overwritten, the reference is lost: 
        */

        user = null;
        /* 

        Now John becomes unreachable. There’s no way to access it, no references to it.
        Garbage collector will junk the data and free the memory.
        */
        /* 
        Interlinked objects
        Now a more complex example. The family:
        */

        function marry(man, woman) {
        woman.husband = man;
        man.wife = woman;

        return {
            father: man,
            mother: woman
        }
        }

        let family = marry({
        name: "John"
        }, {
        name: "Ann"
        });


        /*
        Function marry “marries” two objects by giving them references to each other and returns a 
        new object that contains them both.
        */

        delete family.father;
        delete family.mother.husband;

        /* 
        It’s not enough to delete only one of these two references, because all objects would still be reachable.

        But if we delete both, then we can see that John has no incoming reference any more:

        Outgoing references do not matter. Only incoming ones can make an object reachable. So, John is now unreachable 
        and will be removed from the memory with all its data that also became unaccessible.
        */

        /* 
        Internal algorithms
        The basic garbage collection algorithm is called “mark-and-sweep”.

        The following “garbage collection” steps are regularly performed:

        The garbage collector takes roots and “marks” (remembers) them.
        Then it visits and “marks” all references from them.
        Then it visits marked objects and marks their references. All visited objects are remembered, 
        so as not to visit the same object twice in the future.
        …And so on until every reachable (from the roots) references are visited.
        All objects except marked ones are removed.
        */

