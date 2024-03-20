var btnGetMessage = document.querySelector(".btn-submit");
var form = document.querySelector("form");
var output = document.querySelector(".output");
var outputImg = document.querySelector(".output-image")
var outputText = document.querySelector(".output-text");
var currentMessage;
var chosenArray;
var uniqueAffirmations = affirmations.slice();
var uniqueMantras = mantras.slice();

form.addEventListener("submit", (event) => {
    event.preventDefault();
    var currentType = form.querySelector(":checked").value;
    if (currentType === "affirmation") {
        if (!uniqueAffirmations.length) {
            uniqueAffirmations = copyArray(affirmations);
        } else {
            getMessage(uniqueAffirmations);
        }
    } else if (currentType === "mantra") {
        if (!uniqueMantras.length) {
            uniqueMantras = copyArray(mantras)
        } else {
            getMessage(uniqueMantras);
        }
    }
    renderMessage();
});

function getMessage(array) {
    var currentRandomIndex = getRandomIndex(array);
    currentMessage = array[currentRandomIndex];
    array.splice(currentRandomIndex, 1);
}

function renderMessage() {
    outputImg.classList.add("hidden");
    outputText.textContent = currentMessage;
}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function copyArray(source) {
    currentMessage = "You will now start seeing repeated messages...";
    return source.slice();
}
