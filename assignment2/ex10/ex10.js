let candidates = [];

function candidacy() {
    let numberOfParticipants = parseInt(prompt("Enter the number of candidates:"), 10);

    while (isNaN(numberOfParticipants) || numberOfParticipants < 1) {
        alert("Please enter a valid positive number.");
        numberOfParticipants = parseInt(prompt("Enter the number of candidates:"), 10);
    }

    candidates = [];
    while (candidates.length !== numberOfParticipants) {
        let candidate = prompt("Enter the name of the candidate:").toLowerCase();
        while (candidates.find(x => x.name === candidate)) {
            alert("This candidate is already registered.");
            candidate = prompt("Enter the name of the candidate:").toLowerCase();
        }
        candidates.push({ name: candidate, votes: 0 });
    }
    return candidates;
}

function RegisterVoters() {
    let numberOfVoters = parseInt(prompt("Enter the number of voters:"), 10);
    while (isNaN(numberOfVoters) || numberOfVoters < 1) {
        alert("Please enter a valid positive number.");
        numberOfVoters = parseInt(prompt("Enter the number of voters:"), 10);
    }

    for (let i = 0; i < numberOfVoters; i++) {
        let voteTo = prompt("Enter the name of the candidate you want to vote for:").toLowerCase();
        let found = false;
        for (let j = 0; j < candidates.length; j++) {
            if (candidates[j].name === voteTo) {
                candidates[j].votes++;
                found = true;
                break;
            }
        }
        if (!found) {
            alert("This candidate is not registered. Your vote will not be counted.");
        }
    }
}

function printResults() {

    if (candidates.length === 0) {
        console.log("No candidates are registered.");
        return;
    }


    if (candidates.length === 1) {
        console.log("The winner is " + candidates[0].name + " with " + candidates[0].votes + " votes");
        console.log(candidates[0].name + ": " + candidates[0].votes + " votes");
        return;
    }


    candidates.sort((a, b) => b.votes - a.votes);

    if (candidates[0].votes === candidates[1].votes) {
        let tiedCandidates = candidates.filter(c => c.votes === candidates[0].votes);
        let names = tiedCandidates.map(c => c.name).join(" and ");
        console.log("There is a tie between " + names + " with " + candidates[0].votes + " votes");
    } else {
        console.log("The winner is " + candidates[0].name + " with " + candidates[0].votes + " votes");
    }
    for (let i = 0; i < candidates.length; i++) {
        console.log(candidates[i].name + ": " + candidates[i].votes + " votes");
    }
}


candidacy();
RegisterVoters();
printResults();