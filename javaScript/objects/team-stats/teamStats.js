// Team object representing a sports team
const team = {
    // Array of player objects with their information
    _players: [
        {firstName: "Lenka", lastName: "Stavacova", age: 25},
        {firstName: "Jaro", lastName: "Potocny", age: 26},
        {firstName: "Matus", lastName: "Vasilenko", age: 30},
    ],

    // Array of game objects with details about each game
    _games: [
        {opponent: "Jets", teamPoints: 42, opponentPoints: 25},
        {opponent: "Giants", teamPoints: 45, opponentPoints: 13},
        {opponent: "Eagles", teamPoints: 31, opponentPoints: 15},
    ],

    // Getter method to access the players array
    get players() {
        return this._players;
    },

    // Getter method to access the games array
    get games() {
        return this._games;
    },

    // Method to add a new player to the players array
    addPlayer(newFirstName, newLastName, newAge) {
        // Create a new player object
        let player = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge,
        };
        // Add the new player to the players array
        this.players.push(player);
    },

    // Method to add a new game to the games array
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        // Create a new game object
        let game = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints,
        };
        // Add the new game to the games array
        this.games.push(game);
    },
};

// Add a new player to the team
team.addPlayer("Bugs", "Bunny", 76);

// Add a new game to the team
team.addGame("Titans", 100, 98);

// Display the updated players and games arrays
console.log(team._players);
console.log(team._games);
