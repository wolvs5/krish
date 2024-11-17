 let year = parseInt(prompt("Please enter a year:"));


if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                resultText = year + " is a leap year.";
            } else {
                resultText = year + " is not a leap year.";
            }
        } else {
            resultText = year + " is a leap year.";
        }
} else {
        resultText = year + " is not a leap year.";
}
alert(resultText);
