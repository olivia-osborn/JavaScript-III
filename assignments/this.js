/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/global binding -- when using "this" in the global scope, the value will be the window object
* 2. Implicit binding -- when "this" is bound within a local scope, the value is equal to the object before the dot (when calling the function)
* 3. New binding -- when a constructor function is used to create an object, the value of "this" is applied to the specific instance of the object that is created
* 4. Explicit binding -- when you control the value of "this" by using a call or apply method
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function introduce(firstName) {
    console.log(this);
    return name;
}
// introduce("Olivia");

// Principle 2

// code example for Implicit Binding
const myObj = {
    firstName: "Olivia",
    lastName: "Osborn",
    greeting: function() {
        console.log(`Hello  my name is ${this.firstName} ${this.lastName}`);
    }
};
// myObj.greeting();

// Principle 3

// code example for New Binding
function GreetSomeone(greeter){
    this.greeter = greeter;
    this.greeting = "Hi there!"
    this.speak = function() {
        console.log(`${this.greeting} My name is ${this.greeter}`)
    }
}

const me = new GreetSomeone("Olivia");
// me.speak();

// Principle 4

// code example for Explicit Binding
const myself = {
    name: "Olivia",
    age: 23
}

const shows = ["The office", "The Great British Bake Off"]

function introduce(shows1, shows2) {
    console.log(`Hi! My name is ${this.name}, and my favorite shows are ${shows1} and ${shows2}`)
}

// introduce.apply(myself, shows);




