console.log("========================================= TEST nodejs_this =========================================")

function f() {
    console.log("=> name = ", this.name);
};

var A = {
    name : 'AAA',
    func : f
};

var B = {
    name : 'BBB',
    func : f
};

A.func();
B.func();

var Obj = function (p) {
    this.p = p;
};

var obj = new Obj('aaa');
console.log("=> obj.p = ", obj.p);
