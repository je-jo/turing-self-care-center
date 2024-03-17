var btnGetMessage = document.querySelector(".receive-message");
var form = document.querySelector("form");
var output = document.querySelector(".output")
var currentType;
var currentMessage;

form.addEventListener("submit", (event) => {
    event.preventDefault();
    getMessage();
    renderMessage();
});

function getMessage() {
    currentType = form.querySelector(":checked").value;
    if (currentType === "affirmation") {
        currentMessage = affirmations[getRandomIndex(affirmations)];
    } else {
        currentMessage = mantras[getRandomIndex(mantras)];
    }
    return currentMessage;
}

function renderMessage() {
    output.textContent = currentMessage;
}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
}
