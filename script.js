'use strict'

const mainScreen = document.getElementById("big-screen");
const smallScreen = document.getElementById("small-screen")
let evaluationsString = '';

function displayScreen(valueOfInputButton) {
    mainScreen.value += valueOfInputButton;
    evaluationsString += valueOfInputButton;
}

function operator(valueOfInputButton) {
    mainScreen.value = '';
    evaluationsString += valueOfInputButton;
    smallScreen.value += evaluationsString;
}

function compute() {
    try {
        if (evaluationsString == '' && mainScreen.value == ''){
            return;
        } else {
            mainScreen.value = eval(evaluationsString);
            smallScreen.value = '';
        }
        
    } catch (error) {
        allClear();
        mainScreen.value = "ERROR"
    }
    
}

function clearScreen() {
    let numberToClear = mainScreen.value;
    evaluationsString = evaluationsString.replace(numberToClear, '');
    mainScreen.value = '';
}

function allClear() {
    smallScreen.value = '';
    mainScreen.value = '';
    evaluationsString = '';
}