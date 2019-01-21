### nodejs 主要学习三方面内容
1. js 本身
2. nodejs 
3. 三方库

### 需要学的 ECMAScript, api, 函数等, 生态圈中的各种库

1. ECMAScript (nodejs的根基, 即javasript)
目前主要用es5, 出于兼容性考虑;

(重要)原型链, class

问题1: 1 + undefined = NaN, 1 + null = 1 
(ecmsript(es5 11.6.1) 规范中: 加法首先对两个值进行 toPrimitive 的操作, 对运算结果进行一个 toNumber 的操作)

问题2: 两个空对象的比较: var a = {}, var b = {}, a === b ?, a == b ?, a >= b ?, a <= b ? (es5 11.9.3, 11.8.5)
最直接的答案出自ecmsritpt规范;

2. nodejs 内置的 api
nodejs 使用 v8 作为 javasript 的运行池, 使用 libuv 作为事件循环的框架, 最后"上面像胶水一样黏上一堆易用的api就行成了nodejs";
所以这些 api 就是学习 nodejs 时最先需要学习的必修课;
这些内容都在 nodejs 对应版本的文档中;
注意: 一开始学的时候先过一遍，先捡一些常见的学，把这些先学熟悉了，然后在日常的开发中慢慢积攒自己的肌肉记忆;
"很多东西不需要特别去记忆，因为就算记下了，下一个版本可能就变了, 死记无用";
多注意一些版本更新的changelog;

3. nodejs 的生态圈 (最不需要学习的一部分)