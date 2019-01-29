# **LANGUAGE OVERVIEW**

**ECMAScript 是基于对象的**: 基本语言和宿主设施都由对象提供, ECMAScript 程序是一组可通信的对象  
ECMAScript is object-based: basic language and host facilities are provided by objects, and an ECMAScript program is a cluster of communicating objects.  

**ECMAScript 对象 (objects) 是 属性 (properties) 的集合**, 每个属性有零个或多个 特性 (attributes), 它确定怎样使用此属性  
An ECMAScript object is a collection of properties each with zero or more attributes that determine how each property can be used.

**属性是持有其他 对象 (objects),  原始值 (primitive values),  函数 (functions) 的容器**  
Properties are containers that hold other objects, primitive values, or functions.

**原始值是以下内置类型之一的成员: Undefined, Null, Boolean, Number, String**  
A primitive value is a member of one of the following built-in types: Undefined, Null, Boolean, Number, and String.

**对象是剩下的内置类型 Object 的成员**  
an object is a member of the remaining built-in type Object.

函数是**可调用对象 (callable object)**  
and a function is a callable object. 

**方法 (method) 是通过属性与对象关联的函数**  
A function that is associated with an object via a property is a method.

ECMAScript 定义一组**内置对象 (built-in objects)**, 勾勒出 ECMAScript 实体的定义    
ECMAScript defines a collection of built-in objects that round out the definition of ECMAScript entities.

这些内置对象包括 **全局对象 (global object) , Object 对象 , Function 对象 , Array 对象 , String 对象 , Boolean 对象 , Number 对象 , Math 对象 , Date 对象 , RegExp 对象 , JSON 对象, 和 Error 对象:  Error , EvalError , RangeError , ReferenceError , SyntaxError , TypeError , URIError**  
These built-in objects include the global object, the Object object, the Function object, the Array object, the String object, the Boolean object, the Number object, the Math object, the Date object, the RegExp object, the JSON object, and the Error objects Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError and URIError.

ECMAScript 中还定义一组**内置运算符 (operators)**, ECMAScript 运算符包括 **一元运算符 , 乘法运算符 , 加法运算符 , 按位移位运算符 , 关系运算符 , 相等运算符 , 二进制位运算符 , 二进制逻辑运算符 , 赋值运算符 , 逗号运算符**   
ECMAScript also defines a set of built-in operators. ECMAScript operators include various unary operations, multiplicative operators, additive operators, bitwise shift operators, relational operators, equality operators, binary bitwise operators, binary logical operators, assignment operators, and the comma operator.

**ECMAScript 语法有意设计成与 Java 语法类似**  
ECMAScript syntax intentionally resembles Java syntax.

-------------------------------
## **OBJECTS**

ECMAScript 不使用诸如 C++, Smalltalk, Java 中的类, 相反, **对象可以通过各种方式创建, 包括字面符号, 或通过 构造器 创建对象然后运行代码初始化其全部或部分属性值, 为这些属性分配初始值**  
ECMAScript does not use classes such as those in C++, Smalltalk, or Java. Instead objects may be created in various ways including via a literal notation or via constructors which create objects and then execute code that initialises all or part of them by assigning initial values to their properties.

**每个构造器是一个拥有名为 "prototype" 的属性的函数. 此属性用于实现 基于原型的继承 和 共享属性**   
Each constructor is a function that has a property named "prototype" that is used to implement prototype-based inheritance and shared properties.

**构造器通过 new 表达式创建对象: 例如, new Date(2009,11) 创建一个新 Date 对象**. 不使用 new 调用一个构造器的结果, 依赖构造器本身. 例如, Date() 产生一个表示当前日期时间的字符串, 而不是一个对象   
Objects are created by using constructors in new expressions; for example, new Date(2009,11) creates a new Date object. Invoking a constructor without using new has consequences that depend on the constructor. For example, Date() produces a string representation of the current date and time rather than an object.

**每个由构造器创建的对象, 都有一个隐式引用 ( 叫做对象的原型 ) 链接到构造器的 "prototype" 属性值**  
Every object created by a constructor has an implicit reference (called the object’s prototype) to the value of its constructor’s "prototype" property.

**原型可能有一个非空 (non-null) 隐式引用链接到它自己的原型, 以此类推, 这叫做 原型链**  
Furthermore, a prototype may have a non-null implicit reference to its prototype, and so on; this is called the prototype chain.

**当向对象的一个属性提出引用, 引用会指向原型链中包含此属性名的第一个对象的此属性**  
When a reference is made to a property in an object, that reference is to the property of that name in the first object in the prototype chain that contains a property of that name.

**换句话说, 首先检查直接提及的对象的同名属性, 如果对象包含同名的属性, 引用即指向此属性, 如果该对象不包含同名的属性, 则下一步检查对象的原型, 以此类推**  
In other words, first the object mentioned directly is examined for such a property; if that object contains the named property, that is the property to which the reference refers; if that object does not contain the named property, the prototype for that object is examined next; and so on.

一般情况下基于类的面向对象语言的实例拥有状态, 类拥有方法, 并且只能继承结构和行为. **在 ECMAScript 中, 对象拥有状态和方法, 并且结构, 行为, 状态全都可继承**  
In a class-based object-oriented language, in general, state is carried by instances, methods are carried by classes, and inheritance is only of structure and behaviour. In ECMAScript, the state and methods are carried by objects, and structure, behaviour, and state are all inherited.

不同于基于类的对象语言, **属性可以通过赋值的方式动态添加给对象**. 也就是说, **构造器并不是非要对构造的对象的全部或任何属性命名或赋值**  
Unlike class-based object languages, properties can be added to objects dynamically by assigning values to them. That is, constructors are not required to name or assign values to all or any of the constructed object’s properties.

