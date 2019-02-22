# **TYPE**

## **8.1 Undefined 类型**

Undefined 类型有且只有一个值，称为 undefined 。任何没有被赋值的变量都有 undefined 值.  

## **8.2 Null 类型**

Null 类型有且只有一个值，称为 null.  

## **8.3 Boolean 类型**

## **8.4 String 类型**  

## **8.5 Number 类型**

数值类型拥有 18437736874454810627（即，264-253 +3）个值，表示为 IEEE-754 格式 64 位双精度数值（IEEE 二进制浮点数算术中描述了它），除了 IEEE 标准中的 9007199254740990（即，253-2）个明显的“非数字 ”值；在 ECMAScript 中，它们被表示为一个单独的特殊值：NaN.  
（请注意，NaN 值由程序表达式 NaN 产生，并假设执行程序不能调整定义的全局变量 NaN。）  
对于 ECMAScript 代码而言，NaN 值相互之间无法区别.  
The Number type has exactly 18437736874454810627 (that is, 264−253+3) values, representing the double-precision 64-bit format IEEE 754 values as specified in the IEEE Standard for Binary Floating-Point Arithmetic, except that the 9007199254740990 (that is, 253−2) distinct “Not-a-Number” values of the IEEE Standard are represented in ECMAScript as a single special NaN value.  
(Note that the NaN value is produced by the program expression NaN.)  
to ECMAScript code, all NaN values are indistinguishable from each other.  

## **8.6 Object 类型 | The Object Type**

### **1. Property 特性 (Property Attributes)**

**命名的数据属性的特性**  
| Attribute Name | Value Domain | Description |
|:---------------|:-------------|:------------|
| [[Value]] | 任何 ECMAScript 语言类型 | 通过读 property 来取到该值 |
| [[Writable]] | Boolean | 如果为 false, 试图通过 ECMAScript 代码 [[Put]] 去改变该属性的 [[Value]], 将会失败 |
| [[Enumerable]] | Boolean | 如果为 true, 则该属性可被 for-in 枚举出来, 否则, 该属性不可枚举 |
| [[Configurable]] | Boolean | 如果为 false, 试图删除该属性, 改变该属性为访问器属性, 或改变它的 attributes, 都会失败 |

命名的访问器属性由一个名字关联到一个下表中列出的特性 (attributes)   
**A named accessor property associates a name with the attributes listed in the table.**

**命名的访问器属性的特性**
| Attribute Name | Value Domain | Description |
|:---------------|:-------------|:------------|
| [[Get]] | Object 或 Undefined |  |
| [[Set]] | Object 或 Undefined |  |
| [[Enumerable]] | Boolean | 如果为 true, 则该属性可被 for-in 枚举出来, 否则, 该属性不可枚举 |
| [[Configurable]] | Boolean | 如果为 false, 试图删除该属性, 改变该属性为访问器属性, 或改变它的 attributes, 都会失败 |

### **2. Object 内部属性及方法**
**Object Internal Properties and Methods**

**所有对象共有的内部属性**  
**Internal Properties Common to All Objects**
| Attribute Name | Value Domain | Description |
|:---------------|:-------------|:------------|
| [[Prototype]] | Object 或 Null | 此对象的原型 |
| [[Class]] | String | 说明规范定义的对象分类的一个字符串值 |
| [[Extensible]] | Boolean | 如果是 true，可以向对象添加自身属性 |
| [[Get]] | SpecOp(propertyName) → any | 返回命名属性的值 |
| [[GetOwnProperty]] | SpecOp (propertyName) → Undefined 或 Property Descriptor | 返回此对象的自身命名属性的属性描述，如果不存在返回 undefined |
| [[GetProperty]] | SpecOp (propertyName) → Undefined 或 Property Descriptor | 返回此对象的完全填入的自身命名属性的属性描述，如果不存在返回 undefined |
| [[Put]] | SpecOp (propertyName, any, Boolean) | 将指定命名属性设为第二个参数的值。flog 控制失败处理 |
| [[CanPut]] | SpecOp (propertyName) → Boolean | 返回一个 Boolean 值，说明是否可以在 PropertyName 上执行 [[Put]] 操作 |
| [[HasProperty]] | SpecOp (propertyName) → Boolean | 返回一个 Boolean 值，说明对象是否含有给定名称的属性 |
| [[Delete]] | SpecOp (propertyName, Boolean) → Boolean | 从对象上删除指定的自身命名属性。flog 控制失败处理 |
| [[DefaultValue]] | SpecOp (Hint) → primitive | Hint 是一个字符串。返回对象的默认值 |
| [[DefineOwnProperty]] | SpecOp (propertyName, PropertyDescriptor, Boolean) → Boolean | 创建或修改自身命名属性为拥有属性描述里描述的状态。flog 控制失败处理 |

## **8.7 引用规范类型 | The Reference Specification Type**

### **1. GetValue(v)**

### **2. PutValue(v,w)**