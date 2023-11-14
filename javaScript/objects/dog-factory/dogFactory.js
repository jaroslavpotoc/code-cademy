// Factory function to create dog objects
const dogFactory = (name, breed, weight) => {
      return {
          // Private properties with getters and setters
          _name: name,
          _breed: breed,
          _weight: weight,
          
          get name() {
              return this._name;
          },
          set name(newName) {
              this._name = newName;
          },
          get breed() {
              return this._breed;
          },
          set breed(newBreed) {
              this._breed = newBreed;
          },
          get weight() {
              return this._weight;
          },
          set weight(newWeight) {
              this._weight = newWeight;
          },
          
          // Method for the dog to bark
          bark() {
              return "ruff! ruff!";
          },
          
          // Method for the dog to eat too many treats (increments weight)
          eatTooManyTreats() {
              this._weight++;
          },
      };
  };
  
  // Example usage: create a dog object using the factory function
  console.log(dogFactory("Joe", "Pug", 27));
  
  /*
  // Solution to checkpoint 1:
  // Simplified version without getters and setters
  const dogFactory = (name, breed, weight) => {
      return {
          name: name,
          breed: breed,
          weight: weight
      };
  }
  
  // Solution to checkpoint 2:
  // Version with private properties, getters, and setters
  const dogFactory = (name, breed, weight) => {
      return {
          _name: name,
          _breed: breed,
          _weight: weight,
          
          get name() {
              return this._name;
          },
          set name(newName) {
              this._name = newName;
          },
          get breed() {
              return this._breed;
          },
          set breed(newBreed) {
              this._breed = newBreed;
          },
          get weight() {
              return this._weight;
          },
          set weight(newWeight) {
              this._weight = newWeight;
          }
      };
  }
  */
  