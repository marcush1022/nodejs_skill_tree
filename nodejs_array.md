# **ARRAY**

## **I. Array 构造器**

### **1. new Array(len)**

```
> var arr = new Array(4)
undefined
> arr
[ <4 empty items> ]
> arr.toString()
',,,'
```

### **2. var arr = [1, 2, 3]**

```
> var arr = [1, 2, 3]
undefined
> arr
[ 1, 2, 3 ]
```

## **II. Array 构造器属性**

Array 构造器的 prototype 的内部属性值是函数原型对象.  
Array 构造器除了一些内部属性和 length 之外，还有如下属性：  

### **1. Array.prototype**

Array.prototype 的初始值是原型对象.

```
> Array.prototype
[]
```

### **2. Array.isArray(arg)**

执行步骤：
1. 若 typeof(arg) 不是 object，返回 false;
2. 若 arg 的 [[class]] 内部属性是 Array，返回 true;
3. 返回 false.

## **III. Array 原型对象属性**

### **1. Array.prototype.constructor**

Array.prototype.constructor 的初始值是标准内置 Array 构造器.

### **2. Array.prototype.toString()**

```
> var a = [1, 2, 3]
undefined
> a.toString()
'1,2,3'
```

### **3. Array.prototype.toLocaleString()**

The elements of the array are converted to Strings using their toLocaleString methods, and these Strings are then concatenated, separated by occurrences of a separator String that has been derived in an implementation-defined locale-specific way. The result of calling this function is intended to be analogous to the result of toString, except that the result of this function is intended to be locale-specific.

### **4. Array.prototype.concat(item1, item2, ...)**

```
> var b = a.concat(4, 5, 6);
undefined
> b
[ 1, 2, 3, 4, 5, 6 ]
```

### **5. Array.prototype.join(separator)**

```
> var c = b.join('+')
undefined
> c
'1+2+3+4+5+6'
```

### **6. Array.prototype.pop()**

删除并返回数组的最后一个元素.

### **7. Array.prototype.push(item1, item2, ...)**

将参数按顺序插入到末尾，函数的返回值为新数组的长度.

```
> arr
[ 1, 2, 3 ]
> arr.push(4, 5, 6)
6
> arr
[ 1, 2, 3, 4, 5, 6 ]
```

### **8. Array.prototype.reverse()**

数组逆序，返回值为逆序的数组.

```
> arr.reverse()
[ 6, 5, 4, 3, 2, 1 ]
> arr
[ 6, 5, 4, 3, 2, 1 ]
```

### **9. Array.prototype.shift()**

删除并返回数组的第一个元素.

### **10. Array.prototype.slice(index1, index2)**

截取.
```
> c
'1+2+3+4+5+6'
> var d = c.slice(1, 3)
undefined
> d
'+2'
```

### **11. Array.prototype.sort(comparefn)**

排序，comparefn 可为自定义排序函数.

