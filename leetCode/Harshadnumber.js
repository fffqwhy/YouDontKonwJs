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
// !优化
var sumOfTheDigitsOfHarshadNumberBetter = function(x) {
    // 获取每一位的数字并求和
    let sum = 0;
    let numberX = x;
    
    while (numberX > 0) {
        sum += numberX % 10;
        numberX = Math.floor(numberX / 10);
    }
    
    // 判断能否整除
    return x % sum === 0 ? sum : -1;
};
// 思考，使用 字符串处理

var sumOfTheDigitsOfHarshadNumber = function(x) {
    // 将数字转换为字符串，然后分割为单个数字的数组
    let digits = x.toString().split('');
    // 使用reduce方法计算各位数字之和
    let sum = digits.reduce((acc, digit) => acc + parseInt(digit), 0);
    
    // 判断是否为Harshad数
    return x % sum === 0 ? sum : -1;
};

// 思考 提前算出所有数，

let digitSums = [];
var sumOfTheDigitsOfHarshadNumber2 = function(x) {
    // 预计算出所有个位数的和
    if(digitSums.length===0){
    digitSums = Array.from({ length: 101 }, (_, i) => 
        i.toString().split('').reduce((acc, digit) => acc + Number(digit), 0)
    );
    }
    
    const getSumOfDigits = num => {
        let sum = 0;
        while (num > 0) {
            sum += digitSums[num % 1000];
            num = Math.floor(num / 1000);
        }
        return sum;
    };

    const sum = getSumOfDigits(x);
    
    return x % sum === 0 ? sum : -1;
};