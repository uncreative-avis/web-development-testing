// now for the big stuff. functions. scary. here's how to define 'em

/*
    When assigning a string or logging, to insert values into the text,
    it's generally recommended that you use `backticks` to do ${template(Literals)}
*/

function exampleFunction(first, second) {
    console.log(`Parameters: ${first}, ${second}`)
}

function squareNumber(number) {
    return number * number
}

// and to run 'em

exampleFunction("TEST", "ING")
console.log(`Square example: ${squareNumber(69420)}`)