/**
 * @param {number[]} nums
 * @return {number}
 * 交换 定义为选中一个数组中的两个 互不相同 的位置并交换二者的值。
环形 数组是一个数组，可以认为 第一个 元素和 最后一个 元素 相邻 。
给你一个 二进制环形 数组 nums ，返回在 任意位置 将数组中的所有 1 聚集在一起需要的最少交换次数。
 * 
 */
const minSwaps = (nums) => {
    const totalOnes = countOnes(nums);
    if (totalOnes === 0) return 0; // No need to swap if there are no 1s
    const maxOnes = maxOnesInWindow(nums, totalOnes);
    return totalOnes - maxOnes;
  };
  
  const countOnes = (nums) => {
    return nums.reduce((acc, num) => acc + num, 0);
  };
  
  const maxOnesInWindow = (nums, k) => {
    let maxOnes = 0;
    let currentOnes = 0;
    
    // Initial window
    for (let i = 0; i < k; i++) {
      currentOnes += nums[i];
    }
    
    maxOnes = currentOnes;
    
    // Slide the window
    for (let i = k; i < nums.length + k; i++) {
      currentOnes += nums[i % nums.length] - nums[(i - k) % nums.length];
      maxOnes = Math.max(maxOnes, currentOnes);
    }
    
    return maxOnes;
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

// 滑动窗口: 解析
// [1, 0, 1, 0, 1, 0, 0, 1]
//     ↑  ↑  ↑  ↑
// 窗口中 1 的数量: 2
// 最大值: 2

// [1, 0, 1, 0, 1, 0, 0, 1]
//        ↑  ↑  ↑  ↑
// 窗口中 1 的数量: 2
// 最大值: 2

// [1, 0, 1, 0, 1, 0, 0, 1]
//           ↑  ↑  ↑  ↑
// 窗口中 1 的数量: 2
// 最大值: 2

// [1, 0, 1, 0, 1, 0, 0, 1]
//              ↑  ↑  ↑  ↑
// 窗口中 1 的数量: 1
// 最大值: 2

// [1, 0, 1, 0, 1, 0, 0, 1]
//                 ↑  ↑  ↑  ↑
// 窗口中 1 的数量: 2
// 最大值: 2

// [1, 0, 1, 0, 1, 0, 0, 1]
//                    ↑  ↑  ↑  ↑
// 窗口中 1 的数量: 2
// 最大值: 2

// [1, 0, 1, 0, 1, 0, 0, 1]
//                       ↑  ↑  ↑  ↑
// 窗口中 1 的数量: 2
// 最大值: 2

// [1, 0, 1, 0, 1, 0, 0, 1]
//                          ↑  ↑  ↑  ↑
// 窗口中 1 的数量: 3
// 最大值: 3

// [1, 0, 1, 0, 1, 0, 0, 1]
//                             ↑  ↑  ↑  ↑
// 窗口中 1 的数量: 3
// 最大值: 3

// 最终最大值: 3
