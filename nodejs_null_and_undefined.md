#NULL AND UNDEFINED
js中表示"无"的值，undefined和null；

#NODE REPL中:
typeof(null) ==> 'object';
typeof(undefined) ==> 'undefined';
`null == undefined` ==> 'true';
`!null == true` ==> 'true';
`!undefined == true` ==> 'true';

`null表示没有对象，即该处不应有值;`
用于: 
1. 作为函数的参数，表明函数的参数不是对象；
2. 作为对象原型链的起点;
`undefined表示缺少值，即此处应该有值，但是没有定义;`
用于:
1. 变量被声明之后但是没有赋值，就为undefined;
2. 调用函数时，应该提供的参数未提供，此参数即为undefined;
3. 对象没有赋值的属性，即为undefined;
4. 函数没有返回值，默认返回undefined;

var i;
i // undefined;

function f(x) { console.log(x); } 
f();
// undefined;

var Obj = new Object();
Obj.p;
// undefined;

var x = f()
x
// undefined;
