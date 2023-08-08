// Write your code below
let bobsFollowers = ["jaro", "miro", "matus", "peto"];
let tinasFollowers = ["lenka", "miro", "matus"];
let mutualFollowers = [];

for (let b = 0; b < bobsFollowers.length; b++) {
    for (let t = 0; t < tinasFollowers.length; t++) {
        if (bobsFollowers[b] === tinasFollowers[t]) {
            mutualFollowers.push(bobsFollowers[b]);
        }
    }
}
console.log(mutualFollowers);
