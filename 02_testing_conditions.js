
let bool1 = true, bool2 = true;

// JS has two versions of the "equal" operator: == (two equals signs) and === (three equals signs).
// == converts both variables being checked into the same type, === does not.
// Generally === is preferred to avoid type mismatches.
// This also applies to the "not equal" operator: != !==

function doBoolComparison() {
    // note: don't need the ""=== true" here to check if smth is true but i added it for readability
    if (bool1 === true && bool2 === true) {
        console.log("Both variables are true!")
    }
    else if (bool1 !== bool2) {
        console.log("The variables are different!")
    }
    else {
        console.log("Both variables are false.")
    }
    // There's also || for "OR", and ! to NOT a bool.
}

doBoolComparison()

let int1 = 5, int2 = 10, commonFactor = 2;

function doIntComparison() {
    if (int1 % commonFactor == 0 && int2 % commonFactor == 0) {
        console.log("Both ints are divisible by the same factor.")
    }
    else {
        console.log("Norpe")
    }
}