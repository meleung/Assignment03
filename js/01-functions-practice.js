/*eslint-env browser*/
var input1, input2, inputArray = [];

//STEP 1
function halfNumber(num) {
    "use strict";
    var result = num / 2;
    window.console.log("Half of " + num +
                       " is " + result + ".");
    return result;
}
halfNumber(5);

//STEP 2
function squareNumber(num) {
    "use strict";
    var result = num * num;
    window.console.log("The result of squaring the number " + num +
                       " is " + result + ".");
    return result;
}
squareNumber(3);

//STEP 3
function percentOf(num1, num2) {
    "use strict";
    var result = Math.round(num1 / num2 * 100);
    window.console.log(num1 + " is " + result + "% of " + num2 + ".");
    return result;
}
percentOf(2, 4);

//STEP 4
function findModulus(num1, num2) {
    "use strict";
    var result = num2 % num1;
    window.console.log(result + " is the modulus of " +
                       num1 + " and " + num2 + ".");
    return result;
}
findModulus(4, 10);

//STEP 5
function variableSum() {
    "use strict";
    var i, sum = 0;
    window.console.log(arguments);
    
    for (i = 0; i < arguments.length; i += 1) {
        sum += arguments[i];
    }
    
    return sum;
}
var input = [], i;

for (i = 0; i < 5; i += 1) {
    input[i] = parseInt(window.prompt("Enter a string of numbers to sum:"), 10);
}
window.console.log(input);
window.console.log(String(input[0]) + " + " +
                   String(input[1]) + " + " +
                   String(input[2]) + " + " +
                   String(input[3]) + " + " +
                   String(input[4]) + " = " +
                   variableSum(input[0], input[1], input[2], input[3], input[4]));