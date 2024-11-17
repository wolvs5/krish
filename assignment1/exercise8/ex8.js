
let leapYearList = document.getElementById("leap-year-list");

let startYear = parseInt(prompt("Enter the start year:"));
let endYear = parseInt(prompt("Enter the end year:"));


if ( startYear > endYear) {
    alert("Please enter valid start and end years.");
} else {

    for (let year = startYear; year <= endYear; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            let listItem = document.createElement("li");
            listItem.textContent = year;
            leapYearList.appendChild(listItem);//ADDS the value while looping to the end
        }
    }


    if (leapYearList.childNodes.length === 0) {
        let noLeapYearsItem = document.createElement("li");
        noLeapYearsItem.textContent = "No leap years found in this range.";
        leapYearList.appendChild(noLeapYearsItem);
    }
}