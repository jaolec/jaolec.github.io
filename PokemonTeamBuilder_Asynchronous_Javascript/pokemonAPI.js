
function fetchPokemonData()
{
    const inputElement = document.getElementById("pokemon-input");
    if (!inputElement.value) // Error Message if the query is empty
    {
        console.error("Please enter a Pokemon name or ID.");
        return;
    }
    fetch('https://pokeapi.co/api/v2/pokemon/' + inputElement.value)
    .then(response => {
        response.ok ? console.log("Data fetched successfully!") : console.error("Error fetching data: " + response.status);
        return response.json();
    }).then(myJSONDocument => processJSON(myJSONDocument));
}

function processJSON(json)
{
    //console.log(json);
    // Collect ID from json and store loaclly
    localStorage.setItem("id", json.id); // Collect ID and store in local storage
    
    // Collect image URL from json and store locally
    localStorage.setItem("image", json.sprites.front_default || "");
    document.getElementById("pokemon-image").src = localStorage.getItem("image"); // Update image source in HTML
    
    // Collect audio clip URL and store in local storage (if available)
    localStorage.setItem("audioClip", json.cries.latest || "");
    //console.log("Audio Clip URL: " + localStorage.getItem("audioClip")); // Log audio clip URL for debugging
    
    // Collect moves from json and store locally
    localStorage.setItem("moves", JSON.stringify(json.moves));

    // Update html with ID 
    let id = localStorage.getItem("id");
    let image = localStorage.getItem("image");
    let audioClip = localStorage.getItem("audioClip");
    let moves = JSON.parse(localStorage.getItem("moves"));

    // Update Moves Menu
    populateMovesMenu(moves);

}

function populateMovesMenu()
{
    let moves = JSON.parse(localStorage.getItem("moves"));

    // Clear existing options from all 4 move selects
    for (let i = 1; i <= 4; i++)
    {
        document.getElementById("move-" + i).innerHTML = "";
    }

    // Add each move as an option to all 4 move selects using Option() constructor
    moves.forEach(move => {
        for (let i = 1; i <= 4; i++)
        {
            document.getElementById("move-" + i).add(new Option(move.move.name, move.move.name));
        }
    });
}

function playPokemonSound()
{
    // Retrieve audio clip URL from local storage and play sound
    let audioClip = localStorage.getItem("audioClip");
    if (!audioClip) {
        console.error("No audio clip URL found in local storage.");
        return;
    }
    const audio = new Audio(audioClip);
    audio.play();

}

function addToTeam()
{
    // Create array to hold team data, if array doesn't exist, create it
    let team = JSON.parse(localStorage.getItem("team")) || [];

    // Retrieve ID, image URL, and moves from local storage
    let tempImage = localStorage.getItem("image");


    console.log("Testing addToTeam function...");
    let tempMove1 = document.getElementById("move-1").value;
    let tempMove2 = document.getElementById("move-2").value;
    let tempMove3 = document.getElementById("move-3").value;
    let tempMove4 = document.getElementById("move-4").value;

    //console.log("Selected Moves: " + tempMove1 + ", " + tempMove2 + ", " + tempMove3 + ", " + tempMove4);

    // Create object to represent the Pokemon and its moves
    let pokemonData = {
        image: tempImage,
        moves: [tempMove1, tempMove2, tempMove3, tempMove4]
    };

    // Add the Pokemon data to the team array
    team.push(pokemonData);
    // Store the updated team array back in local storage
    localStorage.setItem("team", JSON.stringify(team));
    //console.log("Pokemon added to team: " + JSON.stringify(pokemonData));
    
    // Dynamically update the team table in HTML
    const tbody = document.getElementById("team-body"); // Access the tbody element of the team table
    document.getElementById("team-table").style.display = "table"; // Show the table
    tbody.innerHTML = ""; // Clear existing rows
    team.forEach(pokemonData => {
        const row = document.createElement("tr"); // Insert a new row for each Pokemon
        const movesList = pokemonData.moves.map(move => `<li>${move}</li>`).join("");
        row.innerHTML = `<td><img src="${pokemonData.image}" alt="Pokemon Image"></td><td><ul>${movesList}</ul></td>`;
        tbody.appendChild(row); // Append the new row to the tbody
    });
}

function resetLocalStorage()
{
    localStorage.clear();
    location.reload(); // Refresh the page to reflect changes in local storage
    console.log("Local storage has been reset.");
}