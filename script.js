// Load elements from local storage or use default values
var elements = JSON.parse(localStorage.getItem('elements')) || [
    "Apple",
    "Banana",
    "Orange",
    "Grapes",
    "Pineapple",
    "Watermelon",
    "Strawberry"
];

// Function to save elements array to local storage
function saveElementsToLocalStorage() {
    localStorage.setItem('elements', JSON.stringify(elements));
}

// Function to select a random element from the list, remove it, and display it
function selectRandomElement() {
    if (elements.length === 0) {
        document.getElementById("output").innerHTML = "<p>No elements left!</p>";
        return;
    }

    var randomIndex = Math.floor(Math.random() * elements.length);
    var randomElement = elements.splice(randomIndex, 1)[0];
    saveElementsToLocalStorage(); // Save updated elements array to local storage
    document.getElementById("output").innerHTML = "<p>Selected Element: " + randomElement + "</p>";
}

// Load elements from local storage when the page is loaded
window.onload = function() {
    if (localStorage.getItem('elements')) {
        elements = JSON.parse(localStorage.getItem('elements'));
    }
};
