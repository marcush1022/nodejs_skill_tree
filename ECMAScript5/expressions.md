# **EXPRESSIONS**

## **11.9.3 The Abstract Equality Comparison Algorithm (抽象相等)**

1. 若 Type(x) 和 Type(y) 相同，则：  
  a. 若 type(x) 为 undefined, 返回 true;  
  b. 若 type(x) 为 null, 返回 true;  
  c. 若 type(x) 为 number, 则：  
    i. 若 x 为 NaN, 返回 false;  
    ii. 若 y 为 NaN, 返回 false;  
    iii. 若 x y 为相等数值，返回 true;  
    iv. 若 x 为 +0 且 y 为 -0 或 x 为 -0 且 y 为 +0, 返回 true;  
    v. 返回 false;  
  d. 若 type(x) 为 string, 则当 x 和 y 为完全相等的字符序列(长度相等且相同字符在相同位置)，返回 true;  
  e. 若 type(x) 为 boolean, 则比较是否同为true 或 false;  
  f. 当 x y 引用同一对象时返回 true, 否则 false;  
2. If x is null and y is undefined, return true;  
3. If x is undefined and y is null, return true;  
4. If Type(x) is Number and Type(y) is String, return the result of the comparison x == ToNumber(y);  
5. If Type(x) is String and Type(y) is Number, return the result of the comparison ToNumber(x) == y;  
6. If Type(x) is Boolean, return the result of the comparison ToNumber(x) == y;  
7. If Type(y) is Boolean, return the result of the comparison x == ToNumber(y);  
8. If Type(x) is either String or Number and Type(y) is Object, return the result of the comparison x == ToPrimitive(y);  
  ToPrimitive: 将操作数转为原始类型的值, 是规范中的抽象操作, toPrimitive(obj) 等价于先计算 obj.valueOf(), 如果结果为原始值,则返回此结果; 否则.计算obj.toString(), 如果结果是原始值, 则返回此结果; 否则, 抛出异常;  
9. If Type(x) is Object and Type(y) is either String or Number, return the result of the comparison ToPrimitive(x) == y;  
10. Return false;  

------------
## **11.9.6 The Strict Equality Comparison Algorithm (抽象严格相等)**

1. If Type(x) is different from Type(y), return false;  
2. If Type(x) is Undefined, return true;  
3. If Type(x) is Null, return true;  
4. If Type(x) is Number, then  
  a. If x is NaN, return false;  
  b. If y is NaN, return false;  
  c. If x is the same Number value as y, return true;  
  d. If x is +0 and y is −0, return true;  
  e. If x is −0 and y is +0, return true;  
  f. Return false;  
5. If Type(x) is String, then return true if x and y are exactly the same sequence of characters (same length and same characters in corresponding positions); otherwise, return false;
6. If Type(x) is Boolean, return true if x and y are both true or both false; otherwise, return false;
7. Return true if x and y refer to the same object. Otherwise, return false;

------------
## **11.6.1 The Addition operator (加法运算)**

1. 令 lref 为解释执行 AdditiveExpression 的结果;
2. 令 lval 为 GetValue(lref);
3. 令 rref 为解释执行 MultiplicativeExpression 的结果;
4. 令 rval 为 GetValue(rref);
5. 令 lprim 为 ToPrimitive(lval);
6. 令 rprim 为 ToPrimitive(rval);
7. 如果 Type(lprim) 为 String 或者 Type(rprim) 为 String，则: 返回由 ToString(lprim) 和 ToString(rprim) 连接而成的字符串;
8. 返回将加法运算作用于 ToNumber(lprim) 和 ToNumber(rprim) 的结果;

------------
## **11.6.2 The Subtraction Operator (减法运算)**

1. 令 lref 为解释执行 AdditiveExpression 的结果;  
2. 令 lval 为 GetValue(lref);  
3. 令 rref 为解释执行 MultiplicativeExpression 的结果;
4. 令 rval 为 GetValue(rref);
5. 令 lnum 为 ToNumber(lval);
6. 令 rnum 为 ToNumber(rval);
7. 返回返回将减法运算作用于 ToNumber(lprim) 和 ToNumber(rprim) 的结果;

------------
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
eval() 函数可计算某个字符串，并执行其中的的 JavaScript 代码;  

2. parseInt (string , radix)  
parseInt() 函数可解析一个字符串，并返回一个整数;

3. parseFloat (string)  
parseFloat() 函数可解析一个字符串，并返回一个浮点数;

4. isNaN (number)  
如果指定参数为 NaN，则返回 true，否则返回 false;

5. isFinite (number)  
如果指定参数为 NaN 或 +∞ 或 −∞，则返回 false，否则返回 true;

### **III. URI Handling Function Properties (处理 URI 的函数属性)**

1. decodeURI (encodedURI)  
当以一个参数 encodedURI 调用 decodeURI 函数，采用如下步骤:  
  a. 令 uriString 为 ToString(encodedURI);  
  b. 令 reservedURISet 为一个字符串，包含 uriReserved 的每个有效字符加上 "#" 的实例;  
  c. 返回调用 Decode(uriString, reservedURISet) 的结果;  

2. decodeURIComponent (encodedURIComponent)  
decodeURIComponent 函数计算出一个新版 URI，将 URI 中可能是 encodeURIComponent 函数引入的每个转义序列和 UTF-8 编码组替换为代表它们的字符.  
当以一个参数 encodedURIComponent 调用 decodeURIComponent 函数，采用如下步骤:  
  a. 令 componentString 为 ToString(encodedURIComponent);   
  b. 令 reservedURIComponentSet 为一个空字符串;  
  c. 返回调用 Decode(componentString, reservedURIComponentSet) 的结果;   

3. encodeURI (uri)  
encodeURI 函数计算出一个新版 URI，将 URI 中某些字符的每个实例替换为代表这些字符 UTF-8 编码的一个，两个或三个转义序列.  
当以一个参数 uri 调用 encodeURI 函数，采用如下步骤:  
  a. 令 uriString 为 ToString(uri);
  b. 令 unescapedURISet 为一个字符串, 包含 uriReserved 和 uriUnescaped 的每个有效字符加上 "#" 的实例;  
  c. 返回调用 Encode(uriString, unescapedURISet) 的结果;  

4. encodeURIComponent (uriComponent)  
encodeURIComponent 函数计算出一个新版 URI, 将 URI 中某些字符的每个实例替换为代表这些字符 UTF-8 编码的一个, 两个或三个转义序列.  
当以一个参数 uriComponent 调用 encodeURIComponent 函数，采用如下步骤:  
  a. 令 componentString 为 ToString(uriComponent);  
  b. 令 unescapedURIComponentSet 为一个字符串，包含 uriUnescaped 的每个有效字符的实例;  
  c. 返回调用 Encode(componentString, unescapedURIComponentSet) 的结果;  

### **IV. Constructor Properties of the Global Object (全局对象的构造器属性)**