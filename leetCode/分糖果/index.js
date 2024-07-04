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