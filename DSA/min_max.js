const a = [1, 3, 4, 5, 8, 3, 9, 2];

let max = a[0];
let min = a[0];

for (let i = 0; i < a.length; i++) {
   if (a[i] > max) {
    max = a[i] ;   
   }
    if (a[i] < min) {
        min = a[i];
    }
}

console.log("Max", max);
console.log("Min", min);

