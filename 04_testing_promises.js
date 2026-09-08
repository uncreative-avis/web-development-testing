/*
    TUTORIAL I'M FOLLOWING: https://youtu.be/A5PiecCRnE0

    JS is single-threaded, meaning it can only do one thing at a time.

    Asynchronous code lets you start an operation that you know might take a while,
    and instead of waiting for that operation to finish, thereby freezing the page for a bit,
    it will return a placeholder value and let the rest of the code run
    while finishing the slow operation in the background.

    This is known as "promises". It's basically saying
    "I promise this will be an actual value later, but for now,
    use this value and keep doing other things."

    fetch returns a promise that is marked as "pending". 
    Once the operation finishes, the promise is "resolved" and the code in the fetch's "then" block is run.
    If it fails, the promise is "rejected" and a "catch" block is run.
*/

const testPromise = new Promise((resolve, reject) => {
    const result = 2 + 5;
    if (result === 10) {
        resolve("Promise resolved!"); // can be anything, even more complex data
    } else { // promise failed
        reject("Promise rejected! ahhhh");
    }
});

/*
    promises basically test to see if something worked,
    and return a resolve or a reject depending on if it did
*/

/*
    the argument in the then & catch functions contains the data returned by the promise
    (the "resolve" and "reject" values for then and catch respectively)

    .finally() will run after the promise is either resolved or rejected. can be used 
*/

testPromise.then(message => {
    console.log(message);
}).catch(message => {
    console.log(message);
}).finally(() => {
    console.log("Promise finished!");
})

/*
    There's also the ability to write promises as "async" functions,
    which is newer in JS and helps makd promises easier to read
*/

// copy pasted from above
const myPromise = new Promise((resolve, reject) => {
    const result = 2 + 5;
    if (result === 10) {
        resolve("Promise resolved!"); 
    } else { 
        reject("Promise rejected! ahhhh");
    }
});

async function newPromise() {
    console.log("New Promise Function Started")
    const result = await myPromise;
    try {
        // it basically works the same as the above promse stuff but it's easier to read
    }
    catch {
        // imo this is the ideal way to write a promise i think idk man
    }
    finally {
        // i sitll dont know how to use promises but hey thats web development innit
    }
}

newPromise();