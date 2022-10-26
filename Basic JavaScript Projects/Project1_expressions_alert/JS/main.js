var text = "Hello, World!", //Create variables
    myName = "Tomasz",
    mySurname = "Naurecki"

var one = "first Text",
    two = "Second text",
    three = one + ' ' + two

myName = myName.fontcolor("blue")
mySurname = mySurname.fontcolor("red") // Change colors of text

window.alert(text) // popup alert
document.write(myName + ' ' + mySurname + "<br>") // concatenate variables 
document.write(three)