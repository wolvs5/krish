
function even(numbersArray) {
    let evenNumbersArray = [];
    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] % 2 === 0) {
            evenNumbersArray.push(numbersArray[i]);
        }
    }
    return evenNumbersArray;
}

let originalArray = [2, 7, 4];

let evenArray = even(originalArray);

console.log("Original array:", originalArray);
console.log("Array of even numbers:", evenArray);