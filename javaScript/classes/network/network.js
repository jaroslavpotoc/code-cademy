class Network {
    constructor(data, users) {
      // Initialize properties with provided parameters
      this.data = data;   // Total data available
      this.users = users; // Number of users
    }
  
    // Method to check if there is enough data for movie time
    movieTime() {
      // Calculate the data required for the users to watch a movie (assuming 5 units per user)
      const userData = this.users * 5;
  
      // Check if there is enough data for the movie time (at least 10 units more than user data)
      if (this.data - userData >= 10) {
        return true; // There is enough data for movie time
      }
  
      return false; // There is not enough data for movie time
    }
  }
  
  // Create an instance of the Network class
  const library = new Network(50, 9);
  
  // Check if there is enough data for movie time
  const result = library.movieTime();
  
  console.log(result); // Output: false
  