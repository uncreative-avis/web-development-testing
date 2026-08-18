/* 
    To get an element from the current HTML page, use document.getElementById('ELEMENT').

    This can be done to change something in an element:

    You can also do this to get its style, and set something from it:
    document.getElementById('ELEMENT').style.variableToChange = newValue

    (Note: When accessing a CSS style from JS,
     the name should be in camelCase instead of kebab-case.)
    
    Also important to note: JS has a built-in way to get the CSS body: document.body
*/

function setText(id, newText) {
    // Function to set the text of an element.
    // To set the text of any text element, use innerText.
    const element = document.getElementById(id); // checking here if there's actually an element
    if (element) {
        element.innerText = newText;
        console.log(`Changed text of ${id} to ${newText}`)
    }
    else {
        console.error(`No element with ID ${id} exists!`);
    }
}

function changeBGColor(newColor) {
    document.body.style.backgroundColor = newColor;
    console.log(`Changed BG Colour to ${newColor}`);
}
