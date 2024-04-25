const string1 = "Hello";
const string2 = "World";
const string3 = "!";

const result = string1.concat(" ", string2, string3);

document.print(result);

function slice_Method() {

    var Sentence = "All work and no play makes Johnny a dull boy";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;

}

function search_Method() {
    var sentence = "All work and no play makes Johnny a dull boy";
    var searchTerm = "play";
    var result = sentence.search(searchTerm);
    document.getElementById("Search").innerHTML = result;
}

function toUpperCase_Method() {
    var sentence = "All work and no play makes Johnny a dull";
    var result = sentence.toUpperCase();
    document.getElementById("UpperCase").innerHTML = result;
}

function toLowerCase_Method() {
    var sentence = "All work and no play makes Johnny a dull";
    var result = sentence.toLowerCase();
    document.getElementById("LowerCase").innerHTML = result;
}

function string_Method() {
    var x = 182;
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
}

function precision_Method() {
    var x = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = x.toPrecision(10);
}

function fixed_Method() {
    var x = 12938.3012987376112;
    document.getElementById("Fixed").innerHTML = x.toFixed(2);
}

function valueOf_Method() {
    var x = "Hello World!";
    document.getElementById("Value_of").innerHTML = x.valueOf();
}



