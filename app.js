let number1 = "";
let number2 = "";
let operator = null;
let needToResetScreen = false;

//declare variables for each DOM element
const topScreen = document.getElementById("topScreen");
const bottomScreen = document.getElementById("bottomScreen");
const buttonClear = document.getElementById("clearButton");
const buttonDelete = document.getElementById("deleteButton");
const button1 = document.getElementById("1button");
const button2 = document.getElementById("2button");
const button3 = document.getElementById("3button");
const button4 = document.getElementById("4button");
const button5 = document.getElementById("5button");
const button6 = document.getElementById("6button");
const button7 = document.getElementById("7button");
const button8 = document.getElementById("8button");
const button9 = document.getElementById("9button");
const button0 = document.getElementById("0button");
const plus = document.getElementById("plusButton");
const hyphen = document.getElementById("subtractButton");
const X = document.getElementById("multiplyButton");
const forwardSlash = document.getElementById("divideButton");
const point = document.getElementById("decimal");
const ni = document.getElementById("equals");
/*
Ni is the Japanese pronounciation of the following characters:
    に 
    二 
    ニ 
Which all look pretty similar in the sense that they all have two horizontal lines with on on top of the other which just so happens is what an equals sign looks like.. so yea.    
*/

//event listners
button1.addEventListener('click', () => {addInput(1);});
button2.addEventListener('click', () => {addInput(2);});
button3.addEventListener('click', () => {addInput(3);});
button4.addEventListener('click', () => {addInput(4);});
button5.addEventListener('click', () => {addInput(5);});
button6.addEventListener('click', () => {addInput(6);});
button7.addEventListener('click', () => {addInput(7);});
button8.addEventListener('click', () => {addInput(8);});
button9.addEventListener('click', () => {addInput(9);});
button0.addEventListener('click', () => {addInput(0);});
buttonClear.addEventListener('click', () => {clearInput();});
buttonDelete.addEventListener('click', () => {deleteInput();});
plus.addEventListener('click', () => {setOperator("+");});
hyphen.addEventListener('click', () => {setOperator("-");});
X.addEventListener('click', () => {setOperator("x");});
forwardSlash.addEventListener('click', () => {setOperator("÷");});
point.addEventListener('click', () => {pointButtonClick();});
ni.addEventListener('click', () => {letsExecuteThatBitch();});
window.addEventListener('keydown', handleKeyboardInput);


//operator functions
function add(a, b) {
    return a + b;
};
function subtract(a, b) {
    return a - b;
};
function divide(a, b) {
    return a / b;
};
function multiply(a, b) {
    return a * b;
};

function addInput(number){
    if (bottomScreen.textContent === "0" || needToResetScreen)
        resetScreen();
    bottomScreen.textContent += number;
};

function resetScreen() {
    bottomScreen.textContent = "";
    needToResetScreen = false;
};

function clearInput() {
    bottomScreen.textContent = "0";
    topScreen.textContent = "";
    number1 = "";
    number2 = "";
    operator = null;
};

function deleteInput() {
    bottomScreen.textContent = bottomScreen.textContent.toString().slice(0, -1);
};

function pointButtonClick() {
    if (needToResetScreen) resetScreen();
    if (bottomScreen.textContent === "")
        bottomScreen.textContent = "0";
    if (bottomScreen.textContent.includes(".")) return 
    bottomScreen.textContent += ".";
};

function setOperator(operatorSelection) {
    if (operator !== null) letsExecuteThatBitch();
    number1 = bottomScreen.textContent;
    operator = operatorSelection;
    topScreen.textContent = `${number1} ${operator}`;
    needToResetScreen = true;
};

function letsExecuteThatBitch() {
    if (operator === null || needToResetScreen) return;
    if (operator === "÷" && bottomScreen.textContent === "0" ) {
        alert("You Fool!")
        return;
    };
    number2 = bottomScreen.textContent;
    bottomScreen.textContent = roundResult(
        operate(operator, number1, number2)
    );
    topScreen.textContent = `${number1} ${operator} ${number2} =`;
    operator = null;
};

function roundResult(number) {
    return Math.round(number * 100000) / 100000;
};

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "x":
            return multiply(a,b);
        case "÷":
            if (b === 0) return null;
            else return divide (a,b)
        default:
            return null;
    }
};

function handleKeyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) addInput(e.key);
    if (e.key === ".") pointButtonClick();
    if (e.key === "=" || e.key === "Enter") letsExecuteThatBitch();
    if (e.key === "Backspace") deleteInput();
    if (e.key === "Escape") clearInput();
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') setOperator(convertOperator(e.key))
  }
  
  function convertOperator(keyboardOperator) {
    if (keyboardOperator === '/') return '÷'
    if (keyboardOperator === '*') return '×'
    if (keyboardOperator === '-') return '−'
    if (keyboardOperator === '+') return '+'
  }