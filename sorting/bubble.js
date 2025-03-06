// Bubble Sorting --> Swap immediately, largest elements at end

// 6 0 3 5 1
// 0 6 3 5 1 
// 0 3 6 5 1
// 0 3 5 6 1 
// 0 3 5 1 6 --> 1st iteration

// 0 3 1 5 6
// 0 1 3 5 6 

// time- O(n2)
// Space - O(n)


const arr = [6, 0, 5, 3, 8, 4]
let n = arr.length;
let temp;

function bubbleSort(arr, n) {

    for (let i = 0; i < n; i++) {

        let swapped = false;

        for (let j = 0; j < n-i-1; j++) {         
            if (arr[j] > arr[j+1]) {
                 temp = arr[j]; // temprary data
                 arr[j] = arr[j+1];
                 arr[j+1] = temp;
                 swapped = true
             }

             if (swapped = false) {
                break;
             }   
        }       
    }
    return arr
}

const result = bubbleSort(arr, n);
console.log(result);


// bubbleSort(arr, n);
// console.log(arr);

// const arr = [6, 0, 5, 3, 8, 4];

// function bubbleSort(arr) {
//     let n = arr.length;

//     for (let i = 0; i < n - 1; i++) {
//         let swapped = false;

//         for (let j = 0; j < n - i - 1; j++) {         
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j]; 
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//                 swapped = true;
//             }
//         }

//         // If no elements were swapped, the array is already sorted
//         if (!swapped) break;  
//     }

//     return arr; // Return sorted array
// }

// const result = bubbleSort(arr);
// console.log("Sorted array:", result);



