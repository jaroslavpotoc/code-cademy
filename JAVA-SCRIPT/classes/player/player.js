class Player {
    constructor(name, hitsPerMinute) {
      // Initialize player properties
      this.name = name;
      this.hitsPerMinute = hitsPerMinute;
      this.balloonCount = 100; // Initial balloon count
    }
  
    // Method to log player's status
    status() {
      console.log(`Player: ${this.name} -- Balloons Left: ${this.balloonCount}`);
    }
  }
  
  // Function to simulate a balloon attack between two players
  const balloonAttack = (player1, player2) => {
    for (let i = 1; i <= 10; i++) {
      // Simulate balloon attacks for 10 rounds
      player2.balloonCount -= player1.hitsPerMinute;
      player1.balloonCount -= player2.hitsPerMinute;
  
      // Log status after each round
      player1.status();
      player2.status();
    }
  
    // Compare remaining balloon counts and determine the winner or declare a tie
    if (player1.balloonCount > player2.balloonCount) {
      return player1.name + ' wins!';
    } else if (player2.balloonCount > player1.balloonCount) {
      return player2.name + ' wins!';
    }
  
    return 'Tie'; // Both players have the same number of balloons left
  };
  
  // Create two player instances
  const p1 = new Player('p1', 5);
  const p2 = new Player('p2', 2);
  
  // Simulate a balloon attack between the two players
  const result = balloonAttack(p1, p2);
  
  console.log(result); // Output: 'p1 wins!', 'p2 wins!', or 'Tie'
  