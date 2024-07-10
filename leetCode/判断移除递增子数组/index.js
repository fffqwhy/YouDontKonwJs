/**
 * @param {number[]} nums
 * @return {number}
 */
var incremovableSubarrayCount = function(nums) {
    // 判断第一个移除
    let n = nums.length;
    let totalCount = 0;

    // 判断数组是否严格递增
    function isStrictlyIncreasing(arr) {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] <= arr[i - 1]) {
                return false;
            }
        }
        return true;
    }

    // 遍历所有可能的子数组
    for (let start = 0; start < n; start++) {
        for (let end = start; end < n; end++) {
            let leftPart = nums.slice(0, start);
            let rightPart = nums.slice(end + 1);
            let combined = leftPart.concat(rightPart);

            if (isStrictlyIncreasing(combined)) {
                totalCount++;
            }
        }
    }

    return totalCount;
};