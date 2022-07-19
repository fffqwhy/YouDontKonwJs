// 内置类型
// js 有七种内置类型

console.log(typeof null === 'object');                                 //true  null === object 是个由来已久的bug
console.log(typeof undefined === 'undefined');                                  //true
console.log(typeof true === 'boolean');                                  //true
console.log(typeof 42 === 'number');                                  //true
console.log(typeof "12" === 'string');                                  //true
console.log(typeof {type:'object'} === 'object');                                  //true
console.log(typeof Symbol() === "symbol");                     //true             


// 如何判断一个变量的类型是object还是null
var a = null;
if(!a && typeof a === 'object'){
    console.log('is null');
}

// 数组和函数都是object的子类型
console.log(typeof function a(){} === "function");
console.log(typeof [1,2,3] === 'object');


// typeof 的安全防范机制：typeof 未定义变量时不会报错，而是返回undefined；

if(nodefine){                       //ReferenceError: nodefine is not defined
    console.log('nodefine 未定义，报错');
}
if(typeof nodefine === 'undefined'){
    console.log('nodefine 未定义 返回undefined，')
}