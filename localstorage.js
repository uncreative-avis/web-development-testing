/*
    https://www.w3schools.com/Jsref/prop_win_localstorage.asp
    https://www.w3schools.com/Jsref/prop_win_sessionstorage.asp

    localStorage lets you basically store data on the user's PC between sessions.
    sessionStorage lets you do the same, but it only lasts for the current session and clears when the tab closes.
    
    To set an item:    
    localStorage.setItem("itemKey", "value");

    To get an item:
    localStorage.getItem("itemKey");

    To remove an item:
    localStorage.removeItem("itemKey");

    To clear all items at once:
    localStorage.clear();

    Items are dynamically typed, just like variables (let, const).
    By convention, it's best to assign the obtained value from localStorage to a let or const value.
    let exampleItem = localStorage.getItem("itemKey");

    To see the site's localStorage, go to the F12 menu -> Application tab -> Storage -> Local storage
*/

// For this exmaple, "prompt" lets the user enter any string they want.
function saveInputToLocalStorage(key) {
    let userInput = prompt("Enter text.");

    localStorage.setItem(key, userInput)
}

function setTitleToLocalStorageValue(titleID, key) {
    const title = document.getElementById(titleID)

    if (!title) {
        console.log(`No item with ID ${titleID}`)
        return
    }

    title.innerText = localStorage.getItem(key)
}