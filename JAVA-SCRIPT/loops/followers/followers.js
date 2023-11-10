// Arrays representing followers of Bob and Tina
let bobsFollowers = ["jaro", "miro", "matus", "peto"];
let tinasFollowers = ["lenka", "miro", "matus"];

// Array to store mutual followers of Bob and Tina
let mutualFollowers = [];

// Nested loop to compare each follower of Bob with each follower of Tina
for (let b = 0; b < bobsFollowers.length; b++) {
    for (let t = 0; t < tinasFollowers.length; t++) {
        // Check if a follower is mutual and add to the mutualFollowers array
        if (bobsFollowers[b] === tinasFollowers[t]) {
            mutualFollowers.push(bobsFollowers[b]);
        }
    }
}

// Display the array of mutual followers
console.log(mutualFollowers);
