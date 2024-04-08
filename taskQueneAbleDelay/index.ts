function delayTaskQuene(){
    // 一个执行器,调用执行器将依次执行；
    // 一个记录队列
    // 一个push工具
    const tasks = [];
    function execute(){
        return this;

    }
    function wait(){
        return this;
        // 往队列中插入一个执行时间的定时器
    }
    function waitFirst(){
        // 队首插入一个定时器。
        return this;

    }
    function addTask(){
        return this;
    }
    return {
        execute,
        wait,
        waitFirst,
        addTask,
    }
}

export default delayTaskQuene;