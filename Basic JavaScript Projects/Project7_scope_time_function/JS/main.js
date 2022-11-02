var Y = 10 // Global variable

function Add_numbers_1() {
    var X = 5; // Local variable
    console.log(26 + X)
}

function Add_numbers_2() {
    console.log(135 + Y) // Adding 135 to global variable
}

function Add_numbers_3() {
    console.log(12 + X) // Trying to add 12 to local variable, results in an error as expected
}
Add_numbers_1()
Add_numbers_2()
Add_numbers_3()

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?"
    }
}


function Time() {
    var hour = new Date().getHours() // Get hours
    var minute = new Date().getMinutes() // Get minutes
    if (hour < 18) { // Show the time only if it is earlier than 18:00
        document.getElementById("Time").innerHTML = "The hour is : " + hour + ":" + minute
    }
}

function Height() {
    var userHeight = document.getElementById("Height").value // Get the value given by user
    var myHeight = 192
    if (userHeight > 192) { // Check if user is taller or smaller than me
        result = "You are taller than me !"
    } else {
        result = "You are smaller than me"
    }
    document.getElementById("result").innerHTML = result // Show the result
}

function Time_function() {
    var Time = new Date().getHours(); // Get the time
    var Reply;
    if (Time < 12 == Time > 0) { // If it is earlier than 12 but past midnight show this message
        Reply = "It is morning time!";
    } else if (Time > 12 == Time < 18) { // If its past 12 but earlier than 18:00 show this message
        Reply = "It is the afternoon"
    } else { // If neither of above statements were true, show this message
        Reply = "It is evening time."
    }
    document.getElementById("Time_of_day").innerHTML = Reply
}