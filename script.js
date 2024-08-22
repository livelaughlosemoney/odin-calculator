let firstNum, secondNum, previousOperator, currentOperator;

let digits =[];

let stepResults = [];

let displayValue = "";

let doNotConvert = ["delete", "enter", "all-clear", "decimal", "percent"];

let startFresh = false;

const numberButtons = document.querySelectorAll(".number");
const functionButtons = document.querySelectorAll(".function");
const display = document.querySelector(".display-screen");

numberButtons.forEach((button) =>{
    button.addEventListener("click", () =>{
        let digit = button.innerText;
        digits.push(digit);
        displayValue = digits.join("");
        display.innerText = displayValue;
        console.log(digits);
        if (startFresh && previousOperator == undefined && currentOperator == undefined){
            stepResults.pop();
            startFresh = false;
        }
    });
    button.addEventListener("mousedown", () =>{
        button.classList.add("button-pressed");
    })
    button.addEventListener("mouseup", ()=>{
        button.classList.remove("button-pressed");
    })
});

functionButtons.forEach((button) =>{
    button.addEventListener("click", () =>{
        if(!doNotConvert.includes(button.id)){ //never want decimal, delete, or all-clear to be stored as an operand
            convertToNumber(); 
        if(previousOperator == undefined){
            previousOperator = button.id;
        }
        else
            currentOperator = button.id;
        console.log(`previous operand: ${previousOperator}`);
        console.log(`current operand: ${currentOperator}`);
    }

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
        else if (button.id == "decimal"){
            if(!displayValue.includes(".")){
                console.log("decimaling");
                displayValue += ".";
                display.innerText = displayValue;
                digits.push(".");
            }
        }
        else if (button.id =="percent"){
            convertToNumber();
            let temp = stepResults.pop()/100;
            displayValue = temp;
            stepResults.push(temp);
            display.innerText = displayValue;

        }
        else if (stepResults.length>=2){
            console.log(stepResults);
            const num2 = stepResults.pop();
            const num1 = stepResults.pop();
            let result;
            switch(previousOperator){
                case("add"):
                    displayValue = String(add(num1, num2));
                    result = add(num1, num2);
                    console.log(`addition: ${result}`);
                    break;
                case("subtract"):
                    displayValue = String(subtract(num1, num2));
                    result = subtract(num1, num2);
                    console.log(`subtraction: ${result}`);
                    break;
                case("multiply"):
                    displayValue = String(multiply(num1, num2));
                    result = multiply(num1, num2);
                    console.log(`multiplication: ${result}`);
                    break;
                case("divide"):
                    displayValue = String(divide(num1, num2));
                    result = divide(num1, num2);
                    console.log(`division: ${result}`);
                    break;
            }
            if(typeof(result)== "number" && result != NaN){
                stepResults.push(result);
                console.log(`the result should be: ${result}`);
            }
            display.innerText = displayValue;
        }
        if(button.id!="delete" && button.id!="decimal")
            displayValue = "";
        if (currentOperator == "equals"){
            startFresh = true;
            previousOperator = undefined;
            currentOperator = undefined;
            console.log("operands have been RESET");
        }
    });
    button.addEventListener("mousedown", () =>{
        button.setAttribute("style", "background-color: white;");
    })
    button.addEventListener("mouseup", ()=>{
        button.setAttribute("style", "background-color: rgb(164, 131, 242)");
    })
});

function convertToNumber (){
    let numString = "";
    let digitsLength = digits.length;
    while (digits.length >0){
        numString+= digits.shift();
    }
    console.log("convertToNumber executing");
    let temp;
    if(digitsLength > 0){
    if(numString.includes("."))
        temp = parseFloat(numString);
    else 
        temp = parseInt(numString);
    console.log(temp);
}
    if(numString!=""){
        stepResults.push(temp);
        console.log(`this is stepResults: ${stepResults}`);
    }
}

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