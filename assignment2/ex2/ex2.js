//Write a program that asks the user for the number of participants. After this, the program asks for the names of all
// participants. Finally, the program prints the names of the participants on the web page in an ordered list (<ol>)
// in alphabetical order. (2p)
function displayParticipants() {
    let participants = [];
    let number = parseInt(prompt('Input the number of participants:'), 10);

    if (isNaN(number) || number <= 0) {
        alert('Please enter a valid positive number.');
        return;
    }

    for (let i = 0; i < number; i++) {
        let name = prompt(`Enter the name of participant ${i + 1}:`);
        if (name !== null && name.trim() !== '') {
            participants.push(name.trim());
        }
    }

    participants.sort();

    let listHTML = '<ol>';
    participants.forEach(function(participant) {
        listHTML += `<li>${participant}</li>`;
    });
    listHTML += '</ol>';

    document.body.innerHTML += listHTML;
}

displayParticipants();
