/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    nums.sort( function( a , b){
    if(a < b) return 1;
    if(a > b) return -1;
    return 0;
});
if (nums[0] === nums[1]) {
    return nums[2]
}else
return nums[1]
}
