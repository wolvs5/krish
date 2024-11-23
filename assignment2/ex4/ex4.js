//Write a program that asks the user for numbers until he gives zero. The given numbers are printed in the console from
// the largest to the smallest. (2p)
const numbers = []
let number;

while (number !== 0) {
    number = parseInt(prompt('Enter as many numbers as you want (enter 0 to end).'), 10)
    if (isNaN(number) || number <= 0) {
        console.log('Please enter a valid number.');
        continue;
    }
    if (number === 0) {
        break;
    }
    numbers.push(number);
}
numbers.sort((a, b) => b - a);
console.log('Numbers from largest to smallest:', numbers);