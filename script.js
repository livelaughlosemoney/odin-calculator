let firstNum, secondNum, previousOperand, currentOperand;

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
    button.addEventListener("mousedown", () =>{
        button.setAttribute("style", "background-color: rgba(141, 102, 232,0.2)");
    })
    button.addEventListener("mouseup", ()=>{
        button.setAttribute("style", "background-color: rgb(164, 131, 242)");
    })
});

functionButtons.forEach((button) =>{
    button.addEventListener("click", () =>{
        convertToNumber();
        if(previousOperand == undefined){
            previousOperand = button.id;
        }
        else
            currentOperand = button.id;
        console.log(`previous operand: ${previousOperand}`);
        console.log(`current operand: ${currentOperand}`);

        if(button.id == "all-clear"){
            clearDisplay();
        }
        else if(button.id == "delete"){
                console.log("deletion");
                digits.pop();
                console.log(`this is digits[]:`);
                console.log(digits);
                let temp = String(displayValue).slice(0, displayValue.length-1);
                displayValue = temp;
                display.innerText = displayValue;
        }
        else if (stepResults.length>=2){
            const num2 = stepResults.pop();
            const num1 = stepResults.pop();
            let result;
            switch(previousOperand){
                case("add"):
                    console.log("addition");
                    displayValue = String(add(num1, num2));
                    result = add(num1, num2);
                    break;
                case("subtract"):
                    console.log("subtraction");
                    displayValue = String(subtract(num1, num2));
                    result = subtract(num1, num2);
                    break;
                case("multiply"):
                    console.log("multiplication");
                    displayValue = String(multiply(num1, num2));
                    result = multiply(num1, num2);
                    break;
                case("divide"):
                    console.log("division");
                    displayValue = String(divide(num1, num2));
                    result = divide(num1, num2);
                    break;
                case("decimal"):
                    console.log("decimaling");
                    displayValue+=".";
                    digits.push(".");
                    break;
            }
            if(typeof(result)== "number" && result != NaN){
                stepResults.push(result);
                console.log(`the result should be: ${result}`);
            }
            display.innerText = displayValue;
        }
        displayValue = "";
        if (currentOperand == "equals"|| button.id == "delete" || button.id =="all-clear"){
            previousOperand = undefined;
            currentOperand = undefined;
        }
       /*  if (currentOperand != "equals" && currentOperand != "all-clear") {
            previousOperand = currentOperand;
        } */
    });
    button.addEventListener("mousedown", () =>{
        button.setAttribute("style", "background-color: rgba(141, 102, 232,0.2)");
    })
    button.addEventListener("mouseup", ()=>{
        button.setAttribute("style", "background-color: rgb(164, 131, 242)");
    })
});

function convertToNumber (){
    let numString = "";
    while (digits.length >0){
        numString+= digits.shift();
    }
    console.log("convertToNumber executing");
    let temp;
    if(numString.includes("."))
        temp = parseFloat(numString);
    else 
        temp = parseInt(numString);
    console.log(temp);
    if(numString!=""){
        stepResults.push(temp);
        console.log(stepResults);
    }
}


/* functionButtons.forEach((button) =>{
    button.addEventListener("click", () =>{
        convertToNumber(button.id); //this way the second number gets stored first
        if(button.id == "all-clear"){
            clearDisplay();
        }
        else if(stepResults.length>=2){
            //clears the intermediary array and executes operation with them
            const num2 = stepResults.pop();
            const num1 = stepResults.pop();
            let result = operate(num1, operand, num2);
            //puts the result back into the array for math + changing displayValue
            if(typeof(result)== "number" && result != NaN){
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
    button.addEventListener("mousedown", () =>{
        button.setAttribute("style", "background-color: rgba(141, 102, 232,0.2)");
    })
    button.addEventListener("mouseup", ()=>{
        button.setAttribute("style", "background-color: rgb(164, 131, 242)");
    })
    });

function convertToNumber (buttonID){
    let numString = "";
    while (digits.length >0){
        numString+= digits.shift();
    }
    console.log("convertToNumber executing");
    let temp;
    if(buttonID == "decimal")
        temp = parseFloat(numString);
    else 
        temp = parseInt(numString);
    console.log(temp);
    if(numString!=""){
        console.log("it's working");
        stepResults.push(temp);
        console.log(stepResults);
    }
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
        case ("delete"):
            digits.pop();
            let temp = displayValue.slice(0, displayValue.length-1);
            displayValue = temp;
            display.innerText = displayValue;
        case ("enter"):
            operand = "";
        case("decimal"):
            displayValue+=".";
        }

    } */

function clearDisplay(){
    displayValue = "";
    display.innerText = displayValue;
    while (stepResults.length >0){
        stepResults.pop();
    }
    while (digits.length>0){
        digits.pop();
    }
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