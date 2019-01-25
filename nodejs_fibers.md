# **FUTURE AND FIBERS**

> **Future's main purpose is to make async things works synchronously**

## **METHODS**
- **future.wait():** thread should wait until told to continue;
- **future.return(value):** tell waitting future can resume;
- **future.throw(err):** throw with an error;

fibers 是由线程或 fibers 创建的, fibers 的调度完全由用户代码控制, 非抢占型的调度; 而线程和进程受内核控制, 按照优先级实现了抢占式的多任务; 


## **FUTURE**
在 node 和 fibers 之间增加的一层抽象, 便于 fibers 的调度, future 提供了简单的异步转同步的操作, future 包含在fibers 库中, 使用时只需:
```
var future = require('fibers/future');
```
- **future.wait():** 作用为等待结果, 若需要等待一个 futureInstance 的结果, 只需调用 futureInstance.wait() 即可; 若需要等待多个 futureInstance 的结果, 执行 future.wait(futureInstanceArray), 区别是使用 futureInstanceArray 时 wait 出错不会抛出错误, 需要使用 get;

> **Can't use wait() without a fiber--When waitting in a asynchronous callback**

> **"Its impossible to yield a fiber(use wait) without first being in a fiber;"**
