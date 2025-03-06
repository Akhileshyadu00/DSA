// Insertion Sorting ---> comapare with every elements

// 19 1 2 10 23
// 1 19 2 10 23
// 1 2 19 10 23
// 1 2 10 19 23

const arr = [2, 5, 19, 4, 8, 17, 23, 10, 6]
let l = arr.length;

function insertionSort(arr, l) {
    let key, j;

    for (let i = 0; i < l; i++) {
        key = arr[i]; // 5
        j = i-1; // 0

        while (j>=0 && arr[j]>key) {
            arr[j+1] = arr[j]; 
            j--;
        }

        arr[j+1] = key;

    }
    return arr;
}
const result = insertionSort(arr, l);
console.log("result is", result);
