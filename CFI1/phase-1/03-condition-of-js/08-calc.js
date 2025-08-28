// Assginment
// Create a calculator app using switch

/**
 * Create a simple calculator for solving arithmetics
 * + - / *
 * Inout two numbers , return the output with the operand and solve the operation;
 * 2 + 3 = 5;
 * 3 Inputs 
 * CLI Menu
 */
// var readlineSync = require('readline-sync'); // CommonJS

import readlineSync from 'readline-sync';

console.clear();



console.log(`
---------------------------------

Simple Calculator

    Press + for addition
    Press - for subtraction
    Press * for multiplication
    Press / for Division

---------------------------------

`);

var operand = readlineSync.question("Enter your opearation to perform: ");
if (operand == "+" || "-" || "*" || "/"){
    var num1 = readlineSync.questionInt("Enter num1: ");
    var num2 = readlineSync.questionInt("Enter num2: ");

    switch(operand){
        case "+":
            console.log(num1 + num2);
            break;
        case "-":
            console.log(num1-num2);
            break;
        case "*":
            console.log(num1 * num2);
            break;
        case "/":
            console.log(num1 / num2);
            break;
        default:
            console.log('Not a valid opeartion, please provide your arithmetic operation i.e: +,-,/,*');
            break;
    }
} else {
    console.log('Invalid Operation');
}