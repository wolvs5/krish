document.getElementById('submitButton').addEventListener('click', printNumbers);

function printNumbers() {

    const num1 = document.getElementById('number1').value;
    const num2 = document.getElementById('number2').value;
    const num3 = document.getElementById('number3').value;
    const num4 = document.getElementById('number4').value;
    const num5 = document.getElementById('number5').value;


    console.log("Numbers entered:");
    console.log(num1, num2, num3, num4, num5);
}