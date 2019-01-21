#js是动态类型语言, 变量没有类型限制 

#自动类型转换
var x = y ? 1: 'a';
当y是true时, x是数字, 当y是false时, x是字符型, x的类型, 无法在编译器确定, 在运行时确定;

运算时, 若运算符两边的运算子的类型与预期不符, 会自动转换类型, 
例: '4' - '3' // 1 
减法运算符两边的运算子为字符型, 应该为整型, 因此将其自动转为字符型;

#强制类型转换
#Number()
`强制类型转换的3个函数:`
`Number, String, Boolean`
`Number(), 将任意类型的值转为数值`
1. 原始类型值
Number(324) // 324
Number('324') // 324
Number('32ab') // `NaN, 无法解析为数值, 返回NaN`
Number('') // 0
Number(true) // 1
Number(false) // 0
Number(undefined) // NaN
Number(null) // 0

`Number转换比parseInt更加严格, 若一个字符无法转为数值, 则整个字符串为NaN`
`parseInt逐个解析字符, Number整体转换字符串的类型`
`parseInt和Number会自动过滤字符串前导和后缀的空格`
parseInt('32 a') // 32
Number('32 a') // NaN

parseInt('\t\v\r12.34\n'); //12
Number('\t\v\r12.34\n'); //12.34

2. 对象
`Number的参数是对象时, 结果为NaN, 除非参数是单个数值元素的数组;`
Number({a:1}) // NaN
Number([1,2]) // NaN
Number([1]) // 1

`Number转换规则:` 
1.调用对象自身的valueOf方法, 若返回原始类型的值, 对其使用Number方法, 并返回其值; 
2.若1返回的是对象, 则调用对象的toString方法, 若返回原始类型的值, 对其使用Number, 并返回其值; 
3.若toString返回对象, 报错;

#String()
1. 原始类型值
String(1) // "1"
Stirng('abc') // "abc"
String(true) // "true"
String(undefined) // "undefined"
String(null) // "null"

2. 对象
Stirng({a:1}) // "[object Object]"
String([1, 2, 3]) // "1,2,3"

#Boolean()
除以下5种情况全部为true
1. undefined
2. null
3. -0 或 +0
4. NaN
5. ''

Boolean({}) // true
Boolean([]) // true
Boolean(new Boolean(false)) // true

#自动类型转换
#1.不同类型数据运算
123 + 'abc' // "123abc"

#2.对非布尔型数据求布尔值
if('a') {
    console.log('b');
} // "b"

#3.对非数值类型的值使用一元运算符
+{foo: 'bar'} // NaN
-[1, 2, 3]

`自动转换具有不确定性, 在预期为数值, 布尔值, 字符串的地方都应使用Boolean, String, Number进行转换;`

`自动转为Boolean` 
if (!undefined && !null && !0 && !NaN && !'') {
    console.log('true');
} // true

`自动转为字符串`
'5' + 1; // "51"
'5' + true; // "5true"
'5' + false; // "5false"
'5' + {}; // "5[object object]"
'5' + []; // "5"
'5' + function(){}; // "5function(){}"
'5' + undefined; // "5undefined"
'5' + null; // "5null"

#自动转换比较容易出错

`自动转为数值`
'5' + '2'; // 7
'5' * '1'; // 5
true - 1; // 0
false - 1; // -1
'1' - 1 // 0
'5' * [] // 0
'abc' - 1 // NaN
null + 1 // 1
undefined + 1 // NaN




