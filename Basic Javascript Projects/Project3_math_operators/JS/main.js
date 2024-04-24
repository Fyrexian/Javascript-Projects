

function myFunction() {

    document.getElementById('Math').innerHTML = 3+3;

    var simple_division = 6 / 3;
    var simple_multiplication = 6 * 3;
    var many_math = (1 + 2) * 10 / 2 - 5;

    document.getElementById('Math2').innerHTML = "6 / 3 = " + simple_division;
    document.getElementById('Math3').innerHTML = "6 * 3 = " + simple_multiplication;
    document.getElementById('Math4').innerHTML = "(1 + 2) * 10 / 2 - 5 = " + many_math;
}

function modulus_Operator() {
    var simple_modulus = 25 % 6;
    document.getElementById('Math5').innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_modulus;
}

function Changing_Operator() {
    var x = 10;
    document.getElementById('Math6').innerHTML = -x;

    var x = 5;
    x++;
    document.getElementById('Math7').innerHTML = x;

    var x = 5;
    x--;
    document.getElementById('Math8').innerHTML = x;
}

function random_Operator() {
    document.getElementById('Math9').innerHTML = Math.random();
}

function math_Object() {
    document.getElementById('Math10').innerHTML = Math.round(Math.PI);
    
}

