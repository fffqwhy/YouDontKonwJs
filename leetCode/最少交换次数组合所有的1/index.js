/**
 * @param {number[]} nums
 * @return {number}
 * 交换 定义为选中一个数组中的两个 互不相同 的位置并交换二者的值。
环形 数组是一个数组，可以认为 第一个 元素和 最后一个 元素 相邻 。
给你一个 二进制环形 数组 nums ，返回在 任意位置 将数组中的所有 1 聚集在一起需要的最少交换次数。
 * 
 */
var minSwaps = function (nums) {
    let oneCount = 0;
    nums.forEach((num)=>{
        num===1 && oneCount++;
    })
};

// 输入
// nums =
// [1,1,0,0,1]
// 输出
// 0
// 输入
// nums =
// [0,1,1,1,0,0,1,1,0]
// 输出
// 2