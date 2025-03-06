// --- Linear Search ---

// time Complexity
//best- o(1) avg- o(n) wrost- o(n)

// Space Complexity-- O(1)


const target = 6;

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let l = arr.length;

const result = linearSearch(arr, target);

function linearSearch(arr, target) {
    for (let i = 0; i < l; i++) {
        if (arr[i] == target) {
            return `Element found at ${i}`;
            break; // break are unnecessary for return
        }
    }
    return "Elements not found";
}
console.log(result);


// const target = 6;
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function linearSearch(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             return `Element found at index ${i}`;
//         }
//     }
//     return "Element not found";
// }

// const result = linearSearch(arr, target);
// console.log(result);