# **OBJECT**
**Standard Built-in ECMAScript Objects**

## **15.1 The Global Object (全局对象)**

**The unique global object is created before control enters any execution context.**  
**唯一的全局对象建立在控制进入任何执行环境之前.**

### **I. Value Properties of the Global Object (全局对象的值属性)**

1. NaN  
NaN 的值是 NaN;  
2. Infinity  
Infinity 的值是 +∞;  
3. undefined  
undefined 的值是 undefined;  

### **II. Function Properties of the Global Object (全局对象的函数属性)**

1. eval (x)    
eval() 函数可计算某个字符串, 并执行其中的的 JavaScript 代码;  

2. parseInt (string , radix)  
parseInt() 函数可解析一个字符串, 并返回一个整数;

3. parseFloat (string)  
parseFloat() 函数可解析一个字符串, 并返回一个浮点数;

4. isNaN (number)  
如果指定参数为 NaN, 则返回 true, 否则返回 false;

5. isFinite (number)  
如果指定参数为 NaN 或 +∞ 或 −∞, 则返回 false, 否则返回 true;

### **III. URI Handling Function Properties (处理 URI 的函数属性)**

1. decodeURI (encodedURI)  
当以一个参数 encodedURI 调用 decodeURI 函数, 采用如下步骤:  
  a. 令 uriString 为 ToString(encodedURI);  
  b. 令 reservedURISet 为一个字符串, 包含 uriReserved 的每个有效字符加上 "#" 的实例;  
  c. 返回调用 Decode(uriString, reservedURISet) 的结果;  

2. decodeURIComponent (encodedURIComponent)  
decodeURIComponent 函数计算出一个新版 URI, 将 URI 中可能是 encodeURIComponent 函数引入的每个转义序列和 UTF-8 编码组替换为代表它们的字符.  
当以一个参数 encodedURIComponent 调用 decodeURIComponent 函数, 采用如下步骤:  
  a. 令 componentString 为 ToString(encodedURIComponent);   
  b. 令 reservedURIComponentSet 为一个空字符串;  
  c. 返回调用 Decode(componentString, reservedURIComponentSet) 的结果;   

3. encodeURI (uri)  
encodeURI 函数计算出一个新版 URI, 将 URI 中某些字符的每个实例替换为代表这些字符 UTF-8 编码的一个, 两个或三个转义序列.  
当以一个参数 uri 调用 encodeURI 函数, 采用如下步骤:  
  a. 令 uriString 为 ToString(uri);
  b. 令 unescapedURISet 为一个字符串, 包含 uriReserved 和 uriUnescaped 的每个有效字符加上 "#" 的实例;  
  c. 返回调用 Encode(uriString, unescapedURISet) 的结果;  

4. encodeURIComponent (uriComponent)  
encodeURIComponent 函数计算出一个新版 URI, 将 URI 中某些字符的每个实例替换为代表这些字符 UTF-8 编码的一个, 两个或三个转义序列.  
当以一个参数 uriComponent 调用 encodeURIComponent 函数, 采用如下步骤:  
  a. 令 componentString 为 ToString(uriComponent);  
  b. 令 unescapedURIComponentSet 为一个字符串, 包含 uriUnescaped 的每个有效字符的实例;  
  c. 返回调用 Encode(componentString, unescapedURIComponentSet) 的结果;  

### **IV. Constructor Properties of the Global Object (全局对象的构造器属性)**

- Object ( . . . )  
- Function ( . . . )  
- Array ( . . . )  
- String ( . . . )  
- Boolean ( . . . )  
- Number ( . . . )  
- Date ( . . . )  
- RegExp ( . . . )  
- Error ( . . . )  
- EvalError ( . . . )  
- RangeError ( . . . )  
- ReferenceError ( . . . )  
- SyntaxError ( . . . )  
- TypeError ( . . . )  
- URIError ( . . . )  

### **V. Other Properties of the Global Object (全局对象的其他属性)**

- Math
- JSON

## **15.2 Object Objects (Object 对象)**

### **I. The Object Constructor Called as a Function (作为函数调用 Object 构造器)**

**When Object is called as a function rather than as a constructor, it performs a type conversion.**
**当把 Object 当做一个函数来调用, 而不是一个构造器, 它会执行一个类型转换.**  

### **II. The Object Constructor (Object 构造器)**

**When Object is called as part of a new expression, it is a constructor that may create an object.**
**当 Object 是 new 表达式调用的一部分时, 它是一个构造器, 可创建一个对象.**

