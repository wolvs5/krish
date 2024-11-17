 var name = prompt("Please enter your name:");

    if (name) {
        // Generate a random number between 1 and 4
        var houseNumber = Math.floor(Math.random() * 4) + 1;
        var house;

        // Determine the house based on the random number using if...else if
        if (houseNumber === 1) {
            house = "Gryffindor";
        } else if (houseNumber === 2) {
            house = "Slytherin";
        } else if (houseNumber === 3) {
            house = "Hufflepuff";
        } else if (houseNumber === 4) {
            house = "Ravenclaw";
        }
           document.getElementById("result").innerText = name + ", you are " + house + ".";
    } else {
        alert("You must enter a name!");
    }
