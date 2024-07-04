/**
 * @param {number[]} candyType
 * @return {number}
 * 
 * @link https://leetcode.cn/problems/distribute-candies/description/
 */
var distributeCandies = function(candyType) {
    const types = candyType.filter((item,index,all)=>{
        return all.indexOf(item)===index;
    })
    if(candyType.length /2 >= types){
        return types.length;
    }
    return candyType.length/2;
};

console.log(distributeCandies([6,6,6,6]));

// 优化

var distributeCandies11 = function(candyType) {
    const types = new Set(candyType).size;
    return Math.min(types, candyType.length / 2);
};
function distributeCandies22(candyType) {
    // 使用 Set 来快速找出不重复的糖果种类
    const types = new Set(candyType);
    // 计算不重复种类的数量
    const uniqueTypeCount = types.size;
    // 比较并返回较小的值
    return Math.min(uniqueTypeCount, Math.floor(candyType.length / 2));
}