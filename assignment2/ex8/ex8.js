
function concat(stringsArray) {
    let concatenatedString = "";
    for (let index = 0; index < stringsArray.length; index++) {
        concatenatedString = concatenatedString + stringsArray[index];
    }
    return concatenatedString;
}

let myStrings = ["Johnny", "DeeDee", "Joey", "Marky"];

let arrayListElement = document.getElementById("arrayList");
for (let i = 0; i < myStrings.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = myStrings[i];
    arrayListElement.appendChild(listItem);
}

let result = concat(myStrings);

let resultElement = document.getElementById("result");
resultElement.textContent = result;