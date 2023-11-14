// Write class below
class ShiftCipher {
    constructor(shift) {
      // Constructor initializes the shift value for the cipher
      this.shift = shift;
    }
  
    encrypt(plainString) {
      // Method to encrypt a plain string using the shift cipher
      let encryptString = '';
      // Convert the input string to uppercase for consistency
      const tempString = plainString.toUpperCase();
  
      for (let i = 0; i < tempString.length; i++) {
        // Get the Unicode code for the current character
        let charNum = tempString.charCodeAt(i);
  
        // Check if the character is an uppercase letter (between 'A' and 'Z')
        if (charNum >= 65 && charNum <= 90) {
          // Shift the character by the specified amount
          charNum += this.shift;
  
          // If the shifted character is beyond 'Z', wrap it around
          if (charNum > 90) {
            charNum -= 26;
          }
        }
  
        // Convert the Unicode code back to a character and append to the result
        encryptString += String.fromCharCode(charNum);
      }
  
      // Return the encrypted string
      return encryptString;
    }
  
    decrypt(encryptString) {
      // Method to decrypt an encrypted string using the shift cipher
      let decryptString = '';
      // Convert the input string to lowercase for consistency
      const tempString = encryptString.toLowerCase();
  
      for (let i = 0; i < tempString.length; i++) {
        // Get the Unicode code for the current character
        let charNum = tempString.charCodeAt(i);
  
        // Check if the character is a lowercase letter (between 'a' and 'z')
        if (charNum >= 97 && charNum <= 122) {
          // Shift the character by the specified amount in the opposite direction
          charNum -= this.shift;
  
          // If the shifted character is below 'a', wrap it around
          if (charNum < 97) {
            charNum += 26;
          }
        }
  
        // Convert the Unicode code back to a character and append to the result
        decryptString += String.fromCharCode(charNum);
      }
  
      // Return the decrypted string
      return decryptString;
    }
  }
  
  // Create an instance of the ShiftCipher class with a shift value of 2
  const cipher = new ShiftCipher(2);
  // Encrypt the given string using the shift cipher
  cipher.encrypt('I love to code!'); // returns 'K NQXG VQ EQFG!'
  // Decrypt the given string using the shift cipher
  cipher.decrypt('K <3 OA RWRRA'); // returns 'i <3 my puppy'
  