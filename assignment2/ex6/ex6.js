//Write a function that returns a random dice roll between 1 and 6. The function should not have any parameters. Write
// a main program that rolls the dice until the result is 6. The main program should print out the result of each roll
// in an unordered list (<ul>). (2p)
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function main() {
    let roll;
    const results = [];


    do {
        roll = rollDice();
        results.push(roll);
    } while (roll !== 6);


    console.log("Dice rolls:");
    results.forEach(function(result, index) {
        console.log(`Roll ${index + 1}: ${result}`);
    });
}

main();