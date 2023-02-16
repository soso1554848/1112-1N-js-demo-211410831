const userInput = document.querySelector('#input-number');
const addBtn = document.querySelector('#btn-add'); 
const subtractBtn = document.querySelector('#btn-subtract');
const multiplyBtn = document.querySelector('#btn-multiply');
const divideBtn = document.querySelector('#btn-divide');

const currentResultOutput = document.querySelector('#current-result');
const currentCalculationOutput = document.querySelector('#current-calculation');

//console.log('userInput', userInput);
//console.log('addBtn', addBtn);
//console.log('subtractBtn', subtractBtn);
//console.log('multiplyBtn', multiplyBtn);
//console.log('divideBtn', divideBtn);

//console.log('currentResultOutput', currentResultOutput);
//console.log('currentCalculationOutput', currentCalculationOutput);

//const buttons = document.querySelectorAll('buttons');
//console.log('buttons', buttons);

const defaultResult = 0;
let currentResult = defaultResult;


function getUserInput() {
    return parseInt(userInput.value);
}

function outputResult(result, text) {
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent = text;
}

// operand1 operand operand2 0 + 5
function add() {
    const operand1 = currentResult;
    const operand2 = getUserInput();
    currentResult = operand1 + operand2;
    console.log(`${operand1} + ${operand2} = ${currentResult}`);
    const calcText = `${operand1} + ${operand2}`;
    outputResult(currentResult, calcText);
}

addBtn.addEventListener('click', add);