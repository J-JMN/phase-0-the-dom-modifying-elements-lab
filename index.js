// Write your code here!
// Remove the <main> element with id "main"
const mainElement = document.querySelector("main#main");
if (mainElement) {
    mainElement.remove();
}

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Assign id="victory" to the <h1>
newHeader.id = "victory";

// Set text content (Replace "YOUR-NAME" with "Joseph Mburu")
newHeader.textContent = "Joseph Mburu is the champion";

// Append the new <h1> to the body
document.body.appendChild(newHeader);

// Ensure `newHeader` is globally accessible for the test suite
window.newHeader = newHeader;

