const arr = [55, 65, 34, 54, 78]
let n = arr.length;
let temp;

function selectionSort(arr, n) {
    for (let i = 0; i < n; i++) {
       let min_index = i;

       for (let j = i+1; j < n; j++) {
        if (arr[j] < arr[min_index]) {
            min_index = j;

        }
        
       }
       temp = arr[min_index];
       arr[min_index] = arr[i];
       arr[i] = temp
        
    }
    return arr
}
const result = selectionSort(arr, n);
console.log(result);



//t- O(n2)
//s- O(n)