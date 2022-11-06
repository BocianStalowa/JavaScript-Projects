function Call_Loop() { //This function breaks variable 'Sentence' into letters and prints each letter seperatly
    var Letter = "";
    var Sentence = "This is a sentence"
    let x = 0;
    while (x < Sentence.length) {
        Letter += "<br>" + Sentence[x];
        x++;
    }
    document.getElementById("Loop").innerHTML = Letter;
}

function for_Loop() { // function that outputs each element from the array
    var Class = ['Jack', 'Tomasz', 'Aldona']
    var Person = '';


    for (var i = 0; i < Class.length; i++) {
        Person += Class[i] + '<br>';
        document.getElementById('List_Of_classMates').innerHTML = Person;
    }
}

function array_Function() { // function that reads second element in the array and prints it connected with a string
    var Class = ['Jack', 'Tomasz', 'Aldona']
    document.getElementById('Array').innerHTML = "My name is " + Class[1]
}

const Team = { name: 'Manchester United', country: 'England' }

function constant_function() { //function that tests how const works
    document.getElementById("Constant").innerHTML = 'Name of my favourite team is ' + Team.name;
    Team.name = 'FC Barcelona'
    Team.Stadium = 'Camp Nou'
    document.getElementById("Constant").innerHTML = 'Name of my favourite team is ' + Team.name + ' and it plays on ' + Team.Stadium;
}

let club = {
    name: "Manchester United",
    stadium: "Old Trafford",
    description: function() {
        return "My favourite club is " + this.name + " and this club plays on " + this.stadium;
    }
}
document.getElementById("Object").innerHTML = club.description();