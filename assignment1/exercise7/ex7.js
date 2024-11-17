let numDice = parseInt(prompt("enter how many times you want to roll the dice"))
    if ( numDice < 1) {
        document.getElementById("result").innerText = "Please enter a valid number of dice.";
    }
    let sum = 0;
    for (let i = 0; i < numDice; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        sum += roll;
    }
    document.getElementById("result").innerText = "The sum of the dice rolls is: " + sum;
