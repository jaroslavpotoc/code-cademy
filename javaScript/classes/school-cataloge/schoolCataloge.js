// The School class represents a generic school.
class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
  
    // Getters for accessing private properties
    get name() {
      return this._name;
    }
  
    get level() {
      return this._level;
    }
  
    get numberOfStudents() {
      return this._numberOfStudents;
    }
  
    // Setter for numberOfStudents property with input validation
    set numberOfStudents(value) {
      if (isNaN(value)) {
        console.log('Invalid input: numberOfStudents must be set to a Number.');
      } else {
        this._numberOfStudents = value;
      }
    }
  
    // Method to display quick facts about the school
    quickFacts() {
      console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
    }
  
    // Static method to pick a substitute teacher from an array
    static pickSubstituteTeacher(substituteTeachers) {
      const randInt = Math.floor(Math.random() * substituteTeachers.length);
      return substituteTeachers[randInt];
    }
  }
  
  // The PrimarySchool class represents a primary school and inherits from the School class.
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
  
    // Getter for pickupPolicy property
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  
  // The HighSchool class represents a high school and inherits from the School class.
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, 'high', numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
  
    // Getter for sportsTeams property
    get sportsTeams() {
      return this._sportsTeams;
    }
  }
  
  // Example usage:
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  lorraineHansbury.quickFacts();
  
  // Pick a substitute teacher using the static method
  const substituteTeacher = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobili']);
  console.log(`Substitute Teacher: ${substituteTeacher}`);
  
  // Create a HighSchool instance and display its sports teams
  const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  console.log(alSmith.sportsTeams);
