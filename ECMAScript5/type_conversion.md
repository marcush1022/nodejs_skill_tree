# **TYPE CONVERSION**

**The ECMAScript runtime system performs automatic type conversion as needed.**  
**ECMAScript 运行时系统会在需要时从事自动类型转换.**

## **1. ToPrimitive**

ToPrimitive 运算符 (抽象操作) 接受一个值，和一个可选的 期望类型 作参数。ToPrimitive 运算符把其值参数转换为非对象类型.    
The **abstract operation** ToPrimitive takes an input argument and an optional argument PreferredType.  

## **2. ToBoolean**

(抽象操作)  

## **3. ToNumber**

(抽象操作)  

## **5. ToInteger**

(抽象操作)  

## **6. ToInt32**

(抽象操作)  

## **7. ToUint32**

(抽象操作)  

## **8. ToUint16**

(抽象操作)  

## **9. ToString**

(抽象操作)  

## **10. ToInteger**

(抽象操作)  

## **11. ToObject**

ToObject 运算符根据下表将其参数转换为对象类型的值 (抽象操作)    
| Argument Type | Result |
|:--------------|:-------|
| Undefined | 抛出 TypeError 异常 |
| Null | 抛出 TypeError 异常 |
| Boolean | 创建一个新的Boolean对象，其 [[PrimitiveValue]]属性被设为该布尔值的值 |
| Number | 创建一个新的Boolean对象，其 [[PrimitiveValue]]属性被设为该布尔值的值 |
| String | 创建一个新的Boolean对象，其 [[PrimitiveValue]]属性被设为该布尔值的值 |
| Object | 结果是输入的参数（不转换） |

## **12. CheckObjectCoercible**

抽象操作 CheckObjectCoercible 在其参数无法用 ToObject 转换成对象的情况下抛出一个异常.  

## **13. IsCallable**

抽象操作 IsCallable 确定其必须是 ECMAScript 语言值的参数是否是一个可调用对象.  

| 输入类型 | 结果 |
|:---------|:-----|
| Undefined | 返回false |
| Null | 返回false |
| Boolean | 返回false |
| Number | 返回false |
| String | 返回false |
| Object | 如果参数对象包含一个Call内部方法，则返回 true，否则返回 false |

