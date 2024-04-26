'use strict'

const mainScreen = document.getElementById("big-screen");
const smallScreen = document.getElementById("small-screen")

function displayScreen(valueOfInputButton) {
    mainScreen.value += valueOfInputButton;
    smallScreen.value += valueOfInputButton;
}

function operator(valueOfInputButton) {
    clearScreen();
    smallScreen.value += valueOfInputButton;
}

function compute() {
    try {
        if (smallScreen.value == '' && mainScreen.value == ''){
            return
        } else if (smallScreen.value == '') {
            mainScreen.value = eval(mainScreen.value);

        } else {
            mainScreen.value = eval(smallScreen.value);
            smallScreen.value = '';
        }
        
    } catch (error) {
        allClear();
        mainScreen.value = "ERROR"
    }
    
}

function clearScreen() {
    mainScreen.value = '';
}

function allClear() {
    smallScreen.value = '';
    mainScreen.value = '';
}