new Object ([ value ])  
当以一个参数 value 或者无参数调用 Object 构造器, 采用如下步骤:

1. 如果提供了 value, 则:  
  a. 如果 Type(value) 是 Object, 则:  
    i. 如果 value 是个原生 ECMAScript 对象(native ECMAScript object), 不创建新对象, 简单的返回 value;  
    ii. 如果 value 是宿主对象(host object), 则采取动作和返回依赖实现的结果的方式可以使依赖于宿主对象的;  
  b. 如果 Type(value) 是 String, 返回 ToObject(value);  
  c. 如果 Type(value) 是 Boolean, 返回 ToObject(value);
  d. 如果 Type(value) 是 Number, 返回 ToObject(value);
2. 断言: 未提供参数 value 或其类型是 Null 或 Undefined (The argument value was not supplied or its type was Null or Undefined).
3. 令 obj 为一个新创建的原生 ECMAScript 对象;
4. 设定 obj 的 [[Prototype]] 内部属性为标准内置的 Object 的 prototype 对象 (15.2.4);
5. 设定 obj 的 [[Class]] 内部属性为 "Object";
6. 设定 obj 的 [[Extensible]] 内部属性为 true;
7. 设定 obj 的 Object 类型的所有内部方法;
8. 返回 obj;

### **III. Properties of the Object Constructor (Object 构造器的属性)**

**除了内部属性和 length 属性(其值是 1)之外, Object 构造器拥有以下属性:**

- **Object.prototype**  
Object.prototype 的初始值是标准内置 Object 的 prototype 对象;  
这个属性包含特性 {[[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false };  

- **Object.getPrototypeOf(O)**  
i. 若 Type(O) 不是 Object，则抛出一个 TypeError 异常;  
ii. 返回 O 的 [[Prototype]] 内部属性的值;  

- **Object.getOwnPropertyDescriptor(O, P)**  
i. 如果 Type(O) 不是 Object，则抛出一个 TypeError 异常;  
ii. 令 name 为 ToString(P);  
iii. 令 desc 为以参数 name 调用 O 的 [[GetOwnProperty]] 内部方法的结果;  
iv. 返回调用 FromPropertyDescriptor(desc) 的结果 (8.10.4);  

- **Object.getOwnPropertyNames(O)**  
i. 如果 Type(O) 不是 Object，则抛出一个 TypeError 异常;  
ii. 令 array 为类似是用表达式 new Array() 创建新对象的结果, 这里的 Array 是标准内置构造器名;  
iii. 令 n 为 0;  
iv. 对 O 的每个自身属性 P:  
  a. 令 name 为值是 P 的名称的字符串;  
  b. 以 ToString(n) 和属性描述 {[[Value]]: name, [[Writable]]: true, [[Enumerable]]: true, [[Configurable]]: true} 和 false 为参数调用 array 的 [[DefineOwnProperty]] 内部方法;  
  c. n 递增 1;  
v. 返回 array;  

- **Object.create(O [, Properties])**  
create 函数按照指定的原型创建一个新对象;  
i. 如果 Type(O) 不是 Object 或 Null，则抛出一个 TypeError 异常;  
ii. 令 obj 为为仿佛是用表达式 new Object() 创建新对象的结果，这里的 Object 是标准内置构造器名;  
iii. 设定 obj 的 [[Prototype]] 内部属性为 O;  
iv. 如果传入了 Properties 参数并且不是 undefined, 则类似是用 obj 和 Properties 当作参数调用标准内置函数 Object.defineProperties 一样给 obj 添加自身属性;  
v. 返回 obj;  

- **Object.defineProperty(O, P, Attributes)**  
defineProperty 函数用于给一个对象添加一个自身属性 并/或 更新现有自身属性的特性;  
i. 如果 Type(O) 不是 Object，则抛出一个 TypeError 异常;  
ii. 令 name 为 ToString(P);  
iii. 令 desc 为以 Attributes 作为参数调用 ToPropertyDescriptor 的结果;  
iv. 以 name, desc, true 作为参数调用 O 的 [[DefineOwnProperty]] 内部方法;  
v. 返回 O;  

- **Object.defineProperties(O, Properties)**

- **Object.seal(O)**

- **Object.freeze(O)**

- **Object.preventExtensions(O)**

- **Object.isSealed(O)**

- **Object.isFrozen(O)**

- **Object.isExtensible(O)**

- **Object.keys(O)**
