/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let newArray = new Array(2 * nums.length);
    let j = nums.length;

    for(let i=0; i<j; i++) {
        newArray[i] = nums[i];
        newArray[j+i] = nums[i];
    }
    return newArray
};