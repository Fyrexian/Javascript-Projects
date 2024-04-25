// Global variable
let globalVariable = "I am a global variable";

function myFunction() {
    // Local variable
    let localVariable = "I am a local variable";

    // Function with intentional error
    console.log("This is a debug message");
    console.log(undefinedVariable); // This will throw an error
}

myFunction();

function checkTime() {
    let currentHour = new Date().getHours();

    if (currentHour < 12) {
        document.getElementById("myElement").textContent = "Good morning!";
    } else if (currentHour < 18) {
        document.getElementById("myElement").textContent = "Good afternoon!";
    } else {
        document.getElementById("myElement").textContent = "Good evening!";
    }
}

checkTime();

function myNameFunction() {
    let condition = true;

    if (condition) {
        let nameInput = document.getElementById("nameInput").value;
        console.log("Hello, " + nameInput + "!");
    } else if (currentHour < 12) {
        console.log("Good morning!");
    } else if (currentHour < 18) {
        console.log("Good afternoon!");
    } else {
        console.log("Good evening!");
    }
}
