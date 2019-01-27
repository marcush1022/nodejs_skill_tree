# **OOP**

## **MODULE & PACKAGE**

module 是 nodejs 程序的基本组成部分，文件和模块对应，一个文件即为一个模块，此文件包括 JS, JSON，或编译过的 C/C++ 扩展;  
C++ 或 C# 中通常使用一个文件来代表一个类;

## **在NODEJS中定义类**

1. 创建一个文件用于定义类；
2. 在需要使用类的地方 require 自定义类；
3. 调用自定义类的方法;

```
1. create file baseClass.js
2. file:
    // 使用该模块封装base类
    module.exprots = Base;
    function Base() {
        
    }
```
