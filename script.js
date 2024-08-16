let firstNum, secondNum, operand;

let storage =[];

let displayValue ="";

const numberButtons = document.querySelectorAll(".number");
const functionButtons = document.querySelectorAll(".function");
const display = document.querySelector(".display-screen");

numberButtons.forEach((button) =>{
    button.addEventListener("click", () =>{
        const value = button.innerText;
        console.log(value);
        if(storage[0]==undefined){
            storage.push(value);
            display.innerText = value;
        }
        else if (storage[1]!=undefined && storage[2]==undefined){
            storage.push(value);
            display.innerText = value;
        }
        else{
            // idk yet
        }
        console.log(storage);
    });
});

functionButtons.forEach((button) =>{
    button.addEventListener("click", () =>{
        pressFunction = true;
        console.log(button.id);
        const operation = button.id;
        if(storage[0]!= undefined && storage[1] == undefined){
            storage.push(operation);
        }
        else if(storage[0]!= undefined
            && storage[1]!= undefined
            && storage[2]!= undefined
        ){
        const num2 = storage.pop();
        const operand = storage.pop();
        const num1 = storage.pop();
        storage.push(operate(num1, operand, num2));
        display.innerText = storage[0];
        pressFunction = false;
        // need to then store operate result as first index storage[0]
        }
        else if(storage[0]!= undefined
            && storage[1]!= undefined
            && storage[2]== undefined){ //replacing the operand if they change their mind mid-way
                storage.pop();
                storage.push(operation);
            }
    });
    });

function operate(firstNum, operand, secondNum){
    const num1 = parseInt(firstNum);
    const num2 = parseInt(secondNum);

    switch(operand){
        case "delete":
                storage.pop();        
        case "add":
            return add(num1, num2);
        case "subtract":
            return subtract(num1, num2);
        case "multiply":
            return multiply(num1, num2);
        case "divide":
            return divide(num1, num2);
        case "all-clear":
            while (storage.length > 0) {
                storage.pop();
              }      
            display.innerText = "";
        case ".": // what happens if they press the decimal button mid-calculation?
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