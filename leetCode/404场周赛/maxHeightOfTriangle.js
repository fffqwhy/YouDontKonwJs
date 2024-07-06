/**
 * @param {number} red
 * @param {number} blue
 * @return {number}
 *  3200. 三角形的最大高度 简单
* 给你两个整数 red 和 blue，分别表示红色球和蓝色球的数量。你需要使用这些球来组成一个三角形，满足第 1 行有 1 个球，第 2 行有 2 个球，第 3 行有 3 个球，依此类推。
* 每一行的球必须是 相同 颜色，且相邻行的颜色必须 不同。
* 返回可以实现的三角形的 最大 高度。
 * 
 */
var maxHeightOfTriangle = function (red, blue) {
    if (red === 0 || blue === 0) {
        return 0;
    }
    function getNum(a,b) {
        // 那个大那个先开始
        let bigger = a;
        let smaller = b;
        // 1 2  3  4  5  6 ; 2 4 6 ,每次循环 计算两层
        let ableLevel = 0;
        let over = false;
        while (!over) {
            if (bigger >= (ableLevel + 1)) { // 要减去上面的
                // 从第一层开始的 满足 可以进行下一层
                ableLevel += 1;
                bigger -= ableLevel;
            } else {
                over = true;
            }
            if (smaller >= ableLevel+1 && !over) { //要减去上面的
                ableLevel += 1;
                smaller -= ableLevel;
            } else {
                over = true;
            }
        }
        return ableLevel;
    }
    const result1 = getNum(red,blue);
    const result2 = getNum(blue,red);
    return result1>result2?result1:result2;
};

console.log(`2, 4 result is ${maxHeightOfTriangle(2, 4)}  ,real result is 3`);
console.log(`2 ,1 result is ${maxHeightOfTriangle(2, 1)}  ,real result is 2`);
console.log(`1 ,1 result is ${maxHeightOfTriangle(1, 1)}  ,real result is 1`);
console.log(`10 ,1 result is ${maxHeightOfTriangle(10, 1)}  ,real result is 2`);
console.log(`7 ,10 result is ${maxHeightOfTriangle(7 ,10)}  ,real result is ?`);
console.log(`48,36 result is ${maxHeightOfTriangle(48,36)}  ,real result is ?`);
// 2 ,4   result  3 
// 2 ,1   result  2
// 1 ,1   result  1
// 10 ,1  result  2