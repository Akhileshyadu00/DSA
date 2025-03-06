// Binary Search ---> divides into two

// [mid = low + (high - low) / 2] ---> [index]

// Time Compelxity --> best - O()
                        //avg - O()
                        //wrost - O()

// Space Complexity -->


// Sorted Array


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15]

let target = 16;

function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor(start + (end - start)/2);
        // Condition
        if (arr[mid] == target) {
            return mid;
        }
        
        if (arr[mid] < target) {
            start = mid +1;
        }else {
            end = mid -1;
        }
    }
    return -1;
}

const result = binarySearch(arr, target);

(result == -1) ? console.log("Element not found in array") : console.log("Elemnts founds at index", result);


