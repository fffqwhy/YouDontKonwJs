/**
 * @param {number[]} nums
 * @return {number}
 * 寻找中心数组。
 * leedcode link: https://leetcode.cn/problems/find-pivot-index/description/
 */
var pivotIndex = function (nums) {
    // 先算出和
    const count =  nums.reduce((count,item)=>{return count+=item},0);
    // 循环 每到一个值就 count - current /2 === loopCount;
    let loopCount = 0; 
    for (let index = 0; index < nums.length; index++) {
        // 先比较，如果 （总和 - 当前值） /2 === loopCount; return index;
        const num = nums[index];
        if((count-num)/2 === loopCount){
            return index;
        }
        loopCount+=num;
    }
    return -1;
};
console.log(`3 result is ${pivotIndex([1, 7, 3, 6, 5, 6])}`);
console.log(`-1 result is ${pivotIndex([1, 2, 3])}`);
console.log(`0 result is ${pivotIndex([2, 1, -1])}`);
