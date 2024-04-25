function writeFunction() {
    document.write(typeof "Word" + "<br>");
    document.write(-3E310);
    document.write(10 > 2);
    console.log(10 + 5);
    document.write(10 + 5);
    document.write("10" + 5);
    document.write(10 == 10);
    document.write(3 == 11);
    document.write(3 === 3);
    document.write(3 === "3");

    document.write(5 > 2 && 10 > 4);
    document.write(5 > 10 && 10 > 4);
    document.write(5 > 10 || 10 > 4);
    document.write(5 > 10 || 10 > 20);
    document.write(!(5 > 10));
 }