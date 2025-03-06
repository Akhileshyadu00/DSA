// 1s in binary sorted array 

// how many 1s in an array

// O(log n)

//const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0]
const arr = [0, 0, 0, 0]

function count1s() {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = start + Math.floor((end - start)/2)

        if (arr[mid] == 0) {
            end = mid - 1;

        }
        if (arr[mid] == 1 && arr[mid + 1] == 1) {
            start = mid + 1;
        }
        if (arr[mid] == 1 && ((arr[mid + 1] == 1) || mid == arr.length -1)) {
            return mid + 1;
        }

    }
    return -1;

}

const result = count1s(arr);
(result == -1) ? console.log("No 1s in array") : console.log("number of 1s in array", result);

