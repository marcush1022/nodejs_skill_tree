# **GLOBAL VARIABLE PROBLEM**

## **EXP:**
```
var a = 2;
function foo() {
    console.log(this.a);
}
foo();
```

## **USE REPL: 2; USE node foo.js: undefined**

**function 中 this 的指向是 global 或 window;**

全局对象是最顶层的对象，浏览器环境中为 window, nodejs 中为 global, 全局对象的属性与全局变量等价;

global.a=2;
a //2
等价于:
a=2
global.a //2


## **VM**
将代码运行在 sandbox 之中，并赋予其一些 global 等变量，**var 的变量会粘到 global (浏览器是 window)中**;
在 vm 运行脚本，**无法访问局部变量，只能访问当前的全局变量**;

## **NODE REPL启动的sandbox**
在 nodejs 中的 VM 中，顶级作用域下 var 的变量会 add 到 global 中，node 的 repl 使用了 vm;


