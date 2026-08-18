// In JS, variables are typically in camelCase

// const creates a constant that can't change values
const constantInt = 44;

// let creates variables that only exist in the specific block they're defined in, basically local
let assignableString = "This is reassignable.";

// you can define multiple variables in one line
let firstName = "John", lastName = "Doe";

// var also works but is generally Not Recommended bc the way their scope is handled is weird and complex

// the above values are primitive/value types, meaning stuff like int, string, float
// below are reference types

// this is an "object", which is basically like a dictionary in GDScript
// but the keys dont have to have a type assigned to them.
let character = {
    name: "Vi",
    age: 27,
    // the trailing comma doesnt make the console throw any errors so ¯\_(ツ)_/¯
}

// to grab a value from an object, you can do either of these two:
// character.name | character["name"]

// this is an array. works as you'd expect i think
const exampleArray = [ 1, 2, 69.420, "you can have any value type in here too", ]

// javascript is a dynamically typed language and you cannot static type a variable by default :/
