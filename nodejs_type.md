#TYPE

#NUMBER, STRING, BOOLEAN, OBJECT
Core variable types of js: [number, string, boolean, object];

`基本类型/simple type` 
`String, Number, Symbol, Boolean, Undefined, Null`;
基本类型占据空间固定，为了便于提升其访问速度，将其存储于栈中，即按址访问;

`引用类型/complex type`
`Object`;
引用类型也被称为复杂类型，由于其占据的空间大小可变，因此不能将其存储于栈中，否则会降低变量查询速度，因此将其存储于堆中，
而存储于变量处的值是一个指针，指向存储对象的内存处，即按址访问；
引用类型除Object, 还包括Function, Array, Date等;


#UNDEFINED
[undefined] means this variable not initialize its value or this variable is not exists;
var x;
console.log(x); // undefined

#NULL
null means [null value]
var x = null;
console.log(x); // null

#TYPEOF
typeof is an operator, possible 7 results: `number, boolean, string, function, object, undefined, symbol`;
`reference type will return [object] besides [function]`;

#== and ===
== only compare value, === compare value and type;

#INSTANCE OF
Instance of is used to judge if A is a instance of B, if is the instance returns true, else returns false;




