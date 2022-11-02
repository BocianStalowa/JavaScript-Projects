document.write(typeof 3); // Typeof function 

function infinity() { //Show infinity
    document.getElementById("infinity").innerHTML = 2E310;
}

function negative_infinity() { //Show negative infinity
    document.getElementById("negative_infinity").innerHTML = -3E310;
}

function true_func() { //Boolean true
    document.getElementById("true_func").innerHTML = 10 > 2;
}

function false_func() { // boolean false
    document.getElementById("false_func").innerHTML = 10 < 2;
}

console.log(2 + 2) // Console log example

function coercion_func() { // Coercion func, adding string to a number
    document.getElementById("coercion").innerHTML = "10" + 5
}

function equal_true() { //Double equal sign function beign true
    document.getElementById("equal_true").innerHTML = 10 == 10
}

function equal_false() { // Double equal sign functon beign false
    document.getElementById("equal_false").innerHTML = 10 == 11
}

function true_type_value() { // Triple equal, where valu and type are the same
    var x = 5
    var y = 5
    document.getElementById("true_type_value").innerHTML = x === y
}

function false_type_value() { // Triple equal, where value and type are different
    var x = 5
    var y = "five"
    document.getElementById("false_type_value").innerHTML = x === y
}

function false_type() { // Triple equal, where value is the same but type is different
    var x = 5
    var y = "5"
    document.getElementById("false_type").innerHTML = x === y
}

function false_value() { // Triple equal, where value is different but type is the same
    var x = 5
    var y = 4
    document.getElementById("false_value").innerHTML = x === y
}

function And_true() { // And operator - true
    document.getElementById("AndTrue").innerHTML = 5 > 2 && 10 > 4
}

function And_false() { // And operator - false
    document.getElementById("AndFalse").innerHTML = 5 < 2 && 10 > 4;
}

function Or_true() { // Or operator - true
    document.getElementById("OrTrue").innerHTML = 5 > 2 || 10 > 4
}

function Or_false() { // Or operator - false
    document.getElementById("OrFalse").innerHTML = 5 < 2 || 10 < 4;
}

function NotTrue_func() { // NOT operator - true
    document.getElementById("NotTrue").innerHTML = !(1 > 2)
}

function NotFalse_func() { // NOT operator - false
    document.getElementById("NotFalse").innerHTML = !(2 > 1)
}