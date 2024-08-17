let firstNum, secondNum, operand;

let storage =[];
//let haveOperand = false;
let firstOperation = true;

const numberButtons = document.querySelectorAll(".number");
const functionButtons = document.querySelectorAll(".function");
const display = document.querySelector(".display-screen");

numberButtons.forEach((button) =>{
    button.addEventListener("click", () =>{
        let digit = button.innerText;
        if(firstNum==undefined){
            storage.push(digit);
            display.innerText += digit;
        }
        else if (secondNum == undefined && operand!=undefined){
            display.innerText="";
            storage.push(digit);
            display.innerText += digit;
        }

    });
});

functionButtons.forEach((button) =>{
    button.addEventListener("click", () =>{
        //console.log(operand);
        if(firstNum==undefined && operand == undefined){
            operand = button.id;
            firstNum = convertToNumber();
            console.log(firstNum);
            display.innerText ="";
        }
        else if(secondNum == undefined){
            secondNum = convertToNumber();
            console.log(secondNum);
            let temp = operate(firstNum, operand, secondNum);
            firstNum = temp;
            secondNum = undefined;
            operand = button.id;
            display.innerText= firstNum;
            console.log(firstNum);
            console.log(operand);
            console.log(secondNum);
        }
        else if (secondNUm != undefined && operand != undefined){
            operand = button.id;
            secondNum = undefined;
            display.innerText ="";
        }
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
      /*   case "all-clear":
            firstNum = undefined;
            secondNum = undefined;
            while (storage.length > 0) {
                storage.pop();
              }      
            display.innerText = "";
        case ".":  */// what happens if they press the decimal button mid-calculation?
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