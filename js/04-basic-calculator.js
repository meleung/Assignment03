/*eslint-env browser*/

function promptUserOperation() {
    "use strict";
    var operation;
    
    operation = window.prompt("Enter the operation (add, subtract, multiply, divide):");

    switch (operation.toLowerCase()) {
    case "add":
    case "+":
        operation = "+";
        break;
    case "subtract":
    case "-":
        operation = "-";
        break;
    case "multiply":
    case "*":
        operation = "*";
        break;
    case "divide":
    case "/":
        operation = "/";
        break;
    default:
        window.alert("Invalid operation: " + operation + ". Try again!");
        operation = null;
    }
    
    return operation;
}

function calculate(num1, num2, op) {
    "use strict";
    var result;
    
    switch (op) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
        break;
    }
    
    window.alert(num1 + " " + op + " " + num2 + " = " + result);
}

do {
    var num1 = parseFloat(window.prompt("Enter the first number:"));
    var num2 = parseFloat(window.prompt("Enter the second number:"));
    var op = promptUserOperation();
} while (op === null);
calculate(num1, num2, op);