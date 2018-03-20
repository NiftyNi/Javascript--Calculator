/ Part 3 - Update greeting with user's name
var userName = window.prompt("Please enter your name");
var greetingParagraph = document.getElementById("greeting");
greetingParagraph.innerHTML += ", " + userName;

// Part 4 - Get numbers from user
var num1 = parseInt(window.prompt("Enter a number"));
var num2 = parseInt(window.prompt("Enter another number"));
var span1 = document.getElementById("operand1");
var span2 = document.getElementById("operand2");
span1.innerHTML = num1;
span2.innerHTML = num2;

// Part 5 - Operations
var sum = num1 + num2;
var difference = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;
var modResult = num1 % num2;

// Part 6 - Display results
var resultMessage = "<span>" + num1 + "</span> and <span>" + num2 + "</span> is "; 
document.getElementById("addition").innerHTML = "The sum of " + resultMessage + sum; document.getElementById("subtraction").innerHTML = "The difference between " + resultMessage + difference;
document.getElementById("multiplication").innerHTML = "The product of " + resultMessage + product; document.getElementById("division").innerHTML = "The quotient of " + resultMessage + quotient; document.getElementById("modulus").innerHTML = "The result of the mod operation on " + resultMessage + modResult;