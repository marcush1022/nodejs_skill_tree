## **JSON**
### **(JavaScript Objcet Notation)**

> Json可以将JS对象表示的一组数据转化为字符串（伪对象），然后可以在函数之间进行传递，或者在异步程序中将其在web程序和服务器之间传递;

### **值的数组**
> 需要表示一组值时，使用JSON可以提高可读性, 并且使用方便;
```
{"people": [
        {"name": "a", "age", 11},
        {"name": "b", "age", 11},
        {"name": "c", "age", 11}
]}
```

> 用相同的方法可以表示多个值:
```
{"people1": [
        {"name": "a", "age", 11},
        {"name": "b", "age", 11},
        {"name": "c", "age", 11}
],
"people2": [
        {"name": "x", "age", 11},
        {"name": "y", "age", 11},
        {"name": "z", "age", 11}
],
"people3": [
        {"name": "e", "age", 11},
        {"name": "d", "age", 11},
        {"name": "f", "age", 11}
]}
```

> JSON是JS的原生格式，JS可以直接对其进行处理;
> 可以直接将JSON赋值给JS变量
```
var peoples = 
{"people1": [
        {"name": "a", "age", 11},
        {"name": "b", "age", 11},
        {"name": "c", "age", 11}
],
"people2": [
        {"name": "x", "age", 11},
        {"name": "y", "age", 11},
        {"name": "z", "age", 11}
],
"people3": [
        {"name": "e", "age", 11},
        {"name": "d", "age", 11},
        {"name": "f", "age", 11}
]};
```
### **访问数据**
> peoples是一个数组，可以直接访问其数据: peoples.peoples1[0].name
> 同样可以直接修改其数据: peoples.peoples1[0].age = 12
> 前提是将字符串转化为JSON对象;
> JSON格式的对象与JSON格式的字符串是不同的;
```
var obj1 = {name: "aaa", "age": 11}; //JSON格式对象
var obj2 = "{name: "bbb", "age": 22}"; //JSON格式字符串(JSON格式文本)
```

### **转换回字符串**
```
var JSONstr = peoples.toJSONString();
```
例: 
```
function Car(make, value) {
    this.make = make;
    this.value = value;
}

function car2String() { 
    var carObj = new Car("aaa", 111);
    console.log(carObj.toJSONString());
}
```
### **将JSON文本转化为JSON对象: parseJSON()**
### **将JSON对象转化为JSON文本: toJSONString()**



