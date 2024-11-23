let numbers = [];
let enteredNumbers = new Set();

function askForNumber() {
    const input = document.getElementById('numberInput').value;
    const number = parseFloat(input);
    document.getElementById('numberInput').value = '';

    if (isNaN(number)) {
        alert('That is not a valid number. Please try again.');
        return;
    }

    if (!enteredNumbers.has(number)) {
        numbers.push(number);
        enteredNumbers.add(number);
        document.getElementById('result').innerText = `Number ${number} added. Please enter another number.`;
    } else {
        alert(`${number} has already been entered.`);
        numbers.sort((a, b) => a - b);
        document.getElementById('result').innerText = 'Numbers in ascending order: ' + numbers.join(', ');
    }
}