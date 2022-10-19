buttonList = document.querySelectorAll("button");
returnDisplay = document.querySelector('#display');
clearButton = document.querySelector('#clear');
backSpace = document.querySelector('.back');
decimalButton = document.querySelector('.decimal')

let savedValue = 0;
let firstValue = 0;
let operation = 0;
let operationStarted = false;
let operationsDone = 0

displayTextArray = []

buttonList.forEach((button) => {
    button.addEventListener('click', (e) => {
        button.classList.add("pressed");
        console.log(displayTextArray.length);
        console.log(button.textContent);
        if (button.classList.contains('pressed') && button.textContent === '0' && operation === 3 && (displayTextArray.length < 1)) {
            displayText('Nice try, bucko!');
            clearButtonExec();
            return;
        };
        if (button.classList.contains('pressed') && button.classList.contains('sym')) {
            performOperation();
            operationStarted = true;
            if (button.textContent === '+' ) {
                operation = 0;
            }
            if (button.textContent === '-') {
                operation = 1;
            };
            if ((button.textContent) === '*') {
                operation = 2;
            };
            if ((button.textContent) === '/') {
                operation = 3;
            };
            displayTextArray = [];
            button.classList.remove("pressed");
        };
        if (button.classList.contains('disabled')) {
            return;
        }
        if (button.classList.contains('pressed') && button.classList.contains('back')) {
            let decimalCheck = displayTextArray.pop();
            if (decimalCheck === '.') {
                decimalButton.classList.remove('disabled');
            }
            updateTextArray();
            return;
        }
        if (button.classList.contains('pressed') && (button.classList.contains('num') || button.classList.contains('decimal'))) {
            displayTextArray.push(button.textContent);
            if (button.textContent === '.') {
                button.classList.add("disabled");
            }
            updateTextArray ();
        };
        if (button.classList.contains('pressed') && button.classList.contains('eql') && operationStarted) {
            performOperation();
            button.classList.remove("pressed");
        };
        if (clearButton.classList.contains('pressed')) {
        clearButtonExec();
        displayText('0');
        clearButton.classList.remove('pressed');
}})})

function updateTextArray () {
    storedNumbers = displayTextArray.join('');
    savedValue = Number(storedNumbers);
  //  console.log(storedNumbers);
    displayText(storedNumbers);
    button.classList.remove("pressed")
}

function performOperation () {
    if (displayTextArray.length < 1) {
        return;
    }
    tempValue = Number(operate(firstValue,savedValue));
    displayText(numberMassager(tempValue));
    console.log(numberMassager(tempValue));
    firstValue = tempValue;
    operationStarted = false;
    displayTextArray = [];
    storedNumbers = 0;
    disabledButton = document.querySelector('.decimal');
    disabledButton.classList.remove('disabled');
    operationsDone++;
}

function numberMassager (n) {
  //  regex = /\.+0*[1-9]*0*$/g
    if (n.isInteger) {
        return n;
    };
    return parseFloat(n.toFixed(5));
}

function clearButtonExec () {
        firstValue = 0;
        savedValue = 0;
        operationStarted = false;
        displayTextArray = [];
        operation = 0;
    }

function displayText(text) {
    returnDisplay.textContent = text;
}

function add (a,b) {
   return +a + +b;
}

function subtract (a,b) {
   return a - b;
}

function multiply (a,b) {
    return a * b;
}

function divide (a,b) {
    return a / b;
}

function operate (a,b) {
    if (operation === 0) {
        result = add(a,b);
    }
    if (operation === 1) {
        result = subtract(a,b);
    }
    if (operation === 2) {
       result = multiply(a,b);
    } 
    if (operation === 3) {
       result = divide(a,b);
    }
    return result;
}   