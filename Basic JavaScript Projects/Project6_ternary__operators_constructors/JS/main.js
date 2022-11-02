function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " too ride.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;

}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red")
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black")
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard")

function myFunction() {
    document.getElementById("Keyword_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year
}

var Tomasz = new Vehicle("Audi", "A6", 2015, "Black")

function NewFunction() {
    document.getElementById("New_and_This").innerHTML = "Tomasz drives a " + Tomasz.Vehicle_Color + "-colored " + Tomasz.Vehicle_Make + " " + Tomasz.Vehicle_Model + " manufactured in " + Tomasz.Vehicle_Year
}

function Nested() {
    document.getElementById("Nested_Function").innerHTML = Count()

    function Count() {
        var Starting_point = parseInt(document.getElementById("Nested_Function").innerHTML) // Check the current value of paragraph, change it to an integer

        function Plus_one() { Starting_point += 1 } // Add 1 to the value above
        Plus_one()
        return Starting_point
    }
}