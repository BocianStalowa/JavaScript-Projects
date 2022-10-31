function showDictionary() {
    var Car = {
        Model: "Audi",
        YearOfProduction: 2022
    }
    delete Car.YearOfProduction
    document.getElementById("Dictionary").innerHTML = Car.Model
    document.getElementById("year").innerHTML = Car.YearOfProduction
}