let firstNum, secondNum, operand;

let storage =[];

let displayValue = "";

const numberButtons = document.querySelectorAll(".number");
const functionButtons = document.querySelectorAll(".function");
const display = document.querySelector(".display-screen");

numberButtons.forEach((button) =>{
    button.addEventListener("click", () =>{
        let digit = button.innerText;
        if(firstNum==undefined){
            storage.push(digit);
            displayValue += digit;
            display.innerText = displayValue;
        }
        else if (secondNum == undefined && operand!=undefined){
            storage.push(digit);
            displayValue += digit;
            display.innerText = displayValue;
            console.log(storage);
        }

    });
});

functionButtons.forEach((button) =>{
    button.addEventListener("click", () =>{
        //console.log(operand);
        if(firstNum == undefined && operand == undefined){
            operand = button.id;
            firstNum = convertToNumber();
            console.log(firstNum);
        }
        else if(secondNum == undefined){
            operand = button.id;
            secondNum = convertToNumber();
            if(operand == "add"|| operand == "subtract"||operand == "divide" ||operand == "multiply"){
            let temp = operate(firstNum, operand, secondNum);
            if(temp.toString().includes("."))
                temp = Math.round(temp * 100) / 100;
            firstNum = temp;
            secondNum = undefined;
        }
            displayValue = firstNum;
            display.innerText = displayValue;
        }
        else if (secondNUm != undefined && operand != undefined){
            operand = button.id;
            secondNum = undefined;
            display.innerText = "";
        }
        displayValue = "";
       /*  else{
            console.log("executing correctly");
            console.log(operate(firstNum, operand, secondNum));
        } */
    });
    });

function convertToNumber (){
    let numString = "";
    while (storage.length >0){
        numString+= storage.shift();
    }
    return parseInt(numString);
}

function refreshDisplay(){

}

function operate(num1, operand, num2){

    switch(operand){
        /* case "delete":
                firstNum = undefined;
                secondNum = undefined;
                display.innerText = ""; */     
        case "add":
            return add(num1, num2);
        case "subtract":
            return subtract(num1, num2);
        case "multiply":
            return multiply(num1, num2);
        case "divide":
            return divide(num1, num2);
        case "all-clear":
            firstNum = undefined;
            secondNum = undefined;
            while (storage.length > 0) {
                storage.pop();
              }      
            display.innerText = ""; // doesn't display right because display is going through the function pressing
        //case ".":  // what happens if they press the decimal button mid-calculation?
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