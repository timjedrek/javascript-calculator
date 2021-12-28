let input = "";
let output = "";
let number1 = 0;
let number2 = 0;
let operator = ""

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
const hypen = document.getElementById("subtractButton");
const X = document.getElementById("multiplyButton");
const forwardSlash = document.getElementById("divideButton");

const point = document.getElementById("decimal");
const ni = document.getElementById("equals");
/*
Ni is the Japanese pronounciation of the following characters 
    に
    二
    ニ
Which all look pretty similar in the sense that they all have two horizontal lines which just so happens is what an equals sign looks like.. so yea.    
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

plus.addEventListener('click', () => {plusButtonClick();});

ni.addEventListener('click', () => {letsExecuteThatBitch();})


//operator functions
function add(a, b) {
    let c = Number(a) + Number(b);
    console.log(`add: ${a} + ${b} = ${c}`);
    return c;
}
function subtract(a, b) {
    let c = a - b;
    console.log(`subtract: ${a} - ${b} = ${c}`)
    return;
}
function divide(a, b) {
    let c = a / b;
    console.log(`divide: ${a} ÷ ${b} = ${c}`)
    return;
}
function multiply(a, b) {
    let c = a * b;
    console.log(`multiply: ${a} x ${b} = ${c}`)
    return;
}

function addInput(x) {
    input += x;
    updateTopScreen();
    return console.log(`input = ${input}`);
}

function clearInput() {
    input = ""
    number1 = 0;
    number2 = 0;
    updateTopScreen();
    return console.log(`input = cleared!`);
}

function deleteInput() {
    let deleteLength = input.length -1;
    input = input.substr(0,deleteLength);
    updateTopScreen();
    return console.log(`input = ${input}`);
}

function updateTopScreen () {
    topScreen.innerHTML = "";
    const inputContent = document.createElement('div');
    inputContent.textContent = input;
    topScreen.appendChild(inputContent);
    return console.log('screen updated');
}

function plusButtonClick() {
    if (number1 == 0) {
    number1 = input;
    operator = "addition"
    input += " + "
    updateTopScreen();
    console.log(`number1 = ${number1}`)
    return console.log(`input = ${input}`);
    }
    else {
        letsExecuteThatBitch()
        return console.log("there is something in number1")
    }
}

function letsExecuteThatBitch() {
    number2 = input.slice(number1.length + 3);
  
    if (operator = "addition") {
        output = add(number1, number2);
        console.log(`output = ${output}`)
    }
    else console.log("error")

    console.log(`input = ${input}`)
    console.log(`number1 = ${number1}`)
    console.log(`number2 = ${number2}`)
    console.log(`operator = ${operator}`)
    return console.log("Executed.. that bitch")

}