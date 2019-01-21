#空格与格式
1. 缩进: 使用两个空格缩进;
2. 变量声明: 在var之后声明变量, 避免污染全局上下文;
3. 操作符: `在操作符+-等后面加空格;`
4. 引号: `string尽量使用单引号;`

#命名规范Camel
1. 变量命名: `变量名采用小驼峰方式命名;`
2. 方法命名: `与变量一样, 方法名尽量使用动词或判断词;`
3. 类命名, `枚举类型: 采用大驼峰命名, 即首字母大写`;
4. 常量命名: `所有字母大写, 词汇之间下划线分割;`
5. 文件命名: `采用下划线分割词汇, 私有文件用下划线开头;`

例:
`函数和变量: functionNamesLikeThis, variableNamesLikeThis;`
`类名和枚举类型: ClassNamesLikeThis, EnumNamesLikeThis;`
`类方法: methodNamesLikeThis;`
`常量: SYMBOLIC_CONSTANTS_LIKE_THIS;`
`文件: 单词之间使用_, 不想暴露给某用户使用_开头;`

不应把array当作关联数组或object使用, 即a['one']='abc';
应该a={}, a.one='abc';

node回调函数的第一个参数应该是错误提示;
function cb(err, data, ...) {...}

声明变量应该每行声明一个, 不应声明在一行;

#不使用const???, const不是ECMA标准

#相等==和严格相等===
相等运算符会`自动转换类型`, 可能会造成想不到的错误;

`不使用相等运算符, 只使用严格相等???`

#所有变量声明放在函数头部
for(var i ...) {
    ...
}
最好写成:
var i;
for(i ...) {
    ...
}

#避免使用全局变量, 必须使用时, 用大写字母表示, 如: UPPER_CASE
`js最大的语法缺点, 全局变量对任何一个代码模块都可读可写;`

#不要使用new, 改用Object.create()???

#构建函数的函数名, 采用首字母大写, 其他函数一律使用首字母小写

#不使用++或--, 使用+=, -=

###命名:
#[FORCE]<变量> 使用Camel命名法; var loadingModels = {}
#[FORCE]<常量> 全部字母大写; var STATIC_ENITY = {}
#[FORCE]<函数> 使用Camel命名法; function stringFormat () {}
#[FORCE]<类> 使用Pascal命名法; function TextNode (val) {} //构造函数
#[FORCE]<类的方法和属性> 使用Camel命名法; function TextNode (v, e) { this.value = v; this.engine = e; }
#[FORCE]<枚举变量> 使用Pascal命名法; 枚举属性全部大写, 单词间下划线分割; 
#                 var TargetState = {
#                     READING: 1,
#                     APPLIED: 2,
#                     READY: 3
#                 };
#[FORCE]<命名空间> 使用Camel命名法; nameSpace.heavryWeapon = {}
#[ADVICED]<函数名> 使用动词宾语; function getStyle(v) {}
#[ADVICED]<Boolean> 使用is或has; var isReady = true;



