function substraction_func() { // Create substraction variable and show it in corresponding paragraph
    var substraction = 6 - 3
    document.getElementById("Math").innerHTML = "6 - 3 = " + substraction;
}

function multi_func() { // Create multiplication variable and show it in corresponding paragraph
    var multi = 6 * 3
    document.getElementById("Multiplication").innerHTML = "6 * 3 = " + multi;
}

function divi_func() { // Create division variable and show it in corresponding paragraph
    var division = 6 / 3
    document.getElementById("Division").innerHTML = "6 / 3 = " + division;
}

function multi_operation() { // Create multiple operations in one variable and show it in corresponding paragraph
    var operation = 6 * 3 - (5 + 3) / 2
    document.getElementById("Multi").innerHTML = "6 * 3 - (5 + 3) / 2 = " + operation;
}

function modulus_func() { // Create variable with modulus operation and show the value in corresponding paragraph
    var operation = 25 % 6
    document.getElementById("Modulus").innerHTML = "When you divide 25 by 6 you have remainder of : " + operation; // Show modulus value in the corresponding paragraph
}

function negation_func() { // Create a number variable, use negation on it and show the value in corresponding paragraph
    var number = 10
    var negation = -number // Negation of the variable above
    document.getElementById("Negation").innerHTML = "Negation of 10 = " + negation;
}

function increment_func() { // Increment the variable and show it in corresponding paragraph
    var number = 5
    number++;
    document.getElementById("Incrementation").innerHTML = "5 incremented = " + number;
}

function decrement_func() { // Decrement variable above and show it in corresponding paragraph
    var number = 5
    number--;
    document.getElementById("Decrementation").innerHTML = "5 decremented = " + number;
}

function random_number() { // Generate random number from 0 to 100 and show it in corresponding paragraph
    var randomNumber = Math.random() * 100;
    document.getElementById("Random").innerHTML = "Random number from 0 to 100 = " + randomNumber;
}