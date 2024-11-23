function displayDogs() {
    let dogs = [];

    for (let i = 0; i < 6; i++) {
        let name = prompt(`Enter the name of six dogs ${i+1}:`);
        if (name !== null && name.trim() !== '') {
            dogs.push(name.trim());
        }
    }
    dogs.sort();
    dogs.reverse();

    let listHTML = '<ul>';
    dogs.forEach(function(participant) {
        listHTML += `<li>${participant}</li>`;
    });
    listHTML += '</ul>';

    document.body.innerHTML += listHTML;
}

displayDogs();