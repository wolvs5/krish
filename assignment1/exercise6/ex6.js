 var user = confirm("Should I calculate the square root?");

    if (user) {

        let number = parseInt(prompt("Please enter a number:"));

        if (typeof number !== 'number' || !isFinite(number)) {
            document.getElementById("result").innerText = "Please enter a valid number.";
        } else if (number < 0) {
            document.getElementById("result").innerText = "The square root of a negative number is not defined.";
        } else {
            const squareRoot = Math.sqrt(number);
            document.getElementById("result").innerText = "The square root of " + number + " is " + squareRoot + ".";
        }
    } else {
        document.getElementById("result").innerText = "The square root is not calculated.";
    }
