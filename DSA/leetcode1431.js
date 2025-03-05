const candies = [2, 4, 6, 8, 9];
const extraCandies = 4;  // Change this to a number, not an array

let Output = [];

// Find max candies
let max = Math.max(...candies);

// Loop through each kid's candies
for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) {
        Output.push(true);
    } else {
        Output.push(false);
    }
}

// Return Output (outside loop)
console.log(Output); 

