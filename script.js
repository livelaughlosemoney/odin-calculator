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
            firstNum = value;
            storage.push(value);
            display.innerText = value;
        }
        else if (storage[1]!=undefined && storage[2]==undefined){
            secondNum = value;
            storage.push(value);
        }
        else{
            // idk yet
        }
        console.log(storage);
    });
});

functionButtons.forEach((button) =>{
    button.addEventListener("click", () =>{
        console.log(button.id);
        const operation = button.id;
        if(storage[0]!= undefined && storage[1] == undefined){
            storage.push(operation);
        }
        else if(storage[0]!= undefined
            && storage[1]!= undefined
            && storage[2]!= undefined
        ){
        switch(operation){
            case "delete":
                storage[0] = undefined; //first # cleared
                storage[2] = undefined; //second # cleared
            case "add":
                add(storage[0], storage[2]);
            case "subtract":
                subtract(storage[0], storage[2]);
            case "multiply":
                multiply(storage[0], storage[2]);
            case "divide":
                divide(storage[0], storage[2]);
        } 
        }
    });
    });

function operate(num1,operand, num2){

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
    return num1/num2;
}