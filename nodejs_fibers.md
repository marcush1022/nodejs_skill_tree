#FUTURE AND FIBERS

`Future's main purpose is to make async things works synchronously`

#METHODS
1. `future.wait()`; thread should wait until told to continue;
2. `future.return(value)`; tell waitting future can resume;
3. `future.throw(err)`; throw with an error;

`fibers是由线程或fibers创建的, fibers的调度完全由用户代码控制`, 非抢占型的调度; `而线程和进程受内核控制`, 按照优先级实现了抢占式的多任务; 


#FUTURE
`在node和fibers之间增加的一层抽象`, 便于fibers的调度, `future提供了简单的异步转同步的操作`, future包含在fibers库中, 使用时只需
var future = require('fibers/future');
1. future.wait(); 作用为等待结果; 若需要等待一个futureInstance的结果, 只需调用futureInstance.wait()即可; 若需要等待多个futureInstance的结果, 执行future.wait(futureInstanceArray), 区别是使用futureInstanceArray时wait出错不会抛出错误, 需要使用get;

#Can't use wait() without a fiber--When waitting in a asynchronous callback

"Its impossible to yield a fiber(use wait) without first being in a fiber;"
