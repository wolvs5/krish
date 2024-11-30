const numbers = []

for (let i= 0; i<5; i++) {
    let userInput = prompt('Please enter five numbers.');
    numbers.push(Number(userInput));
}

console.log('Numbers in reverse order:');
for (let i = numbers.length - 1; i>=0; i--) {
    console.log(numbers[i]);
}
