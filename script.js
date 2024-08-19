let firstNum, secondNum, operand;

let digits =[];

let stepResults = [];

let displayValue = "";

const numberButtons = document.querySelectorAll(".number");
const functionButtons = document.querySelectorAll(".function");
const display = document.querySelector(".display-screen");

numberButtons.forEach((button) =>{
    button.addEventListener("click", () =>{
        let digit = button.innerText;
        digits.push(digit);
        displayValue+= digit;
        display.innerText = displayValue;
        console.log(digit);
    });
});

functionButtons.forEach((button) =>{
    button.addEventListener("click", () =>{
        convertToNumber(); //this way the second number gets stored first
        if(stepResults.length>=2){
            //clears the intermediary array and executes operation with them
            const num2 = stepResults.pop();
            const num1 = stepResults.pop();
            let result = operate(num1, operand, num2);
            //puts the result back into the array for math + changing displayValue
            if(typeof(result)== "number"){
                stepResults.push(result);
                console.log(result);
            }
            //displays the result
            display.innerText = displayValue;
        }
        displayValue = "";
        operand = button.id;
        console.log(operand);
    });
    });

function convertToNumber (){
    let numString = "";
    while (digits.length >0){
        numString+= digits.shift();
    }
    console.log("convertToNumber executing");
    stepResults.push(parseInt(numString));
    console.log(stepResults);
}

function operate(num1, operation, num2){
    switch(operation){
        case("add"):
            displayValue = add(num1, num2);
            return add(num1, num2);
        case("subtract"):
            displayValue = subtract(num1, num2);
            return subtract(num1, num2);
        case("multiply"):
            displayValue = multiply(num1, num2);
            return multiply(num1, num2);
        case("divide"):
            displayValue = divide(num1, num2);
            return divide(num1, num2);
        case ("all-clear"):
            displayValue = "";
            while (stepResults.length >0){
                stepResults.pop();
            }
            while (digits.length>0){
                digits.pop();
            }
        case ("delete"):
            digits.pop();
            let temp = displayValue.slice(0, displayValue.length-1);
            displayValue = temp;
            display.innerText = displayValue;
        }

    }

function refreshDisplay(){

}

function add(num1, num2){
    return num1+num2;
}

function subtract(num1, num2){
    return num1-num2;
}

function multiply(num1, num2){
 return num1*num2;
}

function divide(num1, num2){
    if(num2!=0) 
    return num1/num2; 
    else
    return "ERROR"; // might change later
}