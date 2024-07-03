// 如果一个整数能够被其各个数位上的数字之和整除，则称之为 哈沙德数（Harshad number）。
// 给你一个整数 x 。如果 x 是 哈沙德数 ，则返回 x 各个数位上的数字之和，否则，返回 -1 。
/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    // todo 拿到每一位的数字
    let nums =0;
    let numberX = x;
    if(x===1 || x===100){
        return 1;
    }
    while(numberX!==0){
        if(numberX>=10){
            const remainderX = numberX%10;
            nums+=remainderX;
            numberX=Math.floor(numberX/10);
        }else{
            nums+=numberX;
            numberX=0;
        }
    }
    // todo 判断能否整除

    if(x%nums===0){
        return nums;
    }
    return -1;
};
if(sumOfTheDigitsOfHarshadNumber(18)===9){
    console.log("ok")
}
if(sumOfTheDigitsOfHarshadNumber(23)===-1){
    console.log("ok")
}
if(sumOfTheDigitsOfHarshadNumber(10)===1){
    console.log("ok")
}