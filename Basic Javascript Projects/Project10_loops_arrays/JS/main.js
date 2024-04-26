function Call_Loop() {
    var start = 10;
    while (start > 0) {
        document.getElementById("Loop").innerHTML += "<br>" + start;
        start--;
    }

}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments [Y] + "<br>";
        document.getElementById("List_of_Instruments").innerHTML = Content;
    }
}

function cat_pics () {
    var Cat_Picture = [];
    Cat_Picture [0] = "sleeping";
    Cat_Picture [1]= "playing";
    Cat_Picture [2] = "eating";
    Cat_Picture [3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture [2] + ".";
}


let car = {
    make: "Dodge",
    model: "Viper",
    year: "2021",
    color: "red",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};

function myCar() {
    document.getElementById("Car_Object").innerHTML = car.description();
}

function break_statement() {
    var text = "";
    for (let i = 0; i < 10; i++) {
        if (i === 3) { break; }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("break").innerHTML = text;
}