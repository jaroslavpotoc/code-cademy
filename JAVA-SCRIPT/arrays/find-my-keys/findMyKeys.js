// Write your code here:
const findMyKeys = (stringArray) => {
    for (let i = 0; i < stringArray.length; i++) {
      if (stringArray[i].includes("keys")) {
        return i;
      }
    }
    return -1;
  };
  
  // Feel free to comment out the code below to test your function
  
  const randomStuff = [
    "credit card",
    "screwdriver",
    "receipt",
    "gum",
    "keys",
    "used gum",
    "plastic spoon",
  ];
  
  console.log(findMyKeys(randomStuff));
  // Should print 4
  