# **THIS**

> **this: 总是返回一个对象, 即属性或方法当前所在的对象;**  
> 对象的属性可以赋值给另一个对象, 因此this的指向是可变的;

```
var A = {
    name : 'aaa',
    age : function () {
        return this.name;
    }
};

var B = {
    name : 'bbb'
};

B.age = A.age;
B.age; // aaa
this指向由A改为B
```

```
function f() {
    return this.name;
}

var Foo = {
    name : 'foo',
    showName : f
}

var Bar = {
    name : 'bar',
    showName : f
}

Foo.showName(); // foo
Bar.showName(); // bar
```


## **使用场合**

1. 全局环境
全局环境使用 this, 指向的是顶层对象 window;

2. 构造函数  
构造函数中使用 this 指向的是实例对象;
```
var Obj = function (p) {
    this.p = p;
};
```
this 指向实例对象，定义 this.p=p 相当于 Obj 有 p 属性;
```
var obj = new Obj('aaa');
return obj.p; //aaa
```




