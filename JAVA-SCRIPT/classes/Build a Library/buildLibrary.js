// Define a Media class with properties and methods for general media items
class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    // Getter for the title property
    get title() {
      return this._title;
    }
  
    // Getter for the isCheckedOut property
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    // Getter for the ratings property
    get ratings() {
      return this._ratings;
    }
  
    // Setter for the isCheckedOut property
    set isCheckedOut(value) {
      this._isCheckedOut = value;
    } 
  
    // Method to toggle the check-out status
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
  
    // Method to calculate the average rating
    getAverageRating() {
      let ratingsSum = this.ratings.reduce((accumulator, rating) => accumulator + rating);
      return ratingsSum / this.ratings.length;
    }
  
    // Method to add a rating to the ratings array
    addRating(value) {
      this.ratings.push(value);
    }
  }
  
  // Define a Book class that extends the Media class
  class Book extends Media {
    constructor(author, title, pages) {
      // Call the constructor of the parent class
      super(title);
      this._author = author;
      this._pages = pages;
    }
  
    // Getter for the author property
    get author() {
      return this._author;
    }
  
    // Getter for the pages property
    get pages() {
      return this._pages;
    }
  }
  
  // Define a Movie class that extends the Media class
  class Movie extends Media {
    constructor(director, title, runTime) {
      // Call the constructor of the parent class
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  
    // Getter for the director property
    get director() {
      return this._director;
    }
  
    // Getter for the runTime property
    get runTime() {
      return this._runTime;
    }
  }
  
  // Create an instance of the Book class
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  
  // Toggle the check-out status of the book and log the result
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  
  // Add ratings to the book and log the average rating
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());
  
  // Create an instance of the Movie class
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  
  // Toggle the check-out status of the movie and log the result
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  
  // Add ratings to the movie and log the average rating
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  