const team = {
    _players: [
        {firstName: "Lenka", lastName: "Stavacova", age: 25},
        {firstName: "Jaro", lastName: "Potocny", age: 26},
        {firstName: "Matus", lastName: "Vasilenko", age: 30},
    ],
    _games: [
        {opponent: "Jets", teamPoints: 42, opponentPoints: 25},
        {opponent: "Gigants", teamPoints: 45, opponentPoints: 13},
        {opponent: "Eagles", teamPoints: 31, opponentPoints: 15},
    ],

    get players() {
        return this._players;
    },

    get games() {
        return this._games;
    },

    addPlayer(newFirstName, newLastName, newAge) {
        let player = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge,
        };
        this.players.push(player);
    },

    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        let game = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints,
        };
        this.games.push(game);
    },
};

team.addPlayer("Bugs", "Bunny", 76);
team.addGame("Titans", 100, 98);

console.log(team._players);
console.log(team._games);