function Concat() { // function that concatenates all below senteces into one
    var part_1 = "This"
    var part_2 = " is"
    var part_3 = " a whole"
    var part_4 = " sentence."
    var whole_sentence = part_1.concat(part_2, part_3, part_4)
    document.getElementById("concat").innerHTML = whole_sentence
}

function Slice() { // function that slices the sentence
    var sentence = "Lorem ipsum dolor sit amet."
    var sliced = sentence.slice(0, 5)
    document.getElementById("slice").innerHTML = sliced
}

function to_String() { // function that converts number to string
    var x = 23213;
    document.getElementById("toString").innerHTML = x.toString();
}

function precision() { // function that make a number more precise
    var x = 213.26321314;
    document.getElementById("precision").innerHTML = x.toPrecision(4);
}