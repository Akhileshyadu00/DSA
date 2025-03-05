// const num = [1, 2, 3, 4, 5];


// const ans = new Array(num.length).fill(0);

// // Brute Force Solution

// for (let i = 0; i < num.length; i++) {
//    for (let j = 0; j<= i; j++) {
//     ans[i] = ans[i] + num[j];
    
//    }
//    //console.log(ans);  form 2d Array
// }
// console.log(ans);
// // O(n2)

const nums = [10, 20, 30, 40, 50];

const answer = new Array(nums.length);
answer[0] = nums[0];

for (let i = 1; i < nums.length; i++) {
   answer[i] = answer[i-1] + nums[i]; 
}

console.log(answer);
