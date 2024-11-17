let diceCount = parseInt(prompt("enter the count of dice"));
let sumValue = parseInt(prompt("enter the sum"));

let totalRolls = 10000;
    let sucessrolls = 0;


    let resultDiv = document.getElementById('result');
    if ( diceCount < 1 || sumValue < diceCount || sumValue > diceCount * 6) {

    }
    
    for (let i = 0; i < totalRolls; i++) {
        let currentSum = 0;
        for (let j = 0; j < diceCount; j++) {
            currentSum += Math.floor(Math.random() * 6) + 1;
        }
        if (currentSum === sumValue) {
            sucessrolls++;
        }
    }
    let probability = (sucessrolls / totalRolls) * 100;
    resultDiv.textContent = `Probability to get sum ${sumValue} with ${diceCount} dice is ${probability.toFixed(2)}%`;



document.getElementById('calculateBtn').addEventListener('click', calculateProbability);