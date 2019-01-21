## **PROTOTYPE**

JS的继承通过PROTOTYPE对象(原型对象);

### **构造函数的缺点**
```
function Foo (name, age) {
    this.name = name;
    this.age = age;
    this.common = function() {
        console.log("THIS IS COMMON");
    }
}

var Foobar = new Foo("fubar", 11);
var Barfoo = new Foo("barfu", 22);

Foobar.name; //"fubar"
Foobar.age; //11

Foobar.common === Barfu.common; //false
```

> 多个构造函数的多个实例之间无法共享属性，导致系统资源的浪费;
> common方法生成在每个实例对象上，因此生成了两次，导致了系统资源的浪费; 

### **解决方法: PROTOTYPE**
> JS继承机制的设计思想：所有继承自原型对象的实例对象都能共享原型对象的属性和方法;
> 每一个函数默认有prototype属性，指向一个对象，普通函数的prototype属性无用，构造函数的> prototype在实例化时自动成为实例对象的原型; 
```
var Foobar = function(name) {
    this.name = "Fubar";
}

foobar.prototype.age = 11;

var varfoo = new Foobar("foo");
varfoo.age; // 11;
```

### **原型链**

JS规定每一个对象都有原型; 因此任何对象的原型都可以追溯到prototype, 因此所有对象都有toString和valueOf方法; prototype的原型是null;
原型链的尽头是null;

若使用对象的某个属性时，对象没有这个属性，则会继续向其原型对象寻找，若到prtotype都没有，则返回undefined;

若某个对象与他的原型对象定义了同样的属性，则当前的对象的属性会覆盖(override)原型的属性;

因此遍历原型链会影响性能，查找不存在的属性会遍历整个原型链; 

若将一个对象的prototype指向一个数组，则其实例可以调用数组的方法; 

```
var myArray = function () {};
myArray.prototype = new Array();
myArray.prototype.constructor = myArray;

var arr = new myArray();
arr.push(1, 2, 3);
arr.lenght //3
arr instanceof Array //true;
// instance返回一个布尔值，某个对象是否是某个类型的实例;

#CONSTRUCTOR
prototype对象有个constructor属性：默认指向对象的prototype的构造函数;
function P() {}
P.prototype.constructor === P //true
```






