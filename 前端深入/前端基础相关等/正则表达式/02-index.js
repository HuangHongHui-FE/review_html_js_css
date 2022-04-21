
// 1. +   贪婪模式, 能匹配就匹配，能多则多

// // n+           {1, 正无穷}   0-9A-z_   任意符合的出现正无穷次
// let reg = /\w+/g;
// let str = 'abcdefg';
// console.log(str.match(reg))  // [ 'abcdefg' ]



// 2. *

// // n*           {0, 正无穷}   0-9A-z_
// let reg = /\w*/g;
// let str = 'abcdefg';
// console.log(str.match(reg))  // [ 'abcdefg', '' ]  // 注意差别


// let reg = /\d*/g;
// let str = 'abcdefg';
// console.log(str.match(reg))  // [ '', '', '', '', '', '', '', '' ]


// let reg = /\w?/g;
// let str = 'abcdefg';
// console.log(str.match(reg))  // [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', '' ]


// let reg = /\w{1,2}/g;
// let str = 'abcdefg';
// console.log(str.match(reg))  // [ 'ab', 'cd', 'ef', 'g' ]



// 3. ^ 匹配任何以n开头的字符串

// let reg = /^ab/gm;
// let str = 'abdfsf\nabjkdfskd'
// console.log(str.match(reg))   // [ 'ab', 'ab' ]




// 4. $ 匹配任何以n结尾的字符串

// let reg = /sf$/gm;
// let str = 'abdfsf\nfassf'
// console.log(str.match(reg))   // [ 'sf', 'sf' ]


// let reg = /^abcd[\s\S]*abcd$/g;  // [\s\S]*   中间匹配任意的
// let str = 'abcd123123abcd'
// console.log(str.match(reg))   // [ 'abcd123123abcd' ]  !!



// 5. 匹配以138开头的11位的手机号
// let str = '13812345678'
// let reg = /^138[\d]{8}/g;
// console.log(str.match(reg));



// 6. 
// ?=n匹配任何其后紧接着指定字符串n的字符串
// let str = 'abcdabcd'
// let reg = /a(?=b)/g;
// console.log(str.match(reg));  // [ 'a', 'a' ]

// ?!n匹配任何其后紧接着指定字符串n的字符串
// let str = 'abcdabcad'
// let reg = /a(?!b)/g;
// console.log(str.match(reg));  // [ 'a' ]




// 7. 
// // 子表达式反向引用
// let str = 'bbbaaaaccaaaaiddddbaaaa'
// let reg = /(a)\1\1/g;  // \1  代表反向引用第几个子表达式匹配到的字符
// let reg2 = /(a)\1\1\1/g;  // \1  代表反向引用第几个子表达式  
// let reg3 = /(\w)\1\1\1/g;
// console.log(str.match(reg))  // [ 'aaa', 'aaa', 'aaa' ]
// console.log(str.match(reg2))  // [ 'aaaa', 'aaaa', 'aaaa' ]
// console.log(str.match(reg3))  // [ 'aaaa', 'aaaa', 'dddd', 'aaaa' ]




// 8.  reg.exec()

let reg = /123/g;
let str = '123123123';
console.log(reg.exec(str), reg.lastIndex)
console.log(reg.exec(str), reg.lastIndex)
console.log(reg.exec(str), reg.lastIndex)
console.log(reg.exec(str), reg.lastIndex)
console.log(reg.exec(str), reg.lastIndex)
console.log(reg.exec(str), reg.lastIndex)
console.log(reg.exec(str), reg.lastIndex)
console.log(reg.exec(str), reg.lastIndex)