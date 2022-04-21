// 1. 
// let str = 'abcd'

// console.log(str.toLocaleLowerCase())
// console.log(str.toLocaleUpperCase())



// 2. 
// let str = 'This is a test';
// console.log(str.indexOf('is'))
// console.log(str.indexOf('is', 4))
// console.log(str.lastIndexOf('is'))



// 3. 
// 正向预查

// 贪婪模式和非贪婪模式

// let str = 'abcd{{efg}}abcd{{xyz}}';
// let reg = /{{.*}}/g;
// let reg2 = /{{.*?}}/g
// console.log(str.match(reg))  // [ '{{efg}}abcd{{xyz}}' ]
// console.log(str.match(reg2))  // [ '{{efg}}', '{{xyz}}' ]


// let str = 'aaaaaa';
// let reg = /\w?/g;
// let reg2 = /\w??/g;

// console.log(str.match(reg))  // ['a', 'a', 'a', 'a', 'a', 'a', '']
// console.log(str.match(reg2))  // ['', '', '', '', '', '', '']



// 4. replace
// let str = 'JSplusplus';
// let str1 = str.replace('plus', '+')
// console.log(str1)  // JS+plus




// let str = 'JSplusplus';
// let reg = /plus/g
// let str1 = str.replace(reg, '+')
// console.log(str1)  // JS++




// let str = 'aabbccdd';
// let reg = /(\w)\1(\w)\2/g
// let str1 = str.replace(reg, function($, $1, $2){
//     // console.log($, $1, $2)
//     // aabb a b
//     // ccdd c d

//     return $2 + $2 + $1 + $1;
// })
// console.log(str1)  // bbaaddcc




// let str = 'js-plus-plus';
// let reg = /-(\w)/g;  //注意这个括号

// let str1 = str.replace(reg, function($, $1) {
//     console.log($, $1);
//     // -p p
//     // -p p

//     return $1.toUpperCase();
// })
// console.log(str1)  // jsPlusPlus




// let str = 'jsPlusPlus';
// let reg = /([A-Z])/g;
// let str1 = str.replace(reg, function($, $1){
//     return "_" + $1.toLowerCase();
// });
// console.log(str1)  // js_plus_plus




// let str = 'aabbcc';
// let reg = /(\w)\1(\w)\2(\w)\3/g;
// let str1 = str.replace(reg, '$1*$2*$3');
// console.log(str1)  // a*b*c




// let str = 'aa+bb+cc';
// let reg = /\+/g;
// console.log(str.match(reg))  // [ '+', '+' ]




// let str = '10000000000000000'
// let reg = /(?=(\B)(\d{3})+$)/g
// let str1 = str.replace(reg, ',');
// console.log(str1)




// let str = 'My name is {{name}}. I\'m {{age}} years old.';
// let reg = /{{(.*?)}}/g;

// let str1 = str.replace(reg, function(node, key){
//     // console.log($, $1)
//     // {{name}} name
//     // {{age}} age
//     return {
//         name: 'Jone',
//         age: 32
//     }[key];
// })

// console.log(str1)