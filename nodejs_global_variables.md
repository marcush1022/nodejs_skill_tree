#GLOBAL VARIABLE PROBLEM

var a = 2;
function foo() {
    console.log(this.a);
}
foo();

#USE REPL: 2; USE node foo.js: undefined
function中this的指向是global或window;

全局对象是最顶层的对象，浏览器环境中为window, nodejs中为global, 全局对象的属性与全局变量等价;
global.a=2;
a //2
等价于:
a=2
global.a //2

#VM
将代码运行在sandbox之中，并赋予其一些global等变量，var的变量会粘到global(浏览器是window)中;
`在vm运行脚本，无法访问局部变量，只能访问当前的全局变量`；
`do not has the access to local scope, but only has the access to the current global object;`

#NODE REPL启动的sandbox
在nodejs中的VM中，`顶级作用域下var的变量会add到global中`，node的repl使用了vm;


