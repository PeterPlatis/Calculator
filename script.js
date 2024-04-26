const zero = document.getElementById("zero").addEventListener("click", () => {
    displayOnScreen("zero");
});
const one = document.getElementById("one").addEventListener("click", () => {
    displayOnScreen("one");
});
const two = document.getElementById("two").addEventListener("click", () => {
    displayOnScreen("two");
});
const three = document.getElementById("three").addEventListener("click", () => {
    displayOnScreen("three");
});
const four = document.getElementById("four").addEventListener("click", () => {
    displayOnScreen("four");
});
const five = document.getElementById("five").addEventListener("click", () => {
    displayOnScreen("five");
});
const six = document.getElementById("six").addEventListener("click", () => {
    displayOnScreen("six");
});
const seven = document.getElementById("seven").addEventListener("click", () => {
    displayOnScreen("seven");
});
const eight = document.getElementById("eight").addEventListener("click", () => {
    displayOnScreen("eight");
});
const nine = document.getElementById("nine").addEventListener("click", () => {
    displayOnScreen("nine");
});
const clear = document.getElementById("C").addEventListener("click", () => {
    displayOnScreen("clear");
});
const equals = document.getElementById("equals").addEventListener("click", () => {
    displayOnScreen("equals");
});
const minus = document.getElementById("minus").addEventListener("click", () => {
    displayOnScreen("minus");
});
const plus = document.getElementById("plus").addEventListener("click", () => {
    displayOnScreen("plus");
});
const divide = document.getElementById("divide").addEventListener("click", () => {
    displayOnScreen("divide");
});
const multiply = document.getElementById("multiply").addEventListener("click", () => {
    displayOnScreen("multiply");
});

const mainScreenDisplay = document.getElementById("main-screen");
const smallScreenDisplay = document.getElementById("small-screen");

let mainScreenMaxCharacters = 0;

function displayOnScreen(buttonValue) {
    if (mainScreenMaxCharacters < 10) {
        switch(buttonValue) {
            case "zero":
                smallScreenDisplay.innerText += "0";
                mainScreenDisplay.innerText += "0";
                mainScreenMaxCharacters++;
                break;
            case "one":
                smallScreenDisplay.innerText += "1";
                mainScreenDisplay.innerText += "1";
                mainScreenMaxCharacters++;
                break;
            case "two":
                smallScreenDisplay.innerText += "2";
                mainScreenDisplay.innerText += "2";
                mainScreenMaxCharacters++;
                break;
            case "three":
                smallScreenDisplay.innerText += "3";
                mainScreenDisplay.innerText += "3";
                mainScreenMaxCharacters++;
                break;
            case "four":
                smallScreenDisplay.innerText += "4";
                mainScreenDisplay.innerText += "4";
                mainScreenMaxCharacters++;
                break;
            case "five":
                smallScreenDisplay.innerText += "5";
                mainScreenDisplay.innerText += "5";
                mainScreenMaxCharacters++;
                break;
            case "six":
                smallScreenDisplay.innerText += "6";
                mainScreenDisplay.innerText += "6";
                mainScreenMaxCharacters++;
                break;
            case "seven":
                smallScreenDisplay.innerText += "7";
                mainScreenDisplay.innerText += "7";
                mainScreenMaxCharacters++;
                break;
            case "eight":
                smallScreenDisplay.innerText += "8";
                mainScreenDisplay.innerText += "8";
                mainScreenMaxCharacters++;
                break;
            case "nine":
                smallScreenDisplay.innerText += "9";
                mainScreenDisplay.innerText += "9";
                mainScreenMaxCharacters++;
                break;
            case "plus":
                smallScreenDisplay.innerText += "+";
                mainScreenDisplay.innerText = "";
                mainScreenMaxCharacters = 0;
                break;
            case "minus":
                smallScreenDisplay.innerText += "-";
                mainScreenDisplay.innerText = "";
                mainScreenMaxCharacters = 0;
                break;
            case "multiply":
                smallScreenDisplay.innerText += "*";
                mainScreenDisplay.innerText = "";
                mainScreenMaxCharacters = 0;
                break;
            case "divide":
                smallScreenDisplay.innerText += "/";
                mainScreenDisplay.innerText = "";
                mainScreenMaxCharacters = 0;
                break;
            case "clear":
                smallScreenDisplay.innerText = "";
                mainScreenDisplay.innerText = "";
                mainScreenMaxCharacters = 0;
                break;
            case "equals":
                smallScreenDisplay.innerText = "";
                mainScreenDisplay.innerText += "0";
                mainScreenMaxCharacters = 0;
                break;
        }
    } else {
        switch(buttonValue) {
            case "plus":
                break;
            case "minus":
                break;
            case "multiply":
                
                break;
            case "divide":
                
                break;
            case "clear":
                
                break;
            case "equals":
                
                break;
        }
    }
    
}