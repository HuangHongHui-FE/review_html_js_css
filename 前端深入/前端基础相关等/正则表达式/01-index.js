// 1. 
// var reg = new RegExp('Test', 'igm');  // i是忽略大小写, g是匹配全局，所有的都匹配, m 是多行匹配
// str = 'This is a Test, Test is important.';

// console.log(reg.test(str))  // true
// console.log(str.match(reg))





// 2. 字面量的方式
// let reg = /^test/gim;  // ^配配开头是test的

// let str = 'This is a Test, \nTest is important.';

// console.log(reg.test(str))
// console.log(str.match(reg))  




// 3. 这种情况，当v变量的时候只能使用这种
// let v = 'Test';
// let reg = new RegExp(v, 'i');
// let str = "This is a test";
// console.log(reg.test(str))
// console.log(str.match(reg))



// 4. []

// let str = '0987wefjh0e0r912gj-0werfj'
// let reg = /[1234567890][1234567890][1234567890]/g;  // 一个[]匹配一位，匹配连续的三位
// console.log(str.match(reg))  // [ '098', '912' ]


// let str = 'wxyz'
// let reg = /[wx][xy][z]/g;
// console.log(str.match(reg))  // [ 'xyz' ]


// let str = 'fiksodf090Dg0erGEOGIV-G345;...'
// let reg = /[0-9][A-Z][a-z]/g;  // 区间匹配，数字，大写，小写，连续的三个
// console.log(str.match(reg))  // [ '0Dg' ]


// let str = 'fiksodf090Dg0erGEOGIV-G345;...'
// let reg = /[0-9A-z][A-Z][a-z]/g;  // 区间匹配，数字，大写，小写，连续的三个
// console.log(str.match(reg))  // [ '0Dg' ]

// 0-9A-Za-z       0-9A-z             0-z           0-Z             都可以写


// let str = 'fiksodf090Dg0erGEOGIV-G345;Lg'
// let reg = /[^0][A-Z][a-z]/g;  // 区间匹配，非0，大写，小写，连续的三个
// console.log(str.match(reg))  // [ '0Dg' ]



// 5. |
// let str = '234abfokas123asghifoasjf';
// let reg = /123|234/g;  //  或   匹配
// console.log(str.match(reg))   // [ '234', '123' ]


// let str = '234abfokas123asghifoasjf';
// let reg = /123|234[a-z]/g;  //  或   匹配

// console.log(str.match(reg))   // [ '234a', '123' ]


// let str = '234abfokas123asghifoasjf';
// let reg = /(123|234)[a-z]/g;  //  优先小括号里的

// console.log(str.match(reg))   // [ '234a', '123a' ]



// 6. 元字符    正则使用的转义字符

// \w    [0-9A-z_]
// \W    [^\w]

// let reg = /\wab/g;
// let str = '234abc-%&'
// console.log(str.match(reg))  // [ '4ab' ]


// let reg = /\W\W\W/g;
// let str = '234abc-%&'
// console.log(str.match(reg))  // [ '-%&' ]


// let reg = /\w\W/g;  // 一位元字符就代表匹配一位，不用加中括号
// let str = '0Gf0341objdo0-dfg'
// console.log(str.match(reg))  // [ '0-' ]


// \d === [0-9]
// \D === [^\d]

// \s === [\r\n\t\v\f]   // 回车符，换行符， 制表符， 垂直换行符 ，  换页符。
// \S === [^\s]

// \b === 单词边界
// \B === 非单词边界

// let reg = /\bThis\b/g;
// let str = 'This is a test';
// console.log(str.match(reg))  // [ 'This' ]


// let reg = /\bhis\b/g;  // 这样两边都需要是边界
// let str = 'This is a test';
// console.log(str.match(reg))  // null


// let reg = /his\b/g;
// let str = 'This is a test';
// console.log(str.match(reg))  // [ 'his' ]


// . 匹配除了回车和换行的所有字符
// let reg = /./g;
// let str = 'This\nis\ra\ttest';
// console.log(str.match(reg))





