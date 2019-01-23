# **JS OBJECT**

### **1. object本身的方法**
直接定义在object对象的方法;
```
例: Object.print = function () { console.log("cout") };
```

### **2. object实例方法**
定义在object.prototype的方法, 可以被object实例直接使用, 例:
```
Object.prototype.print = function () {
    console.log(this);
}

var obj = new Object();
obj.print();
```

### **3. Object()**
Object本身是一个函数, 可以将任意值转化为对象, 常用于保证某个值一定是对象
当参数为空（null或undefined）时, 返回一个空对象 
以下效果相同:
```
var obj = new Object();
var obj = new Object(null);
var obj = new Object(undefined);

obj instanceof Object; //true
```
运算符instanceof用来判断一个对象是否是指定构造函数的实例;

若参数是原始类型的值，Object方法将其转化为对应包装对象的实例;
```
var obj = new Object(1);
obj instanceof Object; //true
obj instanceof Number; //true

var obj = new Object('aaa');
obj instanceof String; //true

var obj = new Object(false);
obj instanceof Boolean; //true
```
若该方法的参数是对象, 则返回该对象，不需要转换;
```
var arr = [];
var obj = new Object(arr);
arr == obj; //true

var value = {};
var obj = new Object(value);
obj == value; //true

var func = function() {};
var obj = new Object(func);
obj == func; //true
```
可用来判断变量是否为对象;
```
function isObject(value) {
    return value = Object(value);
}
isObject([]); //true
isObject(true); //false
```
### **4. Object构造函数**
Object不仅可作为工具函数使用，还可作为构造函数, 生成新的Object对象;
```
var obj = new Object();

var obj = new Object() 与 var obj = {}等价
```
Object作为构造函数时其使用方法与作为工具函数时一致;
Object(value)与new Object(value)的语义不同，前者是将value转化为对象，后者是生成一个新的对象, 其值是value;

### **5. Object静态方法**
即部署在Object自身的方法;
```
Object.keys(obj), Object.getOwnPropertyNames(obj) 方法用来遍历对象的属性; 
Object.keys(obj)方法的参数是对象，返回值是数组，数组的成员是该对象的所有属性名; 
Object.getOwnPropertyNames(obj)返回结果与keys相同;
var obj = {
    p1: 1,
    p2: 2
}
Object.keys(obj); //["p1", "p2"]
Object.getOwnPropertyNames(obj); //["p1", "p2"]
```
区别: getOwnPropertyNames会返回不可枚举属性;
```
var a = ['aaa', 'bbb'];
Object.keys(a); //["0", "1"]
Object.getOwnPropertyNames(a); //["0", "1", "length"] (数组的length是不可枚举属性)
计算属性个数: Object.keys(obj).length
```
### **6. Object实例方法**
Object实例对象的方法: 
```
Object.protetype.valueOf();
``` 

返回当前对象对应的值，默认情况下返回对象本身
valueOf方法的主要用途是JS自动类型转换时会默认调用此方法
```
var obj = new Object();
1 + obj //"1[object object]"
```

可自定义valueOf方法
```
obj.valueOf = function () {
    return 2;
};
1 + obj = 3;
Object.prototype.toString(); 
```

返回当前对象的对应的字符串形式; 
```
var obj = new Object();
obj.toString(); //"[object object]"
```

同样可以自定义
```
obj.toString = function () {
    return "string";
};
obj + ' ' + 'str'; //"string str"
```

#### 数组，字符串，Date, 函数内部已重写了toString方法, 不会返回[object object]
```
(function () {
    return 123;
}).toString()
输出: 
"function () {
    return 123;
}"
```

#### 可用于判断数据类型
```
var obj = {};
obj.toString(); //"[object object]"
实例对象可能自定义了toString, 覆盖掉Object.prototype.toString, 可以使用call调用
Object.prototype.toString.call(something);
Object.prototype.toString.call(2) //"[object Number]"
Object.prototype.toString.call('') //"[object String]"
Object.prototype.toString.call(true) //"[object Boolean]"
Object.prototype.toString.call(undefined) //"[object Undefined]"
Object.prototype.toString.call(null) //"[object null]"
Object.prototype.toString.call(Math) //"[object Math]"
Object.prototype.toString.call({}) //"[object Object]"
Object.prototype.toString.call([]]) //"[object Array]"
Object.prototype.toLocalString(); //返回当前对象对应的本地字符串形式; 
Object.prototype.hasOwnProperty(); //判断某属性是否为对象的自身的属性，还是继承自原型对象的属性; 
Object.prototype.isPropertyOf(); //判断当前对象是否是另一个对象的原型; 
```








